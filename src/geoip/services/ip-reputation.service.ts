import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

interface BlocklistCache {
  [key: string]: {
    ips: Set<string>;
    lastUpdate: number;
  };
}

@Injectable()
export class IpReputationService implements OnModuleInit {
  private blocklistCache: BlocklistCache = {};
  private readonly cacheTTL: number;
  private readonly blocklistUrls: { [key: string]: string };

  constructor(private configService: ConfigService) {
    this.cacheTTL = parseInt(this.configService.get('BLOCKLIST_CACHE_TTL', '3600000'));
    this.blocklistUrls = {
      all: this.configService.get('BLOCKLIST_ALL'),
      ssh: this.configService.get('BLOCKLIST_SSH'),
      mail: this.configService.get('BLOCKLIST_MAIL'),
      apache: this.configService.get('BLOCKLIST_APACHE'),
      imap: this.configService.get('BLOCKLIST_IMAP'),
      ftp: this.configService.get('BLOCKLIST_FTP'),
      sip: this.configService.get('BLOCKLIST_SIP'),
      bots: this.configService.get('BLOCKLIST_BOTS'),
      strongips: this.configService.get('BLOCKLIST_STRONGIPS'),
      ircbot: this.configService.get('BLOCKLIST_IRCBOT'),
      bruteforce: this.configService.get('BLOCKLIST_BRUTEFORCE')
    };
  }

  async onModuleInit() {
    // Initial load of all blocklists
    await this.updateAllBlocklists();
    
    // Set up periodic updates
    setInterval(() => {
      this.updateAllBlocklists();
    }, this.cacheTTL);
  }

  private async updateBlocklist(type: string, url: string): Promise<void> {
    try {
      const response = await axios.get<string>(url, {
        timeout: 5000,
        responseType: 'text'
      });

      const ips = new Set<string>(
        response.data
          .split('\n')
          .map((line: string) => line.trim())
          .filter((line: string) => line && !line.startsWith('#'))
      );

      this.blocklistCache[type] = {
        ips,
        lastUpdate: Date.now()
      };
    } catch (error) {
      console.error(`Failed to update ${type} blocklist:`, error.message);
    }
  }

  private async updateAllBlocklists(): Promise<void> {
    const updatePromises = Object.entries(this.blocklistUrls).map(([type, url]) =>
      this.updateBlocklist(type, url)
    );
    await Promise.allSettled(updatePromises);
  }

  private isCacheValid(type: string): boolean {
    const cache = this.blocklistCache[type];
    if (!cache) return false;
    return Date.now() - cache.lastUpdate < this.cacheTTL;
  }

  async checkIpReputation(ip: string): Promise<{
    is_blacklisted: boolean;
    attack_types: string[];
    total_reports: number;
    last_seen?: string;
  }> {
    const result = {
      is_blacklisted: false,
      attack_types: [] as string[],
      total_reports: 0,
      last_seen: undefined as string | undefined
    };

    // Check each blocklist
    for (const [type, cache] of Object.entries(this.blocklistCache)) {
      if (!this.isCacheValid(type)) {
        await this.updateBlocklist(type, this.blocklistUrls[type]);
      }

      if (cache?.ips.has(ip)) {
        result.is_blacklisted = true;
        result.total_reports++;
        
        switch (type) {
          case 'ssh':
            result.attack_types.push('SSH Brute Force');
            break;
          case 'mail':
            result.attack_types.push('Mail Server Attack');
            break;
          case 'apache':
            result.attack_types.push('Web Server Attack');
            break;
          case 'imap':
            result.attack_types.push('IMAP Attack');
            break;
          case 'ftp':
            result.attack_types.push('FTP Attack');
            break;
          case 'sip':
            result.attack_types.push('SIP/VoIP Attack');
            break;
          case 'bots':
            result.attack_types.push('Known Bot/Crawler');
            break;
          case 'strongips':
            result.attack_types.push('Strong Attack Source');
            break;
          case 'ircbot':
            result.attack_types.push('IRC Bot');
            break;
          case 'bruteforce':
            result.attack_types.push('Login Brute Force');
            break;
        }
      }
    }

    // If blacklisted, try to get the last seen date
    if (result.is_blacklisted) {
      try {
        const response = await axios.get<string>(`https://api.blocklist.de/getlast.php?ip=${ip}`, {
          timeout: 2000
        });
        if (response.data && response.data !== 'not found') {
          result.last_seen = response.data;
        }
      } catch (error) {
        console.warn('Failed to get last seen date:', error.message);
      }
    }

    return result;
  }
}

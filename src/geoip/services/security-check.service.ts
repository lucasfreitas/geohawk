import { Injectable } from '@nestjs/common';
import { SecurityCheck, RESIDENTIAL_ASNS, ADS_PLATFORMS } from '../interfaces/security-check.interface';
import { IpReputationService } from './ip-reputation.service';

@Injectable()
export class SecurityCheckService {
  // Trusted providers with known good infrastructure
  private readonly TRUSTED_PROVIDERS = {
    'GOOGLE': { name: 'Google', trustScore: 90 },
    'CLOUDFLARE': { name: 'Cloudflare', trustScore: 85 },
    'AMAZON': { name: 'Amazon', trustScore: 85 },
    'AWS': { name: 'AWS', trustScore: 85 },
    'MICROSOFT': { name: 'Microsoft', trustScore: 85 },
    'AZURE': { name: 'Azure', trustScore: 85 },
    'DIGITALOCEAN': { name: 'DigitalOcean', trustScore: 80 },
    'ORACLE': { name: 'Oracle Cloud', trustScore: 80 },
    'IBM': { name: 'IBM Cloud', trustScore: 80 },
    'AKAMAI': { name: 'Akamai', trustScore: 85 },
    'FASTLY': { name: 'Fastly', trustScore: 80 }
  };

  // Infrastructure providers (not automatically trusted but legitimate)
  private readonly DATACENTER_PROVIDERS = [
    'Linode', 'OVH', 'Hetzner', 'Vultr', 'GoDaddy',
    'Rackspace', 'Softlayer', 'LeaseWeb', 'ColoCrossing',
    'Alibaba Cloud', 'Tencent Cloud'
  ];

  private readonly KNOWN_SEARCH_ENGINES = [
    { name: 'Google LLC', trustScore: 95 },
    { name: 'Microsoft Corporation', trustScore: 90 },
    { name: 'Yandex LLC', trustScore: 85 },
    { name: 'Baidu', trustScore: 85 },
    { name: 'DuckDuckGo', trustScore: 90 },
    { name: 'Bing', trustScore: 90 },
    { name: 'Yahoo', trustScore: 85 },
    { name: 'Sogou', trustScore: 80 },
    { name: 'Naver Corporation', trustScore: 80 },
    { name: 'Ask.com', trustScore: 80 },
    { name: 'Algolia', trustScore: 80 },
    { name: 'Elasticsearch', trustScore: 80 }
  ];

  private readonly VPN_PROVIDERS = [
    'NordVPN', 'ExpressVPN', 'Private Internet Access', 'ProtonVPN',
    'Surfshark', 'CyberGhost', 'IPVanish', 'TorGuard', 'Mullvad',
    'OpenVPN', 'PureVPN', 'VyprVPN', 'HideMyAss', 'ZenMate',
    'Windscribe', 'AirVPN', 'Perfect Privacy'
  ];

  constructor(private ipReputationService: IpReputationService) {}

  async checkSecurity(
    ip: string,
    asnNumber?: number,
    organization?: string,
    connectionType?: string
  ): Promise<SecurityCheck> {
    const security: SecurityCheck = {
      is_datacenter: false,
      is_tor: false,
      is_vpn: false,
      is_proxy: false,
      is_search_engine: false,
      is_residential: true,
      is_ads_bot: false,
      risk_score: 0,
      risk_level: 'low',
      connection_type: 'Residential', // Default to Residential since is_residential is true
      risk_factors: []
    };

    // Check ASN against known residential ISPs
    if (asnNumber && RESIDENTIAL_ASNS.has(asnNumber)) {
      security.is_residential = true;
      security.connection_type = 'Residential';
    }

    // Check for ads platform bots
    if (organization && asnNumber) {
      const orgUpper = organization.toUpperCase();
      
      // Check against known ads platforms
      for (const platform of ADS_PLATFORMS) {
        if (
          platform.asns.includes(asnNumber) ||
          platform.organizations.some(org => orgUpper.includes(org.toUpperCase()))
        ) {
          security.is_ads_bot = true;
          security.ads_company = platform.name;
          security.risk_factors.push('Advertising Platform Bot');
          security.connection_type = 'Ads Bot';
          break;
        }
      }

      // Initial infrastructure check
      if (this.DATACENTER_PROVIDERS.some(provider => orgUpper.includes(provider.toUpperCase()))) {
        security.is_residential = false;
        security.is_datacenter = true;
        security.is_residential = false;
        security.risk_factors.push('Datacenter Provider');
        security.connection_type = 'Datacenter';
      }

      // Check for VPN providers
      if (this.VPN_PROVIDERS.some(vpn => orgUpper.includes(vpn.toUpperCase()))) {
        security.is_vpn = true;
        security.is_residential = false;
        security.risk_factors.push('VPN Service');
        security.connection_type = 'VPN';
      }
    }

    // Check connection type from IPInfo
    if (connectionType) {
      const connType = connectionType.toLowerCase();
      switch (connType) {
        case 'hosting':
        case 'business':
          security.is_datacenter = true;
          security.is_residential = false;
          security.risk_factors.push('Business/Hosting IP');
          security.connection_type = connectionType;
          break;
        case 'isp':
          security.is_residential = true;
          security.connection_type = 'Residential';
          break;
        case 'proxy':
        case 'tor':
          security.is_proxy = true;
          security.is_residential = false;
          security.risk_factors.push('Proxy/Tor Exit Node');
          security.connection_type = connectionType;
          break;
        case 'cdn':
          security.is_datacenter = true;
          security.is_residential = false;
          security.risk_factors.push('Content Delivery Network');
          security.connection_type = 'CDN';
          break;
      }
    }

    // Check IP reputation from blocklist.de
    try {
      const reputation = await this.ipReputationService.checkIpReputation(ip);
      
      if (reputation.is_blacklisted) {
        security.risk_factors.push(...reputation.attack_types);
        // Force high risk for any blacklisted IP
        security.risk_score = 80; // Ensures "high" risk level
        security.risk_level = 'high'; // Explicitly set to high
      }
    } catch (error) {
      console.warn('Failed to check IP reputation:', error.message);
    }

    // Check if it's a trusted provider
    let trustScore = 0;
    let isTrustedProvider = false;
    
    if (organization) {
      const orgUpper = organization.toUpperCase();
      for (const [key, provider] of Object.entries(this.TRUSTED_PROVIDERS)) {
        if (orgUpper.includes(key)) {
          trustScore = provider.trustScore;
          isTrustedProvider = true;
          security.risk_factors = security.risk_factors.filter(f => f !== 'Datacenter IP');
          if (security.risk_factors.length === 0) {
            security.risk_factors.push('Trusted Datacenter Provider');
          }
          break;
        }
      }

      // Check if it's a known search engine
      for (const engine of this.KNOWN_SEARCH_ENGINES) {
        if (orgUpper.includes(engine.name.toUpperCase())) {
          trustScore = engine.trustScore;
          isTrustedProvider = true;
          security.risk_factors = ['Search Engine Bot'];
          break;
        }
      }
    }

    // Calculate risk score considering trust score
    if (isTrustedProvider) {
      // For trusted providers, start with a low base risk
      security.risk_score = Math.max(0, 100 - trustScore);
    } else {
      // For other IPs, calculate risk based on factors
      if (security.is_tor) security.risk_score += 40;
      if (security.is_vpn) security.risk_score += 30;
      if (security.is_proxy) security.risk_score += 35;
      
      // Only penalize datacenter IPs if they're not from known infrastructure providers
      if (security.is_datacenter && !this.DATACENTER_PROVIDERS.some(
        provider => organization?.toUpperCase().includes(provider.toUpperCase())
      )) {
        security.risk_score += 20;
      }
      
      if (!security.is_residential && !security.is_datacenter) {
        security.risk_score += 15;
      }
    }

    // Cap the score between 0 and 100
    security.risk_score = Math.min(Math.max(security.risk_score, 0), 100);

    // Determine risk level based on score and provider trust
    if (isTrustedProvider && security.risk_score < 30) {
      security.risk_level = 'low';
    } else if (security.risk_score < 35) {
      security.risk_level = 'low';
    } else if (security.risk_score < 70) {
      security.risk_level = 'medium';
    } else {
      security.risk_level = 'high';
    }

    // Deduplicate risk factors
    security.risk_factors = [...new Set(security.risk_factors)];

    return security;
  }
}

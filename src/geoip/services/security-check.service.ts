import { Injectable, OnModuleInit } from '@nestjs/common';
import { SecurityCheck, DATACENTER_ASNS, VPN_ASNS } from '../interfaces/security-check.interface';
import axios from 'axios';
import * as net from 'net';

@Injectable()
export class SecurityCheckService implements OnModuleInit {
  private torExitNodes: Set<string> = new Set();

  async onModuleInit() {
    await this.updateTorExitNodes();
    // Update Tor exit nodes list every hour
    setInterval(() => this.updateTorExitNodes(), 3600000);
  }

  private async updateTorExitNodes() {
    try {
      const response = await axios.get('https://check.torproject.org/exit-addresses');
      const exitNodes = new Set<string>();
      
      response.data.split('\n').forEach((line: string) => {
        if (line.startsWith('ExitAddress')) {
          const ip = line.split(' ')[1];
          if (net.isIP(ip)) {
            exitNodes.add(ip);
          }
        }
      });

      this.torExitNodes = exitNodes;
    } catch (error) {
      console.error('Failed to update Tor exit nodes list:', error);
    }
  }

  checkSecurity(ip: string, asn?: number): SecurityCheck {
    const security: SecurityCheck = {
      is_datacenter: false,
      is_tor: false,
      is_vpn: false,
      is_proxy: false
    };

    // Check if IP is a Tor exit node
    security.is_tor = this.torExitNodes.has(ip);

    if (asn) {
      // Check if IP is from a datacenter
      security.is_datacenter = DATACENTER_ASNS.has(asn);

      // Check if IP is from a known VPN provider
      security.is_vpn = VPN_ASNS.has(asn);

      // Consider it a proxy if it's either a VPN or from certain datacenters
      security.is_proxy = security.is_vpn || security.is_datacenter;
    }

    return security;
  }
}

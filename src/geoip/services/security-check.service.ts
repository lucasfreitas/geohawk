import { Injectable, OnModuleInit } from '@nestjs/common';
import { SecurityCheck, DATACENTER_ASNS, VPN_ASNS, SEARCH_ENGINE_ASNS, RESIDENTIAL_ASNS } from '../interfaces/security-check.interface';
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
      is_proxy: false,
      is_search_engine: false,
      is_residential: false,
      risk_score: 0,
      risk_level: 'low',
      connection_type: 'Unknown',
      risk_factors: []
    };

    // Check if IP is a Tor exit node
    security.is_tor = this.torExitNodes.has(ip);
    if (security.is_tor) {
      security.risk_factors.push('Tor Exit Node');
    }

    if (asn) {
      // Check if IP is from a datacenter
      security.is_datacenter = DATACENTER_ASNS.has(asn);
      if (security.is_datacenter) {
        security.risk_factors.push('Datacenter IP');
      }

      // Check if IP is from a known VPN provider
      security.is_vpn = VPN_ASNS.has(asn);
      if (security.is_vpn) {
        security.risk_factors.push('VPN Service');
      }

      // Check if IP is from a search engine
      security.is_search_engine = SEARCH_ENGINE_ASNS.has(asn);
      if (security.is_search_engine) {
        security.risk_factors.push('Search Engine Bot');
      }

      // Check if IP is from a residential ISP
      security.is_residential = RESIDENTIAL_ASNS.has(asn);

      // Consider it a proxy if it's either a VPN or from certain datacenters
      security.is_proxy = security.is_vpn || (security.is_datacenter && !security.is_search_engine);
      if (security.is_proxy) {
        security.risk_factors.push('Proxy Detection');
      }

      // Determine connection type
      if (security.is_residential) {
        security.connection_type = 'Residential';
      } else if (security.is_datacenter) {
        security.connection_type = 'Datacenter';
      } else if (security.is_vpn) {
        security.connection_type = 'VPN';
      } else if (security.is_search_engine) {
        security.connection_type = 'Search Engine';
      }

      // Calculate risk score (0-100)
      let score = 0;
      if (security.is_tor) score += 40;
      if (security.is_vpn) score += 30;
      if (security.is_datacenter && !security.is_search_engine) score += 20;
      if (security.is_proxy) score += 25;
      if (security.is_residential) score -= 15;
      if (security.is_search_engine) score -= 10;

      security.risk_score = Math.min(Math.max(score, 0), 100);
      
      // Determine risk level based on score
      if (security.risk_score >= 70) {
        security.risk_level = 'high';
      } else if (security.risk_score >= 30) {
        security.risk_level = 'medium';
      } else {
        security.risk_level = 'low';
      }
    }

    return security;
  }
}

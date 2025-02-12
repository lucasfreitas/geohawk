export interface SecurityCheck {
  is_datacenter: boolean;    // Can determine from ASN data
  is_tor: boolean;          // Can check against Tor exit nodes list
  is_vpn: boolean;          // Can check against known VPN ranges
  is_proxy: boolean;        // Can determine from ASN and proxy lists
}

// Known datacenter ASNs
export const DATACENTER_ASNS = new Set([
  15169,  // Google Cloud
  16509,  // Amazon AWS
  14061,  // DigitalOcean
  20473,  // Vultr
  13335,  // Cloudflare
  14618,  // Amazon AWS
  8075,   // Microsoft Azure
  36351,  // SoftLayer
  63949,  // Linode
  19551,  // Incapsula
]);

// Known VPN provider ASNs
export const VPN_ASNS = new Set([
  20473,  // Vultr (often used by VPN providers)
  9009,   // M247 (commonly hosts VPNs)
  42831,  // UK2/100TB (VPN hosting)
  16276,  // OVH (commonly hosts VPNs)
  51167,  // Contabo (VPN hosting)
  174,    // Cogent (commonly hosts VPNs)
  24940,  // Hetzner (VPN hosting)
  3223,   // VOXILITY (VPN infrastructure)
]);

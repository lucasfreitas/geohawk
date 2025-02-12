export interface SecurityCheck {
  is_datacenter: boolean;      // Can determine from ASN data
  is_tor: boolean;            // Can check against Tor exit nodes list
  is_vpn: boolean;            // Can check against known VPN ranges
  is_proxy: boolean;          // Can determine from ASN and proxy lists
  is_search_engine: boolean;   // Can determine from ASN and known bot ranges
  is_residential: boolean;     // Can determine from ASN and IP ranges
  risk_score: number;          // 0-100 based on multiple factors
  risk_level: 'low' | 'medium' | 'high';  // Risk classification
  connection_type: string;     // Residential, Datacenter, etc.
  risk_factors: string[];      // List of detected risk factors
}

// Known search engine bot ASNs
export const SEARCH_ENGINE_ASNS = new Set([
  15169,  // Google
  16509,  // Amazon (AWS - used by many search engines)
  36040,  // Google Cloud
  13238,  // Yandex
  16276,  // OVH (Bing uses these)
]);

// Known residential ISP ASNs (partial list of major ISPs)
export const RESIDENTIAL_ASNS = new Set([
  7922,   // Comcast
  7018,   // AT&T
  701,    // Verizon
  22773,  // Cox Communications
  3320,   // Deutsche Telekom
  2856,   // British Telecom
  4230,   // Claro
  4773,   // MobileOne
  7738,   // Telemar Norte Leste S.A.
  10429,  // AT&T Global
  28573,  // Claro/NET/Embratel
  18881,  // Global Village Telecom
  262753, // VOCE TELECOM (Brazil)
]);

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

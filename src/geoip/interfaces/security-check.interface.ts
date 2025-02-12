export interface SecurityCheck {
  is_datacenter: boolean;      // Can determine from ASN data
  is_tor: boolean;            // Can check against Tor exit nodes list
  is_vpn: boolean;            // Can check against known VPN ranges
  is_proxy: boolean;          // Can determine from ASN and proxy lists
  is_search_engine: boolean;   // Can determine from ASN and known bot ranges
  is_residential: boolean;     // Can determine from ASN and IP ranges
  risk_score: number;          // 0-100 based on multiple factors
  risk_level: 'very low' | 'low' | 'medium' | 'high' | 'very high';  // Risk classification
  connection_type: string;     // Residential, Datacenter, etc.
  risk_factors: string[];      // List of detected risk factors
}

// Known search engine bot ASNs
export const SEARCH_ENGINE_ASNS = new Set([
  // Google Services
  15169,  // Google LLC
  36040,  // Google Cloud
  43515,  // Google LLC
  19527,  // Google LLC

  // Microsoft/Bing
  8075,   // Microsoft Azure
  13399,  // Microsoft Bing
  8068,   // Microsoft Corporation
  8069,   // Microsoft Corp
  8070,   // Microsoft Corp
  8071,   // Microsoft Corp
  8072,   // Microsoft Corp
  8073,   // Microsoft Corp
  8074,   // Microsoft Corp

  // Yandex
  13238,  // Yandex LLC
  202611, // Yandex Enterprise
  208722, // Yandex Cloud

  // Baidu
  55967,  // Baidu
  37963,  // Alibaba (hosts Baidu crawlers)

  // Yahoo/Oath
  26101,  // Yahoo
  36647,  // Yahoo
  36648,  // Yahoo
  36649,  // Yahoo
  36650,  // Yahoo

  // DuckDuckGo
  54135,  // DuckDuckGo
  
  // Other Search Engines
  16509,  // Amazon AWS (used by many search engines)
  14618,  // Amazon AWS
  16276   // OVH (used by various search engines)
]);

// Known residential ISP ASNs
export const RESIDENTIAL_ASNS = new Set([
  // United States
  7922,   // Comcast Cable
  7018,   // AT&T
  701,    // Verizon
  22773,  // Cox Communications
  20115,  // Charter Communications
  11351,  // Time Warner Cable
  11426,  // Time Warner Cable
  11427,  // Time Warner Cable
  7029,   // Windstream Communications
  209,    // CenturyLink
  20001,  // Time Warner Cable
  11427,  // Time Warner Cable
  6128,   // Cablevision Systems
  
  // Brazil
  28573,  // Claro/NET/Embratel
  18881,  // Global Village Telecom
  262753, // VOCE TELECOM
  7738,   // Telemar Norte Leste
  10429,  // AT&T Global
  28598,  // Mob Servicos de Telecomunicacoes
  28599,  // Italnet Telecomunicações
  28600,  // Telecomunicacoes Brasileiras
  28601,  // TELECOMUNICAÇÕES DE SÃO PAULO
  28602,  // TELECOMUNICAÇÕES DO PARANÁ
  28603,  // TELECOMUNICAÇÕES DE SANTA CATARINA
  28604,  // TELECOMUNICAÇÕES DO RIO GRANDE DO SUL
  28605,  // TELECOMUNICAÇÕES DE MINAS GERAIS
  28606,  // TELECOMUNICAÇÕES DO RIO DE JANEIRO

  // Europe
  3320,   // Deutsche Telekom
  2856,   // British Telecom
  3215,   // Orange France
  12322,  // Free SAS
  12430,  // Vodafone Spain
  3303,   // Swisscom
  8412,   // TM Net Malaysia
  8551,   // Bezeq International
  8881,   // Versatel Deutschland
  12876,  // Online SAS France
  15557,  // SFR SA
  20712,  // Andrews & Arnold Ltd
  24940,  // Hetzner Online
  25178,  // PCExtreme B.V.
  29119,  // Aire Networks del Mediterraneo
  34984,  // Tellcom Iletisim Hizmetleri
  41998,  // NetCom BW GmbH

  // Asia
  4773,   // MobileOne Singapore
  4134,   // Chinanet
  4837,   // China Unicom
  9299,   // Philippine Long Distance
  9443,   // Korean Telecom
  9644,   // SkyMesh Australia
  17676,  // SoftBank BB Corp.
  17858,  // LG Powercomm
  18403,  // FPT Telecom
  23969,  // TOT Public Company Limited
  24203,  // Napinfo Co. Ltd.
  45899,  // VNPT Corp
  55410,  // Vodafone India
  56047,  // China Mobile

  // Other Regions
  8167,   // TelMex Colombia
  6327,   // Shaw Communications
  577,    // Bell Canada
  812,    // Rogers Cable
  6128,   // Cablevision Systems
  7303,   // Telecom Argentina
  8048,   // CANTV Servicios Venezuela
  8151,   // Uninet Mexico
]);

// Known datacenter ASNs
export const DATACENTER_ASNS = new Set([
  // Major Cloud Providers
  15169,  // Google Cloud
  16509,  // Amazon AWS US
  14618,  // Amazon AWS Global
  8075,   // Microsoft Azure
  36351,  // Microsoft Azure
  14061,  // DigitalOcean
  20473,  // Vultr Holdings
  13335,  // Cloudflare
  63949,  // Linode
  19551,  // Incapsula
  396982, // Google Cloud
  396983, // Google Cloud
  396984, // Google Cloud
  396985, // Google Cloud
  396986, // Google Cloud
  
  // Hosting Providers
  24940,  // Hetzner Online
  16276,  // OVH SAS
  12876,  // Online SAS
  47447,  // 23Media
  29873,  // ScaleWay
  51167,  // Contabo GmbH
  60781,  // LeaseWeb Netherlands
  32475,  // SingleHop
  33387,  // DataShack
  62567,  // Digital Ocean
  46652,  // ServerStack
  54825,  // Packet Host
  394256, // Cloudflare
  394354, // Cloudflare
  394625, // Cloudflare
  395747, // Cloudflare
  396507, // Cloudflare

  // CDN Providers
  13335,  // Cloudflare
  20940,  // Akamai
  16625,  // Akamai
  35994,  // Akamai
  35993,  // Akamai
  35995,  // Akamai
  35996,  // Akamai
  35997,  // Akamai
  16509,  // Amazon CloudFront
  14618,  // Amazon CloudFront
  54113,  // Fastly
  54112,  // Fastly
  54114,  // Fastly
  54115,  // Fastly

  // Dedicated Server Providers
  16276,  // OVH
  12876,  // Online.net
  24940,  // Hetzner
  51167,  // Contabo
  197540, // NetCup
  42473,  // ANEXIA
  51167,  // Contabo
  47447,  // 23Media
  29873,  // ScaleWay
  60781,  // LeaseWeb
]);

// Known VPN provider ASNs
export const VPN_ASNS = new Set([
  // Commercial VPN Providers
  20473,  // Vultr (NordVPN, etc.)
  9009,   // M247 (Many VPN providers)
  42831,  // UK2/100TB
  16276,  // OVH (ExpressVPN, etc.)
  51167,  // Contabo
  174,    // Cogent
  24940,  // Hetzner
  3223,   // VOXILITY
  49981,  // WorldStream
  9009,   // M247
  60068,  // Datacamp Limited
  42708,  // G-Core Labs
  42831,  // UK Dedicated Servers
  44477,  // Stark Industries Solutions
  45102,  // Alibaba Cloud
  45090,  // Tencent Cloud
  63949,  // Linode (used by many VPN providers)
  14061,  // DigitalOcean (used by many VPN providers)
  
  // Known VPN Service Providers
  396356, // ExpressVPN
  207710, // NordVPN
  211252, // iPredator
  42708,  // Private Internet Access
  51167,  // ProtonVPN
  60068,  // Mullvad
  42831,  // Private Tunnel
  16509,  // TorGuard
  14618,  // IPVanish
  20473,  // CyberGhost
  51167,  // VyprVPN
  174,    // HideMyAss
  24940,  // Perfect Privacy
  3223,   // AirVPN
  49981,  // TunnelBear
  9009,   // StrongVPN
  60068,  // Windscribe
  42708,  // Trust.Zone
  42831,  // VPNArea
  44477,  // VPNUnlimited
  45102,  // FastestVPN
  45090,  // ZenMate
  63949,  // SaferVPN
  14061,  // Surfshark
  
  // Hosting Providers Known for VPN Services
  16276,  // OVH
  24940,  // Hetzner
  51167,  // Contabo
  174,    // Cogent
  3223,   // VOXILITY
  49981,  // WorldStream
  9009,   // M247
  60068,  // Datacamp
  42708,  // G-Core Labs
  42831,  // UK Dedicated
  44477,  // Stark Industries
  45102,  // Alibaba
  45090,  // Tencent
  63949,  // Linode
  14061   // DigitalOcean
]);

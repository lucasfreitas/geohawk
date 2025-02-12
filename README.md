```
   ______           __  __                __  
  / ____/__  ____  / / / /___ __      __/ /__
 / / __/ _ \/ __ \/ /_/ / __ `/ | /| / / //_/
/ /_/ /  __/ /_/ / __  / /_/ /| |/ |/ / ,<   
\____/\___/\____/_/ /_/\__,_/ |__/|__/_/|_|  
```
# GeoHawk

A high-precision IP geolocation service that soars above the rest. Built with NestJS and powered by MaxMind GeoIP2 databases, GeoHawk provides detailed location information for both IPv4 and IPv6 addresses with hawk-eye accuracy.

## Author

Lucas Freitas <lucas@lucasfreitas.eti.br>

## Features

- 🌍 Comprehensive geolocation data for IPv4 and IPv6 addresses
- 🏙️ Detailed information including city, state, country, and coordinates
- 💰 Country-specific currency information with native symbols
- 🗣️ Official languages with native names
- 🎌 Country flag emojis
- 🌐 Country-specific TLDs (Top Level Domains)
- 🛡️ Security information (VPN, Tor, datacenter detection)
- 🔍 Automatic IP type detection
- 🌐 ASN (Autonomous System Number) and organization details
- 🔒 Secure API key authentication
- 📚 Complete Swagger/OpenAPI documentation
- 🐳 Docker support with optimized configuration
- ⚡ High-performance database access
- 🛡️ Built-in security features

## Prerequisites

- Node.js 18 or higher
- Docker and Docker Compose (optional, for containerized deployment)
- MaxMind GeoIP2 databases:
  - GeoLite2-City.mmdb
  - GeoLite2-Country.mmdb
  - GeoLite2-ASN.mmdb

> **Note**: You can obtain the MaxMind GeoIP2 databases either by:
> - Creating an account at [MaxMind's website](https://www.maxmind.com/en/geolite2/signup)
> - Downloading directly from [P3TERX/GeoLite.mmdb](https://github.com/P3TERX/GeoLite.mmdb) repository (easier method)

## Installation

### Using Docker (Recommended)

1. Clone the repository:
```bash
git clone https://github.com/lucasfreitas/geohawk.git
cd geohawk
```

2. Copy the example environment file and configure your settings:
```bash
cp .env.example .env
```

3. Place your MaxMind database files in the `geoip-bases` directory:
```bash
mkdir -p geoip-bases
# Copy your .mmdb files to geoip-bases/
```

4. Build and start the containers:
```bash
docker-compose up -d
```

### Manual Installation

1. Clone the repository and install dependencies:
```bash
git clone https://github.com/lucasfreitas/geohawk.git
cd geohawk
npm install
```

2. Configure environment variables:
```bash
cp .env.example .env
# Edit .env with your settings
```

3. Place MaxMind databases in the `geoip-bases` directory

4. Start the service:
```bash
# Development mode
npm run start:dev

# Production mode
npm run build
npm run start:prod
```

## API Documentation

### Authentication

All API endpoints require authentication using an API key. Include your key in the `x-api-key` header:

```bash
curl -H "x-api-key: your_api_key" http://localhost:3000/geoip/lookup?ip=8.8.8.8
```

### Endpoints

#### GET /geoip/lookup

Lookup geolocation information for an IP address.

**Parameters:**
- `ip` (query, required): IPv4 or IPv6 address to lookup

**Headers:**
- `x-api-key` (required): Your API key for authentication

**Success Response (200 OK):**
```json
{
  "ip": "8.8.8.8",
  "type": "ipv4",
  "city": "Mountain View",
  "state": "California",
  "country": "United States",
  "countryCode": "US",
  "location": {
    "latitude": 37.4223,
    "longitude": -122.0847,
    "timeZone": "America/Los_Angeles"
  },
  "asn": {
    "number": 15169,
    "organization": "Google LLC"
  },
  "network": "8.8.8.0/24",
  "currencies": [
    {
      "symbol": "$",
      "name": "US Dollar",
      "name_native": "US Dollar",
      "symbol_native": "$",
      "decimal_digits": 2,
      "rounding": 0,
      "code": "USD",
      "name_plural": "US dollars",
      "type": "fiat"
    }
  ],
  "emoji": "🇺🇸",
  "languages": [
    {
      "name": "English",
      "name_native": "English"
    }
  ],
  "timezones": [
    "America/New_York",
    "America/Chicago",
    "America/Denver",
    "America/Los_Angeles",
    "America/Anchorage",
    "America/Honolulu"
  ],
  "is_in_european_union": false,
  "tlds": [
    ".us",
    ".edu",
    ".gov",
    ".mil"
  ],
  "security": {
    "is_datacenter": true,
    "is_tor": false,
    "is_vpn": false,
    "is_proxy": true
  }
}
```

**Error Responses:**
- `401 Unauthorized`: Invalid or missing API key
- `400 Bad Request`: Invalid IP address format

### Interactive Documentation

Access the interactive API documentation at:
- Swagger UI: http://localhost:3000/api
- OpenAPI JSON: http://localhost:3000/api-json

## Configuration

### Environment Variables

| Variable | Description | Default | Required |
|----------|-------------|---------|----------|
| PORT | Server port | 3000 | No |
| API_KEY | Authentication key | - | Yes |
| NODE_ENV | Environment (development/production) | production | No |
| GEOIP_CITY_DB | Path to City database | geoip-bases/GeoLite2-City.mmdb | No |
| GEOIP_COUNTRY_DB | Path to Country database | geoip-bases/GeoLite2-Country.mmdb | No |
| GEOIP_ASN_DB | Path to ASN database | geoip-bases/GeoLite2-ASN.mmdb | No |

## Security Features

- 🔐 API key authentication for all endpoints
- 📁 Read-only database mounting in Docker
- 👤 Non-root user container execution
- 🛡️ Configured CORS protection
- 🚦 Rate limiting for abuse prevention
- 🔒 Security headers implementation

## Monitoring & Maintenance

- 🏥 Docker healthcheck configuration
- 📝 Structured logging
- 📊 Basic usage metrics
- 🔄 Automatic database updates support

## Troubleshooting

### Common Issues

1. **Database Loading Errors**
   - Verify .mmdb files are in the correct location
   - Check file permissions
   - Ensure database files are not corrupted

2. **Authentication Errors**
   - Confirm API_KEY is set in .env
   - Verify x-api-key header is being sent correctly
   - Check for whitespace in API key

3. **Container Issues**
   - Check logs: `docker-compose logs`
   - Verify port availability
   - Confirm database volume mounting

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## Support

If you encounter any issues or have questions:
1. Check the [Issues](https://github.com/lucasfreitas/geohawk/issues) page
2. Review existing documentation
3. Open a new issue with:
   - Detailed description of the problem
   - Steps to reproduce
   - Expected vs actual behavior
   - Relevant logs and environment details

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [MaxMind](https://www.maxmind.com/) for providing GeoIP2 databases
- [NestJS](https://nestjs.com/) framework
- All contributors who have helped improve this service

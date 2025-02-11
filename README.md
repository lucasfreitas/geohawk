# GeoIP Service

Serviço de geolocalização de IPs usando bases de dados MaxMind GeoIP2.

## Funcionalidades

- Consulta de informações de geolocalização para IPv4 e IPv6
- Detecção automática do tipo de IP
- Informações detalhadas de cidade, estado, país
- Dados de ASN e organização
- Autenticação via API Key
- Documentação Swagger
- Suporte a Docker
- Proteção de endpoints

## Pré-requisitos

- Node.js 18+
- Docker e Docker Compose (opcional, para execução containerizada)
- Bases de dados MaxMind GeoIP2:
  - GeoLite2-City.mmdb
  - GeoLite2-Country.mmdb
  - GeoLite2-ASN.mmdb

## Instalação

### Usando o Script de Setup (Recomendado)

```bash
# Dar permissão de execução ao script
chmod +x setup.sh

# Executar o script
./setup.sh
```

O script irá:
1. Criar os diretórios necessários
2. Instalar as dependências
3. Verificar a presença das bases de dados
4. Gerar as chaves de segurança
5. Construir a imagem Docker

### Instalação Manual

1. Clone o repositório e entre no diretório:
```bash
git clone <repositório>
cd novo
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env
# Edite o arquivo .env com suas configurações
```

## Execução

### Usando Docker (Recomendado)

```bash
# Construir e iniciar os containers
docker-compose up -d

# Verificar logs
docker-compose logs -f
```

### Execução Local

```bash
# Desenvolvimento
npm run start:dev

# Produção
npm run build
npm run start:prod
```

## Uso da API

### Autenticação

A API usa autenticação via API Key que deve ser enviada no header `x-api-key` em todas as requisições:

```bash
curl http://localhost:3000/geoip/lookup?ip=8.8.8.8 \
  -H "x-api-key: sua_api_key_aqui"
```

### Endpoints

#### GET /geoip/lookup
Consulta informações de um IP.

**Headers:**
- `x-api-key`: Sua chave de API (obrigatório)

**Parâmetros:**
- `ip`: Endereço IP para consulta (IPv4 ou IPv6)

**Exemplo de resposta:**
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
  "network": "8.8.8.0/24"
}
```

## Documentação da API

A documentação completa da API está disponível em:
- Swagger UI: http://localhost:3000/api
- OpenAPI JSON: http://localhost:3000/api-json

## Configuração

### Variáveis de Ambiente

| Variável | Descrição | Padrão |
|----------|-----------|---------|
| PORT | Porta do servidor | 3000 |
| API_KEY | Chave de API para autenticação | - |
| NODE_ENV | Ambiente de execução | production |
| GEOIP_CITY_DB | Caminho para base City | geoip-bases/GeoLite2-City.mmdb |
| GEOIP_COUNTRY_DB | Caminho para base Country | geoip-bases/GeoLite2-Country.mmdb |
| GEOIP_ASN_DB | Caminho para base ASN | geoip-bases/GeoLite2-ASN.mmdb |

## Segurança

- Todos os endpoints são protegidos por API Key
- As bases de dados são montadas como read-only no container
- O container roda com usuário não-root
- CORS configurado para maior segurança
- Rate limiting implementado para prevenir abusos

## Monitoramento

- Healthcheck configurado no Docker
- Logs estruturados
- Métricas básicas de uso

## Troubleshooting

### Problemas Comuns

1. **Erro ao carregar bases de dados GeoIP:**
   - Verifique se os arquivos .mmdb estão no diretório correto
   - Confirme as permissões dos arquivos
   - Verifique se os arquivos não estão corrompidos

2. **Erro de autenticação:**
   - Verifique se está enviando a API Key corretamente no header x-api-key
   - Confirme se a API_KEY está configurada no .env

3. **Container não inicia:**
   - Verifique os logs: `docker-compose logs`
   - Confirme se as portas não estão em uso
   - Verifique se as bases de dados estão montadas corretamente

## Suporte

Para suporte ou dúvidas:
1. Abra uma issue no repositório
2. Inclua logs relevantes e passos para reproduzir o problema
3. Descreva o comportamento esperado vs atual

## Licença

Este projeto está licenciado sob a MIT License.

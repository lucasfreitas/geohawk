#!/bin/bash

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
NC='\033[0m'

echo "Testando bases de dados..."
node test-maxmind.js

if [ $? -ne 0 ]; then
    echo -e "${RED}Erro ao testar as bases de dados. Abortando.${NC}"
    exit 1
fi

echo -e "\n${GREEN}Bases de dados verificadas com sucesso!${NC}"

# Instalar dependências se necessário
if [ ! -d "node_modules" ]; then
    echo "Instalando dependências..."
    npm install
fi

# Gerar .env se não existir
if [ ! -f ".env" ]; then
    echo "Gerando arquivo .env..."
    API_KEY=$(openssl rand -hex 32)
    
    cat > .env << EOF
# Chave de API para autenticação
API_KEY=$API_KEY

# Configurações do servidor
PORT=3000
NODE_ENV=development

# Caminho para as bases de dados GeoIP
GEOIP_CITY_DB=geoip-bases/GeoLite2-City.mmdb
GEOIP_COUNTRY_DB=geoip-bases/GeoLite2-Country.mmdb
GEOIP_ASN_DB=geoip-bases/GeoLite2-ASN.mmdb

# Configurações opcionais
LOG_LEVEL=debug
EOF
fi

# Iniciar o serviço em background
echo "Iniciando o serviço..."
npm run start:dev &
PID=$!

# Aguardar o serviço iniciar
echo "Aguardando o serviço iniciar..."
sleep 5

# Obter API Key do arquivo .env
API_KEY=$(grep API_KEY .env | cut -d '=' -f2)

# Testar alguns IPs
echo -e "\nTestando consultas de IP..."

IPS=(
    "8.8.8.8"           # Google DNS
    "1.1.1.1"           # Cloudflare
    "2606:4700:4700::1111"  # Cloudflare IPv6
    "104.244.42.193"    # Twitter
    "157.240.195.35"    # Facebook
)

for ip in "${IPS[@]}"; do
    echo -e "\nConsultando IP: $ip"
    curl -s "http://localhost:3000/geoip/lookup?ip=$ip" \
        -H "x-api-key: $API_KEY" | python3 -m json.tool
done

# Matar o processo do serviço
echo -e "\nFinalizando o serviço..."
kill $PID

echo -e "\n${GREEN}Testes concluídos!${NC}"

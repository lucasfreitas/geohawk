#!/bin/bash

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
NC='\033[0m'

echo "Iniciando testes do GeoIP Service..."

# Verificar se o serviço está rodando
echo -n "Verificando se o serviço está rodando... "
if curl -s http://localhost:3000/api > /dev/null; then
    echo -e "${GREEN}OK${NC}"
else
    echo -e "${RED}FALHOU${NC}"
    echo "O serviço não está respondendo. Verifique se ele está rodando."
    exit 1
fi

# Obter token de autenticação
echo -n "Obtendo token de autenticação... "
API_KEY=$(grep API_KEY .env | cut -d '=' -f2)
TOKEN_RESPONSE=$(curl -s -X POST http://localhost:3000/auth/token \
  -H "Content-Type: application/json" \
  -d "{\"apiKey\": \"$API_KEY\"}")

TOKEN=$(echo $TOKEN_RESPONSE | grep -o '"token":"[^"]*' | cut -d'"' -f4)

if [ -n "$TOKEN" ]; then
    echo -e "${GREEN}OK${NC}"
else
    echo -e "${RED}FALHOU${NC}"
    echo "Não foi possível obter o token. Resposta:"
    echo $TOKEN_RESPONSE
    exit 1
fi

# Testar consulta de IP
echo "Testando consulta de IPs..."

# Array de IPs para teste
IPS=("8.8.8.8" "1.1.1.1" "2606:4700:4700::1111")

for ip in "${IPS[@]}"; do
    echo -n "Consultando IP $ip... "
    RESPONSE=$(curl -s "http://localhost:3000/geoip/lookup?ip=$ip" \
      -H "Authorization: Bearer $TOKEN")
    
    if echo $RESPONSE | grep -q "country"; then
        echo -e "${GREEN}OK${NC}"
        echo "Resposta:"
        echo $RESPONSE | python3 -m json.tool
    else
        echo -e "${RED}FALHOU${NC}"
        echo "Resposta inesperada:"
        echo $RESPONSE
    fi
    echo "----------------------------------------"
done

echo "Testes concluídos!"

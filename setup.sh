#!/bin/bash

echo "Iniciando setup do projeto..."

# Criar diretório para as bases GeoIP se não existir
mkdir -p geoip-bases

# Instalar dependências
echo "Instalando dependências..."
npm install

# Verificar se as bases de dados existem
if [ ! -f "geoip-bases/GeoIP2-City.mmdb" ] || [ ! -f "geoip-bases/GeoIP2-ISP.mmdb" ]; then
    echo "AVISO: As bases de dados GeoIP não foram encontradas em geoip-bases/"
    echo "Por favor, coloque os arquivos GeoIP2-City.mmdb e GeoIP2-ISP.mmdb no diretório geoip-bases/"
    exit 1
fi

# Gerar chaves seguras para .env se não existir
if [ ! -f ".env" ]; then
    echo "Gerando arquivo .env com chaves seguras..."
    JWT_SECRET=$(openssl rand -hex 32)
    API_KEY=$(openssl rand -hex 32)
    
    cat > .env << EOF
# Chave secreta para geração de tokens JWT
JWT_SECRET=$JWT_SECRET

# Chave de API para autenticação inicial
API_KEY=$API_KEY

# Configurações do servidor
PORT=3000
NODE_ENV=production

# Caminho para as bases de dados GeoIP
GEOIP_CITY_DB=geoip-bases/GeoIP2-City.mmdb
GEOIP_ISP_DB=geoip-bases/GeoIP2-ISP.mmdb
EOF
fi

# Construir a imagem Docker
echo "Construindo imagem Docker..."
docker build -t geoip-service .

echo "Setup concluído!"
echo ""
echo "Para executar localmente:"
echo "npm run start:dev"
echo ""
echo "Para executar com Docker:"
echo "docker-compose up -d"
echo ""
echo "Para testar a API:"
echo "1. Obtenha um token:"
echo "curl -X POST http://localhost:3000/auth/token -H 'Content-Type: application/json' -d '{\"apiKey\": \"$API_KEY\"}'"
echo ""
echo "2. Consulte um IP:"
echo "curl http://localhost:3000/geoip/lookup?ip=8.8.8.8 -H 'Authorization: Bearer SEU_TOKEN_AQUI'"

#!/bin/bash

# Criar diretório para as bases GeoIP se não existir
mkdir -p geoip-bases

# Instalar dependências
echo "Instalando dependências..."
npm install

# Verificar se as bases de dados existem
if [ ! -f "geoip-bases/GeoIP2-City.mmdb" ] || [ ! -f "geoip-bases/GeoIP2-ISP.mmdb" ]; then
    echo "AVISO: As bases de dados GeoIP não foram encontradas em geoip-bases/"
    echo "Por favor, coloque os arquivos GeoIP2-City.mmdb e GeoIP2-ISP.mmdb no diretório geoip-bases/"
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

echo "Configuração concluída!"
echo "Para iniciar o projeto em desenvolvimento:"
echo "npm run start:dev"
echo ""
echo "Para construir e executar com Docker:"
echo "docker-compose up -d"

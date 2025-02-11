# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Copiar arquivos de configuração
COPY package*.json ./
COPY tsconfig*.json ./

# Instalar dependências
RUN npm ci

# Copiar código fonte
COPY src/ ./src/

# Build da aplicação
RUN npm run build

# Production stage
FROM node:18-alpine

WORKDIR /app

# Criar usuário não-root
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Copiar arquivos necessários do estágio de build
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist/ ./dist/

# Instalar apenas dependências de produção
RUN npm ci --only=production

# Criar diretório para bases de dados com permissões corretas
RUN mkdir -p /app/geoip-bases && chown -R appuser:appgroup /app

# Copiar bases de dados (devem ser montadas como volume em runtime)
VOLUME /app/geoip-bases

# Mudar para usuário não-root
USER appuser

# Expor porta da aplicação
EXPOSE 3000

# Healthcheck
HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
    CMD wget --no-verbose --tries=1 --spider http://localhost:3000/health || exit 1

# Comando para iniciar a aplicação
CMD ["node", "dist/main"]

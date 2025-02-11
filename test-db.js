const maxmind = require('@maxmind/geoip2-node');
const fs = require('fs').promises;
const path = require('path');

async function testDatabase(dbPath, dbName) {
    console.log(`\nTestando ${dbName}...`);
    try {
        // Verifica se o arquivo existe
        await fs.access(dbPath);
        console.log('✓ Arquivo encontrado');

        // Tenta ler o arquivo
        const buffer = await fs.readFile(dbPath);
        console.log('✓ Arquivo lido com sucesso');

        // Tenta abrir a base de dados
        const reader = await maxmind.open(buffer);
        console.log('✓ Base de dados aberta com sucesso');

        // IPs de teste
        const testIPs = ['8.8.8.8', '1.1.1.1', '2606:4700:4700::1111'];

        // Testa consultas
        for (const ip of testIPs) {
            try {
                const result = await reader.get(ip);
                if (result) {
                    console.log(`✓ Consulta bem sucedida para IP ${ip}`);
                    console.log('Exemplo de dados:');
                    console.log(JSON.stringify(result, null, 2));
                } else {
                    console.log(`⚠ Sem dados para IP ${ip}`);
                }
            } catch (err) {
                console.log(`⚠ Erro ao consultar IP ${ip}: ${err.message}`);
            }
        }

        return true;
    } catch (error) {
        console.error(`✗ Erro: ${error.message}`);
        return false;
    }
}

async function main() {
    const databases = [
        { path: 'geoip-bases/GeoLite2-City.mmdb', name: 'GeoLite2 City Database' },
        { path: 'geoip-bases/GeoLite2-Country.mmdb', name: 'GeoLite2 Country Database' },
        { path: 'geoip-bases/GeoLite2-ASN.mmdb', name: 'GeoLite2 ASN Database' }
    ];

    console.log('Iniciando teste das bases de dados GeoLite2...\n');

    let allValid = true;
    for (const db of databases) {
        const isValid = await testDatabase(db.path, db.name);
        if (!isValid) {
            allValid = false;
            console.error(`\n⚠ Problemas encontrados com ${db.name}`);
        }
    }

    if (allValid) {
        console.log('\n✓ Todas as bases de dados estão íntegras e funcionando corretamente!');
    } else {
        console.error('\n✗ Foram encontrados problemas com uma ou mais bases de dados.');
        process.exit(1);
    }
}

main().catch(console.error);

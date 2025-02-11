const maxmind = require('@maxmind/geoip2-node');
const fs = require('fs').promises;
const path = require('path');

async function testMaxMind() {
  try {
    console.log('Carregando bases de dados...');
    
    const cityPath = path.join(__dirname, 'geoip-bases', 'GeoLite2-City.mmdb');
    const countryPath = path.join(__dirname, 'geoip-bases', 'GeoLite2-Country.mmdb');
    const asnPath = path.join(__dirname, 'geoip-bases', 'GeoLite2-ASN.mmdb');

    console.log('Verificando arquivos:');
    console.log('City DB:', cityPath);
    console.log('Country DB:', countryPath);
    console.log('ASN DB:', asnPath);

    const cityBuffer = await fs.readFile(cityPath);
    console.log('City DB carregado:', cityBuffer.length, 'bytes');
    
    const countryBuffer = await fs.readFile(countryPath);
    console.log('Country DB carregado:', countryBuffer.length, 'bytes');
    
    const asnBuffer = await fs.readFile(asnPath);
    console.log('ASN DB carregado:', asnBuffer.length, 'bytes');

    console.log('\nInicializando readers...');
    
    const cityReader = await maxmind.Reader.openBuffer(cityBuffer);
    console.log('City reader inicializado');
    
    const countryReader = await maxmind.Reader.openBuffer(countryBuffer);
    console.log('Country reader inicializado');
    
    const asnReader = await maxmind.Reader.openBuffer(asnBuffer);
    console.log('ASN reader inicializado');

    const testIp = '187.35.135.101';
    console.log(`\nTestando consultas para IP: ${testIp}`);

    try {
        console.log('\nConsulta City:');
        const cityResult = await cityReader.city(testIp);
        console.log(JSON.stringify(cityResult, null, 2));
    } catch (error) {
        console.error('Erro na consulta City:', error.message);
    }

    try {
        console.log('\nConsulta Country:');
        const countryResult = await countryReader.country(testIp);
        console.log(JSON.stringify(countryResult, null, 2));
    } catch (error) {
        console.error('Erro na consulta Country:', error.message);
    }

    try {
        console.log('\nConsulta ASN:');
        const asnResult = await asnReader.asn(testIp);
        console.log(JSON.stringify(asnResult, null, 2));
    } catch (error) {
        console.error('Erro na consulta ASN:', error.message);
    }

    console.log('\nTodos os testes completados!');
    process.exit(0);
  } catch (error) {
    console.error('Erro durante os testes:', error);
    process.exit(1);
  }
}

testMaxMind().catch(error => {
    console.error('Erro fatal:', error);
    process.exit(1);
});

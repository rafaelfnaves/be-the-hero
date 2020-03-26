const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {

    async index(request, response) { // -> rota de listagem
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },    

    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');
    
        await connection('ongs').insert({  // await para "aguardar", percorrer todo o code e depois executar
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
        
        return response.json({ id });
    } 
};
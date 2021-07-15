import { SiteClient } from 'datocms-client';

export default async function recebedorDeRequests(req, res) {
    if(req.method === 'POST') {
        const TOKEN = 'b40d8bfa07cadf6e49c13f9c8d9b01'
        const client = new SiteClient(TOKEN)

        const register = await client.items.create({
            itemType: "968402", //Id do model de "Comunity" criado pelo Dato
            ...req.body,
        })

        res.json({
            dados: 'Algum dado',
            register: register,
        })
        return;
    }

    res.status(404).json ({
        message: 'Nada no GET'
    })
}
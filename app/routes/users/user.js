


const express = require('express')
const router = express.Router()
const ctr = require('../../controller/user')

router.get('/', async (req, resp) =>{
    try {
        let data = await ctr.getClients()
        resp.status(200).send({status: 200, data : [data], detail: {size: data.length}})
    } catch (error) {
        resp.status(500).send("Ocurrio un problema")
    }
})

router.post('/', (req, resp) =>{
    let body = req.body
    resp.status(200).send(body)
})

router.delete('/', (req, resp) =>{
    resp.status(200).send("Se elimino el registro")
})

module.exports = router
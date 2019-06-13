
const services = require('../services/user')

async function getClients(){
    try {
        let data = await services.getClients()
        return data
    } catch (error) {
        return error
    }
}


module.exports = {
    getClients
}

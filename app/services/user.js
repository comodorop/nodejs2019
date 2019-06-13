
const exec = require('../execution/execution')

async function getClients() {
    let sql = 'SELECT * FROM clients'
    let data = await exec.executeGet(sql)
    return data
}


function save() {

}

module.exports = {
    getClients,
    save
}
const mongo = require('mongoose')
const url = `mongodb://localhost/couserNodejs`

async function connectionMongo(){
    return mongo.connect(url, {useNewUrlParser: true}, (err)=>{
        if(err) throw err
    })
}

module.exports = {
    connectionMongo
}


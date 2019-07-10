const mongoose = require('../connection/connectionMongoose')

async function model() {
    try {
        let mongo = await mongoose.connectionMongo()
        const users = mongo.Schema({
            uuid: String,
            user: String,
            pass: String,
            status: String,
            created_at: { type: Date, required: true, default: Date.now }
        })
        return mongo.model('users', users)
    }
    catch (err) {
        console.log(err)
    }
}
module.exports = {
    model
}


var jwt = require('jwt-simple');
const secret = "123456"


async function generateToken(payload) {
    let token = jwt.encode(payload, secret)
    return token
}


async function decodeToken(token) {
    let decoded = jwt.decode(token, secret)
    return decoded
}




async function test() {
    try {
        let token = await generateToken({ "user": "123456" })
        console.log(token)
        console.log("*******************")
        let tokenDecode = await decodeToken(token)
        console.log(tokenDecode)
    } catch (error) {
        console.log(error)
    }
}
test()


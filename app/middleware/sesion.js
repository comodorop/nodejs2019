function validate(req, resp, next) {
    console.log(req)

    if (req.url === "/user") {
        next()
    } else {
        if (req.headers.authorization !== undefined) {
            next()
        } else {
            return resp.status(401).send({ "status": 401, msg: "No tienes permisos de cabezera" })
        }
    }
}


function validateUnique(req, resp, next){
    console.log("esto es un middleware especifico")
    next()
}

module.exports = {
    validate,
    validateUnique
}
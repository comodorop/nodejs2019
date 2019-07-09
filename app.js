require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const user = require('./app/routes/users/user')
const middleware = require('./app/middleware/sesion')

app.use(middleware.validate)

app.use('/users',middleware.validateUnique, user)
app.use('/logins',user)




app.listen('8080', () =>{
    if(process.env.DEVELOP === "true"){
        console.log('Se inicio el server en el puerto 8080')
    }
})


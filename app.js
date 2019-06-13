const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const user = require('./app/routes/users/user')

app.use('/user', user)




app.listen('8080', () =>{
    console.log('Se inicio el server')
})
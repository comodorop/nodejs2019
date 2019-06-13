// const mysql = require('mysql2')
const mysql = require('mysql2/promise');
const bluebird = require('bluebird');

async function connection () {
  const connection = await mysql.createConnection({host:'localhost', user: 'root', password: '123456', database: 'fotodinario', Promise: bluebird})
  return connection
}




  module.exports = {
    connection
  }


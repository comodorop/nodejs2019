// const mysql = require('mysql2')
const mysql = require('mysql2/promise');
const bluebird = require('bluebird');

async function connection () {
  const connection = await mysql.createConnection({host: process.env.HOST, user:process.env.USER_DB, password: process.env.PASSWORD, database: process.env.DB, Promise: bluebird})
  return connection
}




  module.exports = {
    connection
  }


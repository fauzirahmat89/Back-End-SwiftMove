const mysql = require('mysql2')

const dbPool = mysql.createPool ({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'swiftmove'
})

module.exports = dbPool.promise();
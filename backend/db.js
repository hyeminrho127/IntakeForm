const mysql = require('mysql2');

// Create a MySQL database connection
const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'Smile106127@',
  database: 'immigration',
});

module.exports = db;

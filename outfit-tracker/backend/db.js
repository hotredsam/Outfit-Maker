const mysql = require('mysql2/promise');

const dbConfig = {
  host: 'localhost',
  user: 'your_db_user',
  password: 'your_db_password',
  database: 'your_db_name',
};

const pool = mysql.createPool(dbConfig);

module.exports = pool;

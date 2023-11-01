const mysql = require('mysql2/promise');
const config = require('../config');

async function query(sql, params) {
  const pool = mysql.createPool(config.db);
  const [results, ] = await pool.execute(sql, params);
  return results;
}

module.exports = {
  query
}
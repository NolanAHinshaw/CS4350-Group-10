const dotenv = require('dotenv');
dotenv.config();

const config = {
    db: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PW,
        database: process.env.DB,
        port: process.env.DB_PORT,
        connectTimeout: 60000,
        connectionLimit : 10,
      },
    listPerPage: 10,
  };

  module.exports = config;
const config = {
    db: {
        // host: process.env.DATABASE_HOST,
        // port: process.env.DATABASE_PORT,
        // username: process.env.DATABASE_USER,
        // password: process.env.DATABASE_PW,
        // database: process.env.DATABASE,
        host: '104.62.84.241',
        user: 'root',
        password: 'StudentPulse420',
        database: 'users',
        port: 3306,
        connectTimeout: 60000
      },
    listPerPage: 10,
  };

  module.exports = config;
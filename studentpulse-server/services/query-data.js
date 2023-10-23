const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT *
    FROM login LIMIT ${offset},${config.listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}

async function create(queryData){
    const result = await db.query(
        `INSERT INTO login 
        (id, firstname, lastname, username, email, password) 
        VALUES 
        ('${queryData.id}', ${queryData.firstname}, ${queryData.lastname}, ${queryData.username}, ${queryData.email}, ${queryData.password})`
    );

    let message = 'Error in creating account';

    if (result.affectedRows) {
        message = 'account created successfully';
    }

    return {message};
}

module.exports = {
  getMultiple,
  create
}
const dbPool = require('../config/database')

const getAllPartners = () => {
  const SQLQuery = 'SELECT * FROM partners';

  return dbPool.execute(SQLQuery)
}

const createNewPartner = (body) => {
  const SQLQuery = `INSERT INTO partners (idpartnes,name, description, service, price, loc) 
                    VALUES ('${body.idpartnes}','${body.name}', '${body.description}', '${body.service}', '${body.price}', '${body.loc}')`;
  return dbPool.execute(SQLQuery);
}

const updatePartner = (body) => {
  const SQLQuery = `UPDATE partners
                    SET name='${body.name}', description='${body.description}', service='${body.service}', price='${body.price}', loc='${body.loc}'
                    WHERE ( idpartnes= '${body.idpartnes}')`;
  return dbPool.execute(SQLQuery);
}

const getCheckPartner = (username, password) => {
  const SQLQuery = 'SELECT * FROM partner WHERE username = ? AND password = ?';
  const values = [username, password];

  return dbPool.execute(SQLQuery, values);
};

module.exports = {
  getAllPartners,
  createNewPartner,
  getCheckPartner,
  updatePartner
}
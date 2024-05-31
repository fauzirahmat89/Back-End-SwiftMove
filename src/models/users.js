const dbPool = require('../config/database')

const getAllUsers = () => {
  const SQLQuery = 'SELECT * FROM users';

  return dbPool.execute(SQLQuery)
}

const getCheckUsers = (username, password) => {
  const SQLQuery = 'SELECT * FROM users WHERE username = ? AND password = ?';
  const values = [username, password];

  return dbPool.execute(SQLQuery, values);
};

const createNewUser = (body) => {
  const SQLQuery = `INSERT INTO users (name, email, contact, username, password) 
                    VALUES ('${body.name}', '${body.email}', '${body.contact}', '${body.username}', '${body.password}')`;
  return dbPool.execute(SQLQuery);
}

const createOrder = (body) => {
  const SQLQuery = `INSERT INTO swiftmove.order (idUser, idMitra, name, contact, pickAddress, dropAddress, date, status)
                    VALUES ('${body.idUser}', '${body.idMitra}', '${body.name}', '${body.contact}', '${body.pickAddress}', '${body.dropAddress}', '${body.date}', '${body.status}')`;
  return dbPool.execute(SQLQuery);
}

const getStatus = (body) => {
  const SQLQuery = `SELECT
                    swiftmove.order.id,
                    swiftmove.order.idUser,
                    swiftmove.order.idMitra,
                    swiftmove.order.name AS nameUser,
                    swiftmove.order.contact,
                    swiftmove.order.pickAddress,
                    swiftmove.order.dropAddress,
                    swiftmove.order.date,
                    swiftmove.order.status,
                    swiftmove.partners.*
                  FROM
                    swiftmove.order
                  INNER JOIN
                    swiftmove.partners
                  ON
                    swiftmove.order.idMitra = swiftmove.partners.idpartnes
                  WHERE
                    swiftmove.order.idUser = '${body.idUser}' AND (swiftmove.order.status = '1' OR swiftmove.order.status = '2');`;
                    return dbPool.execute(SQLQuery);
                  };

const submitOrder = (body) => {
  const SQLQuery = `UPDATE swiftmove.order SET status='3' WHERE (idUser='${body.idUser}')`;
  return dbPool.execute(SQLQuery);
}

const getIdOrder = (body) => {
  const SQLQuery = `SELECT id,idMitra FROM swiftmove.order WHERE (idUser='${body.idUser}')`;
  return dbPool.execute(SQLQuery);
}

const insertUlasan = (idOrder,idMitra,body) => {
  const SQLQuery = `INSERT INTO swiftmove.ulasan (idOrder, idMitra, ulasan) VALUES ('${idOrder}', '${idMitra}', '${body.ulasan}')`;
  return dbPool.execute(SQLQuery);
}

module.exports = {
  getAllUsers,
  createNewUser,
  getCheckUsers,
  createOrder,
  getStatus,
  submitOrder,
  getIdOrder,
  insertUlasan
}
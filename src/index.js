const express = require('express');
const app = express();
const UserRoute = require('./routes/users.js')
const PartnerRoute = require('./routes/partners.js')
const middlewareLogRequest = require('./middleware/logs.js')
require('dotenv').config()

const PORT = process.env.PORT;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
});

app.use(middlewareLogRequest)
app.use(express.json()) 
app.use('/users', UserRoute);
app.use('/partners', PartnerRoute);

app.listen(PORT, () => {
  console.log(`Server up and running in Port ${PORT}`)
})
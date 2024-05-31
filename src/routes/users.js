const express = require('express');
const router = express.Router();
const UserController = require('../controller/users.js')
//CREATE - POST
router.post('/', UserController.createNewUsers)
router.post('/order', UserController.createOrder)
router.post('/order/submit', UserController.submitOrder)
//READ - GET
router.get('/', UserController.getAllUsers)
router.get('/Sign', UserController.getCheckUsers)
router.post('/status', UserController.getStatus)
//Update - PATCH
router.patch('/:idUser', UserController.updateUsers)
//Delete - Delete
router.delete('/:idUser', UserController.deleteUser)


module.exports = router;
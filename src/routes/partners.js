const express = require('express');
const router = express.Router();
const PartnerController = require('../controller/partners')

//CREATE - POST
router.post('/', PartnerController.createNewPartner )
router.post('/update', PartnerController.updatePartner)
//READ - GET
router.get('/', PartnerController.getAllPartners )
router.get('/sign',PartnerController.getCheckPartner)
router.get('/order',)

module.exports = router;

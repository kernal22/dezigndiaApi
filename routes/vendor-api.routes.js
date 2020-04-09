const express = require('express');
const router = express.Router();

const VendorController = require('../controller/vendor.controller');

const vendorController = new VendorController();

router.post('/sendmail', vendorController.sendMail);

module.exports = router;
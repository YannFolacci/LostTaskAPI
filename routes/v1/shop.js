const express = require('express');
const router = express.Router();

const service = require('../../services/v1/shop');
const security = require('../../middleware/security');


router.route('/')
    .get(service.getShop)
    .patch(security.checkJWT, security.checkAdmin, service.update)
  
module.exports = router;

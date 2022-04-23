const express = require('express');
const router = express.Router();

const service = require('../../services/v1/region');
const security = require('../../middleware/security');

const serverController = require('./server');

router.route('/')
    .get(service.getAll)
    .put(security.checkJWT, security.checkAdmin, service.add)

router.route('/:addr', security.checkJWT, security.checkAdmin)
    .patch(service.update)
    .delete(service.delete)

router.use('/:addr/servers', serverController);

module.exports = router;

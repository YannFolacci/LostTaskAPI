const express = require('express');
const router = express.Router({mergeParams: true});

const service = require('../../services/v1/server');
const security = require('../../middleware/security');

router.route('/')
    .get(service.getAll)
    .put(security.checkJWT, security.checkAdmin, service.add)
router.route('/:server')
    .get(service.getOne)
    .patch(security.checkJWT, security.checkAdmin, service.update)
    .delete(security.checkJWT, security.checkAdmin, service.delete)

module.exports = router;

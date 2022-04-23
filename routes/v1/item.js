const express = require('express');
const router = express.Router();

const service = require('../../services/v1/item');
const security = require('../../middleware/security');


router.route('/')
    .get(service.getAll)
    .put(security.checkJWT, security.checkAdmin, service.add)

router.route('/:id', security.checkJWT, security.checkAdmin)
    .patch(service.update)
    .delete(service.delete)


module.exports = router;

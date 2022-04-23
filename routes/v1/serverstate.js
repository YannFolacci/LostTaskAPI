const express = require('express');
const router = express.Router();

const service = require('../../services/v1/serverstate');
const security = require('../../middleware/security');

router.route('/')
    .get(service.getAll)
    .put(service.add)

router.route('/:id')
    .patch(service.update)
    .delete(service.delete)

module.exports = router;

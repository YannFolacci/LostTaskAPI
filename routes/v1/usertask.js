const express = require('express');
const router = express.Router();

const service = require('../../services/v1/usertask');
const security = require('../../middleware/security');


router.route('/')
    .get(service.getAll)
    .put(service.add)

router.route('/:task')
    .get(service.getById)
    .patch(service.update)
    .delete(service.delete)

router.get('/:task/check', service.check)

module.exports = router;
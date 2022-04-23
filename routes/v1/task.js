const express = require('express');
const router = express.Router();

const service = require('../../services/v1/task');
const security = require('../../middleware/security');

const taskTypeController = require('./tasktype');

router.route('/')
    .get(service.getAll)
    .put(security.checkAdmin, service.add)

router.get('/island', service.getByLocation)

router.route('/id/:id')
    .get(service.getById)
    .patch(security.checkAdmin, service.update)
    .delete(security.checkAdmin, service.delete)

router.use('/types', security.checkAdmin, taskTypeController)

module.exports = router;

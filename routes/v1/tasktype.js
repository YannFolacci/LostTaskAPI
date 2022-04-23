const express = require('express');
const router = express.Router();

const service = require('../../services/v1/tasktype');
const security = require('../../middleware/security');


router.route('/')
    .get(service.getAll)
    .put(security.checkAdmin, service.add)

router.route('/:id')
    .get(service.getRelatedTasks)
    .patch(security.checkAdmin, service.update)
    .delete(security.checkAdmin, service.delete)


module.exports = router;
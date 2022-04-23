const express = require('express');
const router = express.Router({mergeParams: true});

const service = require('../../services/v1/character');
const security = require('../../middleware/security');

router.route('/')
    .get(service.getAll)
    .put(service.add)

router.route('/:character')
    .get(service.getOne)
    .patch(service.update)
    .delete(service.delete)

module.exports = router;

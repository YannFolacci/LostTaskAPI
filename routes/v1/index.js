const express = require('express');
const router = express.Router();
const security = require('../../middleware/security');

const userController = require('./user');
const classeController = require('./classe');
const regionController = require('./region');
const serverStateController = require('./serverstate');
const shopController = require('./shop');
const taskController = require('./task');
const itemController = require('./item');
const islandController = require('./island');


router.get('/', async (req, res) => {
    res.status(200).json({
        name   : 'API', 
        version: '1.0', 
        status : 200, 
        message: 'Bienvenue sur l\'API testing boup !'
    });
});

router.use('/classes', classeController);
router.use('/server-states', security.checkJWT, security.checkAdmin, serverStateController);
router.use('/regions', regionController);
router.use('/islands', islandController);


router.use('/users', userController);

router.use('/shop', shopController);
router.use('/tasks', taskController);
router.use('/items', itemController);




module.exports = router;

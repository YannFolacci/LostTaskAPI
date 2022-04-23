const express = require('express');
const router = express.Router();

const service = require('../../services/v1/user');
const security = require('../../middleware/security');

const characterController = require('./character');
const userTaskController = require('./usertask');

/**
 * @swagger
 /users:
    put:
        summary: Create user
        responses:
            "201":
                description: "OK"
                content:
                    application/json:
                    schema:
                        type: object
                        properties:
                        - id: 
                        - email:
            "501":
                description: "Error"
    post:
      summary: Auth user
      requestBody:
        content:
            application/json:
              schema:
                type: object
                properties:
                  - email
                  - password
      responses:
        "200":
          description: "Auth ok"
        "403":
          description: "Wrong credentials"
        "404":
          description: "User not found"
        "501":
          description: "Error"
 */
router.route('/')
    .put(service.add)
    .post(service.auth)
    .get(service.getAll)

router.route('/:id', security.checkJWT)
    // .get(service.getById)
    .patch(service.update)
    .delete(service.delete)


router.post('/:id/main', security.checkJWT, service.setMain);


router.use('/:id/characters',  security.checkJWT, security.checkUser, characterController);
router.use('/:id/tasks',  security.checkJWT, security.checkUser, userTaskController);

module.exports = router;

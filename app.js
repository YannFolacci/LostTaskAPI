const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const mongodb = require('./database/mongo');

//documentation
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

mongodb.initClientDbConnection();

const indexRouter = require('./routes/v1/index');

const app = express();

app.use(cors({
    exposedHeaders: ['Authorization'],
    origin: '*'
}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(cookieParser());

app.use('/api/v1', indexRouter);

app.use(function (req, res, next) {
    res.status(404).json({
        name: 'API',
        version: '1.0',
        status: 404,
        message: 'not_found'
    });
});

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Lost Task API',
        version: '1.0.0',
        description: 'API for Companion App of Lost Ark',
        license: {
            name: 'Licensed Under MIT',
            url: 'https://spdx.org/licenses/MIT.html'
        },
        contact: {
            name: 'Yann Folacci',
            email: 'dev@yannfolacci.fr'
        }
    },
    servers: [
        {
        url: 'http://localhost:3000',
        description: 'Development server'
        },
    ],
};

const options = {
    swaggerDefinition,
    // Paths to files containing OpenAPI definitions
    apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = app;
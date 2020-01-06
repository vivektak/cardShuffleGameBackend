const express = require('express');
const router = express.Router();

const options = {
	swaggerDefinition: {
		info: {
			title: 'Card Deck Game',
			version: '1.0.1'
		},
		tags: [],
		schemes: [ 'http' ],
		host: 'localhost:3000',
		basePath: ''
	},
	apis: [ './controller/card.controller.js' ]
};

const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = swaggerJSDoc(options);

router.get('/json', function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.send(swaggerSpec);
});

router.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = {
	router
};

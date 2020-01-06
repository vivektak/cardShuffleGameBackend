const express = require('express');
const cors = require('cors');
const swagger = require("./swagger.js");
const cardController = require('./controller/card.controller')

const app = express();

app.use(cors())

app.use("/swagger", swagger.router);

app.get('/api/getRandomCards', cardController.getRandomCards);

app.listen(3000);

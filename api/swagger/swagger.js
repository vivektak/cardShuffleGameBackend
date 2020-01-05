const express = require("express");
const router = express.Router();

const options = {
  swaggerDefinition: {
    info: {
      title: "Nagarro",
      version: "1.0.1"
    },
    tags: [
      {
        name: "User"
      },
      {
        name: "Job"
      }
    ],
    schemes: ["https"],
    host: "localhost:3000",
    basePath: ""
  },
  apis: [

  ]
};

const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = swaggerJSDoc(options);

router.get("/json", function (req, res) {
  res.setHeader("Content-Type", "application/json");
  res.send(swaggerSpec);
});

router.use("/", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = {
  router
};

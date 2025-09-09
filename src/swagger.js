const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

// Configuração do Swagger
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Pessoas API",
      version: "1.0.0",
      description: "CRUD de pessoas",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./src/routes/pessoas.js"], // onde ficam os endpoints
};

const swaggerSpec = swaggerJsDoc(options);

const setupSwagger = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

module.exports = setupSwagger;

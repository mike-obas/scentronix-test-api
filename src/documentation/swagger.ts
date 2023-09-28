import { Express } from "express";
import * as swaggerJsdoc from "swagger-jsdoc";
import * as swaggerUi from "swagger-ui-express";

const version = "1.0.0";

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Scentronix Test User API Docs",
      version,
    },
    servers: [
      {
        url: "https://europe-west2-scentronix-test.cloudfunctions.net/users_api",
      },
      {
        url: "http://localhost:5000/scentronix-test/europe-west2/users_api",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
        apiKeyAuth: {
          type: "apiKey",
          in: "header",
          name: "user-key",
        },
      },
    },
  },
  apis: ["./src/handlers/*.ts", "./src/handlers/documentation/*.ts"],
};

const swaggerSpec = swaggerJsdoc(options);

function swaggerDocs(app: Express) {
  //swagger page
  app.use("/docs", swaggerUi.serve);
  app.get("/docs", swaggerUi.setup(swaggerSpec));
}

export default swaggerDocs;

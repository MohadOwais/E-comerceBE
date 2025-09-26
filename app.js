const express = require("express");
require("dotenv").config({ path: ".env" });
const app = express();
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(cors());
app.set("trust proxy", true);

const combiningReqParams = (req, res, next) => {
  const params = { ...req.body, ...req.query };
  req["allParams"] = params;
  next();
};
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/v1", express.static(path.join(__dirname, "dist")));

const db = require("./config/db");

const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "Express API with Swagger",
      version: "0.0.1",
      description:
        "This is a simple CRUD API application made with Express and documented with Swagger",
    },
    server: {
      host: true, // equivalent to '0.0.0.0'
      port: 5173,
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "apiKey",
          name: "x-auth-token",
          scheme: "bearer",
          in: "header",
        },
      },
    },
    security: [
      {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
        },
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const specs = swaggerJsdoc(options);

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true })
);

//Routes
const routes = require("./routes");

(async () => {
  try {
    const result = await db.query("SELECT CURRENT_TIMESTAMP");
    console.log(`Connected to MySql: ${result[0].CURRENT_TIMESTAMP}`);
  } catch (error) {
    console.log(error);
    console.error(`Error In Connecting to MySQL`);
  }
})();
app.get("/", async (req, res) => {
  res.send({
    message: `Backend is running`,
    environment: process.env.APP_ENV_NAME,
    version: process.env.APP_VER_PREFIX,
  });
});

app.use(`/${process.env.APP_VER_PREFIX}`, routes);

module.exports = app;

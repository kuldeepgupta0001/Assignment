import express from "express";
import bodyParser from "body-parser";
import ErrorMiddleware from "./middlewares/Error.js";

const app = express();

//  Using Middleware

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());

// Routes
import category from "./routes/categorieRoutes.js";
import category from "./routes/categorieRoutes.js";
import product from "./routes/productRoutes";

app.use("/api/v1", category);
app.use("/api/v1", product);

app.get("/", (req, res) => {
  return res.send("server is working");
});

export default app;

app.use(ErrorMiddleware);

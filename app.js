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

// Routes
import categories from "./routes/categorieRoutes.js";
import products from "./routes/productRoutes";

app.use("/api/v1", categories);
app.use("/api/v1", products);

app.get("/", (req, res) => {
  return res.send("server is working");
});

export default app;

app.use(ErrorMiddleware);

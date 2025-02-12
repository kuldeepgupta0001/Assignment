import app from "./app.js";
import ErrorHandler from "./utils/errorHandler.js";
import { db } from "./connect.js";

db.connect((err) => {
  if (err) next(new ErrorHandler("Server Error", 500));
  console.log("MySQL Connected...");
});

app.listen(4000, () => {
  console.log(`Server is working on port:${4000}`);
});

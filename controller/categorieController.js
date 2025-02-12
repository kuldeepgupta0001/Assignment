import { catchAsyncError } from "../middlewares/catchAsyncError";
import ErrorHandler from "../utils/errorHandler.js";
import { db } from "../connect.js";

export const getCategorie = catchAsyncError(async (req, res, next) => {
  db.query("SELECT * FROM categories", (err, results) => {
    if (err) next(new ErrorHandler("Server Error", 500));
    res.json(results);
  });
});

export const addCategorie = catchAsyncError(async (req, res, next) => {
  const { name } = req.body;
  db.query(
    "INSERT INTO categories (name) VALUES (?)",
    [name],
    (err, result) => {
      if (err) next(new ErrorHandler("Server Error", 500));
      res.json({ id: result.insertId, name });
    }
  );
});
export const updateCategorie = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;
  const { name } = req.body;
  db.query("UPDATE categories SET name = ? WHERE id = ?", [name, id], (err) => {
    if (err) next(new ErrorHandler("Server Error", 500));
    res.json({ message: "Category updated successfully" });
  });
});
export const deleteCategorie = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;
  db.query("DELETE FROM categories WHERE id = ?", [id], (err) => {
    if (err) next(new ErrorHandler("Server Error", 500));
    res.json({ message: "Category deleted successfully" });
  });
});

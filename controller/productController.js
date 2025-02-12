import { catchAsyncError } from "../middlewares/catchAsyncError";
import { db } from "../connect.js";
import ErrorHandler from "../utils/errorHandler.js";

export const getProduct = catchAsyncError(async (req, res, next) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const offset = (page - 1) * limit;

  const query = `
        SELECT p.id, p.name, c.id as categoryId, c.name as categoryName 
        FROM products p 
        JOIN categories c ON p.categoryId = c.id 
        LIMIT ? OFFSET ?`;

  db.query(query, [limit, offset], (err, results) => {
    if (err) next(new ErrorHandler("Server Error", 500));

    db.query("SELECT COUNT(*) as count FROM products", (err, countResult) => {
      if (err) next(new ErrorHandler("Server Error", 500));
      res.json({
        total: countResult[0].count,
        pages: Math.ceil(countResult[0].count / limit),
        data: results,
      });
    });
  });
});

export const addProduct = catchAsyncError(async (req, res, next) => {
  const { name, categoryId } = req.body;
  db.query(
    "INSERT INTO products (name, categoryId) VALUES (?, ?)",
    [name, categoryId],
    (err, result) => {
      if (err) next(new ErrorHandler("Server Error", 500));
      res.json({ id: result.insertId, name, categoryId });
    }
  );
});

export const updateProduct = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;
  const { name, categoryId } = req.body;
  db.query(
    "UPDATE products SET name = ?, categoryId = ? WHERE id = ?",
    [name, categoryId, id],
    (err) => {
      if (err) return next(err);
      res.json({ message: "Product updated successfully" });
    }
  );
});
export const deleteProduct = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;
  db.query("DELETE FROM products WHERE id = ?", [id], (err) => {
    if (err) return next(err);
    res.json({ message: "Product deleted successfully" });
  });
});

import express from "express";
import {
  addCategory,
  deleteCategory,
  getCategorie,
  updateCategory,
} from "../controller/categorieController";

const router = express.Router();

router.route("/categories").get(getCategorie);
router.route("/add-category").post(addCategory);
router.route("/category/:id").put(updateCategory).delete(deleteCategory);

export default router;

import express from "express";
import {
  addCategorie,
  deleteCategorie,
  getCategorie,
  updateCategorie,
} from "../controller/categorieController";

const router = express.Router();

router.route("/categories").get(getCategorie);
router.route("/add-category").post(addCategorie);
router.route("/category/:id").put(updateCategorie).delete(deleteCategorie);

export default router;

import express from "express";
import {
  addCategorie,
  deleteCategorie,
  getCategorie,
  updateCategorie,
} from "../controller/categorieController";

const router = express.Router();

router.route("/getCategorie").get(getCategorie);
router.route("/addCategorie").post(addCategorie);
router.route("/categories/:id").put(updateCategorie).delete(deleteCategorie);

export default router;

import express from "express";
import {
  addProduct,
  deleteProduct,
  getProduct,
  updateProduct,
} from "../controller/productController";

const router = express.Router();

router.route("/getproduct").get(getProduct);
router.route("/addproduct").post(addProduct);
router.route("/product/:id").put(updateProduct).delete(deleteProduct);

export default router;

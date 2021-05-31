import express from "express";
import { getCart, createCart, deleteCart, updateCart, deleteCartByUserId } from "../Controller/Cart_Controller.js";

const router = express.Router();

router.get("/", getCart);
router.patch("/:userId", createCart);
router.delete("/:id", deleteCart);
router.delete("/det/:id", deleteCartByUserId);
router.patch("/update/:id", updateCart);

export default router;
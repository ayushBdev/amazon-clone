import express from "express";
import { getOrder, createOrder } from "../Controller/Order_Controller.js";

const router = express.Router();

router.post("/", createOrder);
router.get("/", getOrder);

export default router;
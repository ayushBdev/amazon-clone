import express from "express";
import Middleware from './../Middleware/Middleware.js';
import  { getProducts, createProduct } from "../Controller/Products_Controller.js";

const router = express.Router();

router.get("/", getProducts);
router.post("/", createProduct);

export default router;
import express from "express";
import async from "async";
import ProductPlaylist from './../Modals/Products_Schema.js';

const router = express.Router();

export const getProducts = async(req, res) => {
    try {
        const productInfo = await ProductPlaylist.find();
        res.status(200).json(productInfo);
    }catch (err) {
        res.status(404).json({message: error.message});
    }
}

export const createProduct = async(req,res) => {
    try {
        const { title, selectedFile, ratings, price, description} = req.body;
        const newProduct = new ProductPlaylist({ title, selectedFile, ratings, price, description});
        await newProduct.save();
        res.send(200).json(newProduct);
    }catch (err) {
        res.status(404).json({message: error.message});
    }
}

export default router;
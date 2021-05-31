import express from "express";
import async from "async";
import OrderSchema from './../Modals/OrderHistory_Schema.js';

const router = express.Router();

export const getOrder = async(req, res) => {
    try {
        const orderInfo = await OrderSchema.find();
        res.status(200).json(orderInfo);
    }catch (err) {
        res.status(404).json({message: err.message});
    }
}

export const createOrder = async(req,res) => {
    try {
        const { orderPlaced, total, userName, proId, userId } = req.body;
        const newOrder = await OrderSchema.create({ orderPlaced, total, userName, proId, userId });
        res.send(200).json(newOrder);
    }catch (err) {
        res.status(404).json({message: err.message});
    }
}

export default router;
import express from "express";
import async from "async";
import CartSchema from './../Modals/Cart_Schema.js';

const router = express.Router();

export const getCart = async(req, res) => {
    try {
        const cartInfo = await CartSchema.find();
        res.status(200).json(cartInfo);
    }catch (err) {
        res.status(404).json({message: err.message});
    }
}

export const createCart = async(req,res) => {
    try {
        const { productId, qty, userId, price } = req.body;

        const oldProduct = await CartSchema.findOne({productId});

        if(oldProduct) {
            const post = await CartSchema.find({productId: productId});
            const id = post.map(ar => ar._id);
            const qtys = post.map(ar => ar.qty);
            const user = post.map(ar => ar.userId);
            const { userId } = req.params;

            if (user[0] === userId) {
                const update = await CartSchema.findByIdAndUpdate(id, { qty: qtys[0] + 1}, { new: true });
                res.status(200).json(update);
            }
        } else {
            const newCart = await CartSchema.create({ productId, qty, userId, price });
            res.send(200).json(newCart);
        }
    }catch (err) {
        res.status(404).json({message: err.message});
    }
}

export const deleteCart = async(req,res) => {
    const { id } = req.params;
    try {
        const Delete = await CartSchema.findByIdAndRemove(id);
        res.status(200).json(Delete);
    }catch(err) {
        res.status(404).json({message: err.message});
    }
};

export const deleteCartByUserId = async(req,res) => {
    const { id } = req.params;
    console.log(id);
    try {
        const Delete = await CartSchema.deleteMany({userId: id})
        res.status(200).json(Delete);
    }catch(err) {
        res.status(404).json({message: err.message});
    }
};

export const updateCart = async(req,res) => {
    try {
        const { id } = req.params;
        const { value } = req.body;
        const post = await CartSchema.findById(id);
        if(value === "like") {
            const update = await CartSchema.findByIdAndUpdate(id, { qty: post.qty + 1 }, { new: true });
            res.status(200).json(update);
        } else {
            const update = await CartSchema.findByIdAndUpdate(id, { qty: post.qty - 1 }, { new: true });
            res.status(200).json(update);
        }
    }catch(err) {
        res.status(404).json({message: err.message});
    }
};

export default router;
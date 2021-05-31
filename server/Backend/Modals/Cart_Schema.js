import mongoose from "mongoose";

const cartSchema = mongoose.Schema({
    productId: {
        type: String
    },
    qty: {
        type: Number
    },
    price: {
        type: Number
    },
    userId: {
        type: String
    },
});

const CartSchema = mongoose.model("CartSchema", cartSchema);

export default CartSchema;
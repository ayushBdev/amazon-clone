import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
    orderPlaced: {
        type: String
    },
    total: {
        type: Number
    },
    userName: {
        type: String
    },
    proId: {
        type: Array
    },
    userId: {
        type: String
    },
});

const OrderSchema = mongoose.model("OrderSchema", orderSchema);

export default OrderSchema;
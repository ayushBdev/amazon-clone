import mongoose from "mongoose";

const productsSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    selectedFile: {
        type: String,
        required: true
    },
    ratings: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
});

const ProductPlaylist = mongoose.model("ProductPlaylist", productsSchema);

export default ProductPlaylist;
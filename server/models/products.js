const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let ProductSchema = new Schema({
    productID: {
        type: string,
        required: true,
    },
    productName: {
        type: String,
    },
    productPrice: {
        type: Number,
    },
    productQuantity: {
        type: Number,
    },
    productImge: {
        type: String,
    },
    productHasTaxe: {
        type: Boolean,
    },
    description:{
        type: String,
    },
    categories:{
        type: String,
    },
    brand:{
        type: String,
    }
});


const Product = mongoose.model("Product", ProductSchema);

module.exports = Product
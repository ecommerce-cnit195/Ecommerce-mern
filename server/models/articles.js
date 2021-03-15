const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let ArticleSchema = new Schema({
    articleNumber: {
        type: Number,
        required: true,
    },
    articleName: {
        type: String,
    },
    articlePrice: {
        type: Number,
    },
    articleQuantity: {
        type: Number,
    },
    articleImge: {
        type: String,
    },
    articleHasTaxe: {
        type: Boolean,
    }

});

const Article = mongoose.model("Article", ArticleSchema);

module.exports = Article
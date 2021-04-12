const express = require('express');
const productsRouter = express.Router();
const Product = require("../models/products")


//add new products
productsRouter.post("/addNewProduct", (req,res)=>{
Product.create();
});

//get all products
productsRouter.get("/products/all", (req,res) => {
    Product.find().then((products)=>{
        res.json(products)
    })
})

//get products by category
productsRouter.get("/product/category", (req, res)=>{
    Product.find({category: req.params.category}).then((products)=>{
        res.json(products)
    })
})

//get products by price
productsRouter.get("/product/price", (req, res)=>{
    Product.find({price: req.params.price}).then((products)=>{
        res.json(products)
    })
})



module.exports = productsRouter;




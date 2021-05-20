const express = require('express');
const { Mongoose } = require('mongoose');
const productsRouter = express.Router();
const Product = require("../models/products")


//add new products
productsRouter.post("/addNewProduct", async (req,res)=>{
    const productID = req.body.productID;
    const productName = req.body.productName;
    const productPrice = req.body.productPrice;
    const productQuantity = req.body.productQuantity;
    const productImge = req.body.productImge;
    const productHasTaxe = req.body.productHasTaxe;
    const description = req.body.description;
    const categories = req.body.categories;
    const brand = req.body.brand;
    
    console.log(productID,productName, productPrice, productQuantity, productImge,productHasTaxe, description, categories, brand);
    
    const newProduct = new Product({
        productID,
        productName,
        productPrice,
        productQuantity,
        productImge,
        productHasTaxe,
        description,
        categories,
        brand
    });
    
    const addProduct = await newProduct.save();
    console.log("addProduct,",addProduct);
    
    if(addProduct){
        return res.status(200).json({addProduct});
    }
    return res.status(500).json({err: "Adding Product fail"});
    //Product.create();
});

//get all products
productsRouter.get("/products/all", (req,res) => {
    Product.find().then((products)=>{
        res.json(products)
    })
})

//get products by category
productsRouter.get("/category/:category", (req, res)=>{
    console.log("category,", req.params.category)
    Product.find({categories: req.params.category})
        .then((products)=>{
            res.json(products)
       })
       .catch(err=>status(400).json("Get Error: " + err.message))
})

//get products by price
productsRouter.get("/price/:price", (req, res)=>{
    Product.find({productPrice: req.params.price})
        .then((products)=>{
           res.json(products)
        })
        .catch(err=>status(400).json("Get Error: " + err.message))
})

//get products by id
productsRouter.get("/id/:id", (req, res) => {
    console.log("category,", req.params.id)
    Product.findById(req.params.id)
        .then((products)=>{
            res.json(products)
        })
        .catch(err=>res.status(400).json("Get Error: "+ err.message))
})

productsRouter.delete("/deleteProduct/:id", async (req,res) => {
    console.log("delete,",req.params.id);

    const delProduct = await Product.findByIdAndRemove(req.params.id);
    console.log("delProduct,", delProduct);

    if(delProduct){
        return res.status(200).json({msg: "The product has been deleted!"})
    }

    return res.status(500).json({error: "The product cannot be deleted!"});
})

productsRouter.put("/edirProduct/:id", async (req, res) => {
    const productID = req.body.productID;
    const productName = req.body.productName;
    const productPrice = req.body.productPrice;
    const productQuantity = req.body.productQuantity;
    const productImge = req.body.productImge;
    const productHasTaxe = req.body.productHasTaxe;
    const description = req.body.description;
    const categories = req.body.categories;
    const brand = req.body.brand;

    const editProduct = await Product.findByIdAndUpdate(req.params.id, {
        productID,
        productName,
        productPrice,
        productQuantity,
        productImge,
        productHasTaxe,
        description,
        categories,
        brand
    });

    if(editProduct){
        return res.status(200).json({editProduct});
    }

    return res.status(500).json({error: "The product cannot be editted!"});
})

module.exports = productsRouter;




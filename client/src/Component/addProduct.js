import axios from 'axios';
import React, { useState } from 'react';
import { Card, CardDeck, Carousel, Container, Image, Button, CardColumns, Col, Row, Modal, Form, Alert } from 'react-bootstrap';

const AddProduct = () => {
    const [productID, setProductID] = useState('');
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState(0);
    const [productQuantity, setProductQuantity] = useState(0);
    const [productImage, setProdcutImage] = useState('');
    const [productHasTaxe, setProductHasTaxe] = useState(false);
    const [description, setDescription] = useState('');
    const [categories, setCategories] = useState('');
    const [brand, setBrand] = useState('');
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const endpoint = 'http://localhost:5000/product';

    const submitAdd = async () => {
        try{
            const body = {
                productID: productID,
                productName: productName,
                productPrice: productPrice,
                productQuantity: productQuantity,
                productImge: productImage,
                productHasTaxe: productHasTaxe,
                description: description,
                categories: categories,
                brand: brand
            }

            const newProduct = await axios.post(`${endpoint}/addNewProduct`,body);

            console.log("addProduct,", newProduct);

            if(newProduct.status === 200){
                <Alert variant='danger'>
                    New product added Successfully!
                </Alert>
            }


        }catch(err){
            <Alert variant='danger'>
                Something Wrong
            </Alert>
        }

    }

    return (
        <Container fluid className='pt-2'>
            <Button variant="danger ml-3" size="lg" onClick={handleShow}>Add New Product</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className="p-3" onSubmit={submitAdd}>
                        <Form.Group>
                            <Form.Label>ProductID</Form.Label>
                            <Form.Control
                                className="input"
                                type="text"
                                name="productID"
                                onChange={e => setProductID(e.target.value)}
                                placeholder="Enter ProductID"
                            />
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Product Name</Form.Label>
                            <Form.Control
                                className="input"
                                name="productName"
                                type="text"
                                placeholder="Enter Product Name"
                                onChange={e => setProductName(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Product Price</Form.Label>
                            <Form.Control
                                className="input"
                                name="ProductPrice"
                                type="number"
                                placeholder="Enter Product Price"
                                onChange={e => setProductPrice(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Product Quentity</Form.Label>
                            <Form.Control
                                className="input"
                                name="ProductQuentity"
                                type="number"
                                placeholder="Enter Product Quentity"
                                onChange={e => setProductQuantity(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Product Image</Form.Label>
                            <Form.Control
                                className="input"
                                name="ProductImage"
                                type="text"
                                placeholder="Enter Product Image"
                                onChange={e => setProdcutImage(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                className="input"
                                name="Description"
                                type="text"
                                placeholder="Enter Description"
                                onChange={e => setDescription(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Category</Form.Label>
                            <Form.Control
                                className="input"
                                name="Category"
                                type="text"
                                placeholder="Enter Category"
                                onChange={e => setCategories(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Brand</Form.Label>
                            <Form.Control
                                className="input"
                                name="Brand"
                                type="text"
                                placeholder="Enter Brand"
                                onChange={e => setBrand(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>product Has Taxe</Form.Label>
                            <Form.Control as="select" onChange={e => setProductHasTaxe(e.target.value)}>
                                <option>false</option>
                                <option>true</option>
                            </Form.Control>
                        </Form.Group>
                        <Button className="mr-3" variant="warning" type="submit">
                            Submit
                        </Button>
                        <Button variant="secondary" onClick={handleClose}>Close</Button>
                    </Form>
                </Modal.Body>
            </Modal>


        </Container>
    );
}

export default AddProduct;
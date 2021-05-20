import axios from 'axios';
import React, { useState } from 'react';
import { Card, CardDeck, Carousel, Container, Image, Button, CardColumns, Col, Row, Modal, Form, Alert } from 'react-bootstrap';

const EditProduct = (props) => {
    const [productID, setProductID] = useState(props.item.productID);
    const [productName, setProductName] = useState(props.item.productName);
    const [productPrice, setProductPrice] = useState(props.item.productPrice);
    const [productQuantity, setProductQuantity] = useState(props.item.productQuantity);
    const [productImage, setProdcutImage] = useState(props.item.productImge);
    const [productHasTaxe, setProductHasTaxe] = useState(props.item.productHasTaxe);
    const [description, setDescription] = useState(props.item.description);
    const [categories, setCategories] = useState(props.item.categories);
    const [brand, setBrand] = useState(props.item.brand);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const endpoint = 'http://localhost:5000/product';

    const submitEdit= async () => {
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

            const editProduct = await axios.put(`${endpoint}/edirProduct/${props.item._id}`,body);

            console.log("addProduct,", editProduct);

            if(editProduct.status === 200){
                <Alert variant='wanring'>
                    New product edited Successfully!
                </Alert>
            }


        }catch(err){
            <Alert variant='danger'>
                Something Wrong
            </Alert>
        }

    }

    return (
        <Container fluid className='pt-1'>
            <Button className="mb-2" variant="warning" onClick={handleShow}>Edit</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className="p-3" onSubmit={submitEdit}>
                        <Form.Group>
                            <Form.Label>ProductID</Form.Label>
                            <Form.Control
                                className="input"
                                type="text"
                                name="productID"
                                value={productID}
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
                                value={productName}
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
                                value={productPrice}
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
                                value={productQuantity}
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
                                value={productImage}
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
                                value={description}
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
                                value={categories}
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
                                value={brand}
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
                            Submit Edit
                        </Button>
                        <Button variant="secondary" onClick={handleClose}>Close</Button>
                    </Form>
                </Modal.Body>
            </Modal>


        </Container>
    );
}

export default EditProduct;
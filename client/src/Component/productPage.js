import React, {useEffect, useState} from "react";
import {Button, Carousel, Col, Container, ListGroup, Row} from 'react-bootstrap';
import axios from 'axios';
import store from '../redux/store';
import {addItemToCart} from "../redux/action/action";
import { set } from "mongoose";

const endpoint = 'http://localhost:5000/product';

const ProductPage =(props) => {
    const [productName, setProductName] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState("");
    const [brand, setBrand] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [product, setProduct] = useState();

    const idParams = props.match.params.id;
    

    console.log(idParams)

    useEffect(() => {
          axios.get(`${endpoint}/id/${idParams}`)
               .then((res) => {
                    setProductName(res.data.productName);
                    setCategory(res.data.categories);
                    setImage(res.data.productImge);
                    setBrand(res.data.brand);
                    setPrice(res.data.productPrice);
                    setDescription(res.data.description);
                    setProduct(res.data);
               })
               .catch((err) => console.log("Error for getting a single product"))
    }, [])

    return(
        <Container className='p-5'>

            <h2 className='pt-5'>Product</h2>
          <Row>
             <Col md={6} className='p-3'>


                 <Carousel >
                     <Carousel.Item>
                         <img
                             className="d-block w-100"
                             src={image}
                             alt="First slide"
                         />

                     </Carousel.Item>
                     <Carousel.Item>
                         <img
                             className="d-block w-100"
                             src={image}
                             alt="Second slide"
                         />

                     </Carousel.Item>
                 </Carousel>
             </Col>
              <Col md={6} className='p-3'>
                  <ListGroup.Item>
                  <h5><span style={{color:'#FFA500',fontWeight:'bold'}}>Name:</span> {productName}</h5>
                  </ListGroup.Item>
                  <ListGroup.Item>
                      <h5><span style={{color:'#FFA500',fontWeight:'bold'}}>Category:</span> {category}</h5>
                  </ListGroup.Item>
                  <ListGroup.Item>
                      <h5><span style={{color:'#FFA500',fontWeight:'bold'}}>Brand:</span> {brand}</h5>
                  </ListGroup.Item>
                  <ListGroup.Item>
                      <h5><span style={{color:'#FFA500',fontWeight:'bold'}}>Price:</span> ${price}</h5>
                  </ListGroup.Item>
                  <ListGroup.Item>
                      <h5><span style={{color:'#FFA500',fontWeight:'bold'}}>Description:</span> {description}</h5>
                  </ListGroup.Item>
                  <ListGroup.Item   >
                    <Button type='button' variant='warning' onClick={()=>store.dispatch(addItemToCart(product))} block >
                        Add to Cart
                    </Button>
                  </ListGroup.Item>

              </Col>

          </Row>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </Container>

    );

};
export default ProductPage;

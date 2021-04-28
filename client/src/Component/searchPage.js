import React, {useState} from 'react';
import  {  ListGroup, CardDeck, Carousel, Container, Image, Button, CardColumns, Col, Row } from 'react-bootstrap';
import store from '../redux/store';
import {addItemToCart} from "../redux/action/action";

function SearchPage(props){
    return (
        <Container className='p-5'  >
            <h1 className='p-5 '>Search Product Page</h1>
            {props.filterSearch.length == 0 ? ((<h2>Do not have such products...</h2>)) : (props.filterSearch.map((item) => (

                <React.Fragment key={item._id}>
                <Row>
                    <Col md={6} className='p-3'>
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src= {item.productImge}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={item.productImge}
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col md={6} className='p-3'>
                        <ListGroup.Item>
                            <h5> {item.productName}</h5>
                        </ListGroup.Item>
                        <ListGroup.Item>

                            <h5>Brand: {item.brand}</h5>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h5>Price: {item.productPrice}</h5>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h5>Description: {item.description}</h5>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button  variant='warning' onClick={()=>store.dispatch(addItemToCart(item))}  block>
                                Add to Cart
                            </Button>
                        </ListGroup.Item>

                    </Col>

                </Row>
                    </React.Fragment>)

            ))}
        </Container>
    );
}

export default SearchPage;
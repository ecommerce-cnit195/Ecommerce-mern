import React from 'react';
import {connect,useSelector} from "react-redux";
import store from '../redux/store';
import {removeItemFromCart} from "../redux/action/action";
import {Button, Carousel, Col, Container, ListGroup, Row} from 'react-bootstrap';

const Cart = (props) => {
    const itemsInCart = useSelector(state => state.shoppingCartReducer);
    console.log("cart,", itemsInCart);
    
    // const sum = itemsInCart.reduce(function(result, item){
    //     return result + item.productPrice
    // }, 0);
    
    return(
        <Container  className="justify-content-center p-5" >
            <h1 className='p-5 '>Cart</h1>
            <p className='pl-5 '>You have {itemsInCart.length} items in your cart</p>

                   {itemsInCart.map((item) => (

                           <React.Fragment key={item._id}>

                                   <ListGroup.Item>
                               <Row>
                               <Col md={6} className='p-3'>
                                   <p>{item.productName}</p>
                               </Col>
                                   <Col md={3} className='p-3'>
                                   <p>${(item.productPrice).toFixed(2)}</p>
                               </Col>
                               <Col md={3} className='p-3'>
                               <Button variant="warning"
                                       onClick={() => store.dispatch(removeItemFromCart(item))}
                               ><i className='fas fa-trash fa'></i></Button>
                               </Col>
                               </Row>
                                   </ListGroup.Item>
                           </React.Fragment>

                       ))}
            <ListGroup.Item>
                $ {(itemsInCart.reduce((acc, current) => (acc += current.productPrice), 0)
            ).toFixed(2)}
            </ListGroup.Item>

        </Container>
    )
}

export default Cart;

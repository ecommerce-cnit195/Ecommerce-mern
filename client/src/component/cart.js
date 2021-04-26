import React from 'react';
import {Button, Col, Container, ListGroup, Row} from "react-bootstrap";
import {useSelector} from "react-redux";
import {store,remove} from "../store";
import {ProductItem} from "../global";
import {Product} from "./product";



const Cart = (props) => {
    const products = useSelector((state: ProductItem[]) => state)

    return(

        <Container  className="justify-content-center p-5" >

            <h1 className='p-5 '>Cart</h1>
            <p className='pl-5 '>You have {products.filter(product => product.added).length} items in your cart</p>

                   {products
                       .filter(product => product.added)
                       .map((product: ProductItem) => (

                           <React.Fragment key={product.id}>

                                   <ListGroup.Item>
                               <Row>
                               <Col md={6} className='p-3'>
                                   <p>{product.title}</p>
                               </Col>
                                   <Col md={3} className='p-3'>
                                   <p>${(product.price ).toFixed(2)}</p>
                               </Col>
                               <Col md={3} className='p-3'>
                               <Button variant="warning"
                                       onClick={() => store.dispatch(remove({ id: product.id }))}
                               ><i className='fas fa-trash fa'></i></Button>
                               </Col>
                               </Row>
                                   </ListGroup.Item>
                           </React.Fragment>

                       ))}
            <ListGroup.Item>
                $ {(
                products
                    .filter(product => product.added)
                    .reduce((acc, current) => (acc += current.price), 0)
            ).toFixed(2)}
            </ListGroup.Item>

        </Container>
    )
}


export {Cart};

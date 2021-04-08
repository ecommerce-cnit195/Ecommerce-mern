import React from "react";
import {Button, Carousel, Col, Container, ListGroup, Row} from 'react-bootstrap';

const ProductPage =(props) => {
    // const {
    //     name,
    //     price,
    //     images,
    //     description,
    //     category,
    //     brand,
    //     id,
    // } = props.product

    return(
        <Container className='p-5'>

            <h2 className='pt-5'>Product</h2>
          <Row>
             <Col md={6} className='p-3'>


                 <Carousel >
                     <Carousel.Item>
                         <img
                             className="d-block w-100"
                             src="../images/camera.jpg"
                             alt="First slide"
                         />

                     </Carousel.Item>
                     <Carousel.Item>
                         <img
                             className="d-block w-100"
                             src="../images/mouse.jpg"
                             alt="Second slide"
                         />

                     </Carousel.Item>
                 </Carousel>
             </Col>
              <Col md={6} className='p-3'>
                  <ListGroup.Item>
                  <h5>Name</h5>
                  </ListGroup.Item>
                  <ListGroup.Item>
                      <h5>Category</h5>
                  </ListGroup.Item>
                  <ListGroup.Item>
                      <h5>Brand</h5>
                  </ListGroup.Item>
                  <ListGroup.Item>
                      <h5>Price</h5>
                  </ListGroup.Item>
                  <ListGroup.Item>
                      <h5>Description</h5>
                  </ListGroup.Item>
                  <ListGroup.Item   >
                    <Button type='button' variant='warning' block >
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

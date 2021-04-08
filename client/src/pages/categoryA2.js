import React  from 'react';

import  { Card, Col, Container, Image, Row, Button } from 'react-bootstrap';
import BrandBox from '../Component/brandBox';



const CategoryA2 = () => {


    return (
        <Container fluid className='p-5'>
            <h2 className='pt-5'>Shop by Laptops </h2>
            <Row>
                <Col sm={3} className='pt-4 pl-5'>
                    <BrandBox  />
                </Col>
                <Col sm={9} className='pt-3 pl-5 '>
                    <Row >
                        <Card style={{ width: '18rem' }} className='ml-3 mt-2 p-2' border='warning'>
                            <Card.Img variant="top" src="../images/camera.jpg" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="warning">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }} className='ml-3 mt-2 p-2' border='warning'>
                            <Card.Img variant="top" src="../images/camera.jpg" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="warning">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }} className='ml-3 mt-2 p-2' border='warning'>
                            <Card.Img variant="top" src="../images/camera.jpg" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="warning">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }} className='ml-3 mt-2 p-2' border='warning'>
                            <Card.Img variant="top" src="../images/camera.jpg" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="warning">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }} className='ml-3 mt-2 p-2' border='warning'>
                            <Card.Img variant="top" src="../images/camera.jpg" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="warning">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};
export default CategoryA2;

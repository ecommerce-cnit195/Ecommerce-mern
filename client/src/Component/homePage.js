import React  from 'react';

import  {  Card, CardDeck, Carousel, Container, Image  } from 'react-bootstrap';


const HomePage = () => {


    return (
        <Container fluid>

            <Carousel >
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="../images/Amaz1-1.jpg"
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="../images/Amaz3-1.jpg"
                        alt="Second slide"
                    />

                </Carousel.Item>
            </Carousel>
            <h2 className='m-3'>Shop by category</h2>
            <CardDeck className='m-1'>
                <Card className='border-warning'>
                    <Card.Body >
                        <Card.Title>Electronics</Card.Title>
                        <Card.Link href="/categoryA">
                            <Card.Img variant="top" src="../images/Am3.jpg" />
                        </Card.Link>
                        <Card.Link href="#">See More</Card.Link>


                    </Card.Body >
                </Card>
                <Card className=' border-warning'>
                    <Card.Body>
                        <Card.Title>Mobile Phones</Card.Title>
                        <Card.Link href="/categoryA1">
                            <Card.Img variant="top" src="../images/Am6.jpg" />
                        </Card.Link>
                        <Card.Link href="#">See More</Card.Link>


                    </Card.Body>
                </Card>
                <Card className=' border-warning'>
                    <Card.Body>
                        <Card.Title>Laptops</Card.Title>
                        <Card.Link href="/categoryA2">
                            <Card.Img variant="top" src="../images/Am2.jpg" />
                        </Card.Link>
                        <Card.Link href="#">See More</Card.Link>


                    </Card.Body>
                </Card>
                <Card  className='border-warning'>
                    <Card.Body>
                        <Card.Title>Tablets</Card.Title>
                        <Card.Link href="/categoryA3">
                            <Card.Img variant="top" src="../images/tablet.jpg" />
                        </Card.Link>
                        <Card.Link href="#">See More</Card.Link>


                    </Card.Body>
                </Card>
            </CardDeck>
            <Card.Link href="#">
                <Image className='m-2' src="../images/Amaz2.jpg" fluid />
            </Card.Link>



            <h2 className='m-3'>Latest Products</h2>
            <CardDeck className='m-1'>
                <Card border='warning' >
                    <Card.Body>
                        <Card.Title>Camera</Card.Title>
                        <Card.Link href="#">
                            <Card.Img variant="top" src="../images/camera.jpg" />
                        </Card.Link>
                        <Card.Text>
                            CANNON EOS 80D DSLR CAMERA
                        </Card.Text>
                        <Card.Text as='h3'>$ 999</Card.Text>

                        <Card.Link href="#">See More</Card.Link>


                    </Card.Body>
                </Card>
                <Card border='warning' >
                    <Card.Body>
                        <Card.Title>Mouse</Card.Title>
                        <Card.Link href="#">
                            <Card.Img variant="top" src="../images/mouse.jpg" />
                        </Card.Link>
                        <Card.Text>
                            LOGITECH G-SERIES GAMING MOUSE
                        </Card.Text>
                        <Card.Text as='h3'>$ 999</Card.Text>
                        <Card.Link href="#">See More</Card.Link>


                    </Card.Body>
                </Card>
                <Card border='warning' >
                    <Card.Body>
                        <Card.Title>Phone</Card.Title>
                        <Card.Link href="#">
                            <Card.Img variant="top" src="../images/phone.jpg" />
                        </Card.Link>
                        <Card.Text>
                            IPHONE 11 PRO 256GB MEMORY
                        </Card.Text>
                        <Card.Text as='h3'>$ 999</Card.Text>
                        <Card.Link href="#">See More</Card.Link>


                    </Card.Body>
                </Card>
                <Card border='warning' >
                    <Card.Body>
                        <Card.Title>Playstation</Card.Title>
                        <Card.Link href="#">
                            <Card.Img variant="top" src="../images/playstation.jpg" />
                        </Card.Link>
                        <Card.Text>
                            SONY PLAYSTATION 4 PRO WHITE VERSION
                        </Card.Text>
                        <Card.Text as='h3'>$ 999</Card.Text>
                        <Card.Link href="#">See More</Card.Link>


                    </Card.Body>
                </Card>
            </CardDeck>
        </Container>
    );
};

export default HomePage;

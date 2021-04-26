import React, {useState, useEffect}  from 'react';
import axios from 'axios';
import  { Card, Col, Container, Image, Row, Button } from 'react-bootstrap';
import BrandBox from '../Component/brandBox';

const endpoint = 'http://localhost:5000/product';

const Category = (props) => {

    const [categoryProducts, setcategoryProducts] = useState([]);
    const categoryParams = props.match.params.category;
    console.log(props.match.params.category);

    useEffect(()=> {
        axios.get(`${endpoint}/category/${categoryParams}`)
             .then((res)=> {
                console.log("res.data cate,", res.data);
                setcategoryProducts(res.data);
             })
             .catch((err) => {
                console.log('Error for getting products depends on Category!');
             })
    }
    ,[]);
    
    console.log("categoryProducts,",categoryProducts);

    return (
        <Container fluid className='p-5'>
            <h2 className='pt-5'>Shop by {categoryParams} </h2>
            <Row>
               <Col sm={3} className='pt-4 pl-5'>
                    <BrandBox categoryProducts={categoryProducts} />
                </Col>
                <Col sm={9} className='pt-3 pl-5 '>
                    <Row >
                    {
                        categoryProducts.length === 0 ? ((<h1>No products can found</h1>)) :(
                        categoryProducts.map((item) => (
                            <Card style={{ width: '18rem' }} className='ml-3 mt-2 p-2' border='warning' key={item._id}>
                                <Card.Img variant="top" src={item.productImge} style={{width: '100%', height: '220px', objectFit: "contain"}}/>
                                <Card.Body>
                                    <Card.Title>{item.productName}</Card.Title>
                                    <Card.Text>{item.brand}</Card.Text>
                                    <Card.Text>Price: ${item.productPrice}</Card.Text>
                                    <Card.Text>Description: {item.description}</Card.Text>
                                    <Button variant="warning">Add to Cart</Button>
                                </Card.Body>
                            </Card>
                        ))
                        )
                    }
                        {/* <Card style={{ width: '18rem' }} className='ml-3 mt-2 p-2' border='warning'>
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
                        </Card> */}
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};
export default Category;

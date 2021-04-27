import React, {useState} from 'react';
import  {  Card, CardDeck, Carousel, Container, Image, Button, CardColumns, Col, Row } from 'react-bootstrap';

function SearchPage(props){
    return (
        <Container fluid className='pt-5 '>
           { props.filterSearch.length == 0 ? ((<h1>Do not have such products...</h1>)) : (
                <CardColumns>
                {props.filterSearch.map((item)=>(
                <Card border='warning' className='ml-2 mt-2 p-2'>
                <Card.Link href={`/productPage/${item._id}`}>
                    <Card.Img variant="top" src={item.productImge} style={{width: '100%', height: '220px', objectFit: "contain"}}/>
                </Card.Link>
                <Card.Body>
                <Card.Title>{item.productName}</Card.Title>
                    <Card.Text>{item.brand}</Card.Text>
                    <Card.Text>Price: ${item.productPrice}</Card.Text>
                    <Card.Text>Description: {item.description}
                    </Card.Text>
                   <Button variant="warning">Add to cart</Button>
                </Card.Body>
               </Card>))}
               </CardColumns>)
               }
      
      </Container>
    );
}

export default SearchPage;
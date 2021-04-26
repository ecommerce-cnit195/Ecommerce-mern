import React, {useState, useEffect}  from 'react';
import axios from 'axios';
import {connect,useSelector} from "react-redux";

import  {  Card, CardDeck, Carousel, Container, Image, Button, CardColumns  } from 'react-bootstrap';
import {addItemToCart} from "../redux/action/action";

const endpoint = 'http://localhost:5000/product';

const HomePage = (props) => {
    const [products, setProducts] = useState([]);
    const [ifLoading, setIfLoading] = useState(true);
    const [categories, setCategories] = useState([]);
    
    useEffect(() => {
        axios.get(`${endpoint}/products/all`)
             .then((res) => {
                 setProducts(res.data);
                 setIfLoading(false);
             })
        
       console.log("prducts effect,", products);
       
       const temp = [];
       
       for(let i = 0; i < products.length; i++){
           if(temp.includes(products[i].categories)){
               continue;
           }else{
               temp.push(products[i].categories);
           }
       }
       
       setCategories(temp);

    }, [])

    console.log("prducts,", products);
    console.log("categies,", categories);

    return (
        <Container fluid className='pt-5 '>
             <Carousel className='pt-lg-4'>
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
            {ifLoading == true ? ((<h1>Loading....</h1>)) : (
                <>
                <h2 className='m-3'>Categories</h2>
                <CardDeck className='m-1'>
                 {
                   categories.map((item,i)=> (
                    <Card className='border-warning'key={i}>
                        <Card.Title style={{margin:'10px'}}>{item}</Card.Title>
                        <Card.Link href="#" style={{margin: '10px'}}>See More</Card.Link>
                    </Card>
                   ))
                 }
                </CardDeck>
                <h2 className='m-3'>Latest Products</h2>
                <CardColumns>
                {products.map((item)=>(
                      <Card border='warning' className='ml-2 mt-2 p-2'>
                      <Card.Link href="/productPage">
                              <Card.Img variant="top" src={item.productImge}/>
                        </Card.Link>
                         <Card.Body>
                          <Card.Title>{item.productName}</Card.Title>
                              <Card.Text>{item.brand}</Card.Text>
                              <Card.Text>Price: ${item.productPrice}</Card.Text>
                              <Card.Text>Description: {item.description}
                              </Card.Text>
                             <Button variant="warning"
                                onClick={()=>props.addToCart(item)}>Add to cart
                             </Button>
                          </Card.Body>
                  </Card>
                
                  ))}
                </CardColumns>
                </>
            )}
            
        </Container>
    );
        
        
}

const mapDispatchtoProps = (dispatch) => {
    return {
        addToCart: (item) => {
            dispatch(addItemToCart({item}));
        }
    }
}

const mapStateToProps = (state) => {
    console.log("state in homepage,", state);
    return {itemsInCart: state.shoppingCartReducer};
}

export default connect(mapStateToProps, mapDispatchtoProps)(HomePage);
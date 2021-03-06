import React, {useState, useEffect}  from 'react';
import axios from 'axios';
import {connect,useSelector} from "react-redux";
import store from '../redux/store';
import  {  Card, CardDeck, Carousel, Container, Image, Button, CardColumns, Col, Row } from 'react-bootstrap';
import {addItemToCart} from "../redux/action/action";
import PageNums from "./pageNums";

const endpoint = 'http://localhost:5000/product';

const HomePage = (props) => {
    const [products, setProducts] = useState([]);
    const [ifLoading, setIfLoading] = useState(true);
    const [categories, setCategories] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const productPerPage = 4; 

    const lastIndex = currentPage * productPerPage;
    const firstIndex = lastIndex - productPerPage; 

    const showingProducts = products.slice(firstIndex, lastIndex);
    
    console.log("showingProducts,", showingProducts);
    
    useEffect(() => {
        const temp = [];
        axios.get(`${endpoint}/products/all`)
             .then((res) => {
                 setProducts(res.data);
                 setIfLoading(false);
                 //props.setSearchProducts(res.data);
                 localStorage.setItem("Products" , JSON.stringify(res.data));
                 for(let i = 0; i < res.data.length; i++){
                    if(temp.includes(res.data[i].categories)){
                        continue;
                    }else{
                        temp.push(res.data[i].categories);
                    }
                }
                setCategories(temp);
                localStorage.setItem("categoriesForHeader" , JSON.stringify(temp));
             })
             .catch((error) => {
                console.log('Error for getting products!');
            })             
       
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
                <h2 className='m-3'>Shop By Categories</h2>
                <CardDeck className='m-1'>
                 {
                   categories == null ? null : categories.map((item,i)=> (
                    <Card className='border-warning'key={i}>
                        <Card.Title style={{margin:'10px'}}>{item}</Card.Title>
                        <Card.Link href={`/category/${item}`} style={{margin: '10px'}}>See More</Card.Link>
                    </Card>
                   ))
                 }
                </CardDeck>
                <h2 className='m-3'>Latest Products</h2>
                <CardDeck className='m-1'>
                {products == null ? null : showingProducts.map((item)=>(
                      <Card border='warning' className='ml-2 mt-2 p-2' key = {item._id}>
                      <Card.Link href={`/productPage/${item._id}`}>
                              <Card.Img variant="top" src={item.productImge} style={{width: '100%', height: '220px', objectFit: "contain"}}/>
                        </Card.Link>
                         <Card.Body>
                          <Card.Title>{item.productName}</Card.Title>
                              <Card.Text>{item.brand}</Card.Text>
                              <Card.Text>Price: ${item.productPrice}</Card.Text>
                              <Card.Text>Description: {item.description}
                              </Card.Text>
                             <Button variant="warning"
                                onClick={()=>store.dispatch(addItemToCart(item))}>Add to cart
                             </Button>
                          </Card.Body>
                  </Card>
                
                  ))}
                </CardDeck>
                </>
            )}
            <PageNums numProducts={products.length} productPerPage={productPerPage} setCurrentPage={setCurrentPage} />
        </Container>
    );
        
        
}


export default HomePage;

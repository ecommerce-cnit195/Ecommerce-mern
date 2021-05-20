import React, {useState, useEffect} from 'react';
import  {  Card, CardDeck, Carousel, Container, Image, Button, CardColumns, Col, Row } from 'react-bootstrap';
import PageNums from './pageNums';
import AddProduct from './addProduct';
import EditProduct from './editProduct';
import axios from 'axios';

const endpoint = 'http://localhost:5000/product';

const Admin = (props) => {
    const [products, setProducts] = useState([]);
    const [prductFilter, setProdectFilter] = useState([]);
    const [ifLoading, setIfLoading] = useState(true);
    const [categories, setCategories] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const productPerPage = 4; 

    const lastIndex = currentPage * productPerPage;
    const firstIndex = lastIndex - productPerPage; 

    const showingProducts = products.slice(firstIndex, lastIndex);

    const deleteProduct = (id) =>{
        axios.delete(`${endpoint}//deleteProduct/${id}`)
            .then((res) => {
                const newProducts = prductFilter.filter((item) => item._id !== id);
                setProducts(newProducts);
            })
            .catch((error) => console.log(error));

    }
    
    useEffect(() => {
        const temp = [];
        axios.get(`${endpoint}/products/all`)
             .then((res) => {
                 setProducts(res.data);
                 setIfLoading(false);
                 setProdectFilter(res.data);
             })
             .catch((error) => {
                console.log('Error for getting products!');
            })             
       
}, [])

    
    return(
        <Container fluid className='pt-5 '>
            <h1 className='m-3 mt-5'>Admin</h1>
                <AddProduct />
            {ifLoading == true ? ((<h1>Loading....</h1>)) : (
                <>
                <h2 className='m-3'>Products</h2>
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
                              <EditProduct item={item} />
                             <Button className='ml-3' variant="danger" onClick={() => deleteProduct(item._id)}>Delete
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

export default Admin;
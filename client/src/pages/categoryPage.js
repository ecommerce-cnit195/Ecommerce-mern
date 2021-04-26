import React  from 'react';

import  {Col, Container, Row } from 'react-bootstrap';
import BrandBox from '../component/brandBox';

import {Product} from "../component/product";
import {Cart} from "../component/cart"
import {ProductPage} from "./productPage";


const CategoryPage = () => {

    return (
        <Container fluid className='p-5'>

            <h2 className='pt-5'>Shop by Electronics </h2>

            <Row>
                <Col sm={3} className='pt-4 pl-5'>
                    <BrandBox  />
                </Col>
                <Col sm={9} className='pt-3 pl-5 '>
                    <Product />

                </Col>

            </Row>
            <Cart />
            <ProductPage />

        </Container>
    );
};
export default CategoryPage;

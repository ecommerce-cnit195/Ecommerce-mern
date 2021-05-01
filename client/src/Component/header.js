import React from 'react';

import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import SearchBox from './searchBox';
import {useSelector} from "react-redux";


const Header = (props) => {
    
    const itemInCart = useSelector(state => state.shoppingCartReducer);
    
    console.log("props in header,", props.searchProducts ,props.categoriesForHeader);
    return (
        <header>
            <Navbar   bg='dark' variant='dark' expand='lg' fixed='top' >

                <Navbar.Brand href='/' > Mern Ecommerce</Navbar.Brand>


                <Navbar.Toggle aria-controls='basic-navbar-nav ' />
                <Navbar.Collapse id='basic-navbar-nav' >
                    <Nav className="mr-auto">
                        <NavDropdown title="Products" id="basic-nav-dropdown" className='p-2'>
                            {
                                props.categoriesForHeader.map((item, i) => (
                                    <NavDropdown.Item href={`/category/${item}`} key={i}>{item}</NavDropdown.Item>
                                ))
                            }

                                {/* <NavDropdown.Item href='/categoryA'>Electronics</NavDropdown.Item> */}

                            {/* <NavDropdown.Divider/>

                                <NavDropdown.Item href='/categoryA1'>Mobile Phones</NavDropdown.Item>


                                <NavDropdown.Item href='/categoryA2' >Laptops</NavDropdown.Item>


                                <NavDropdown.Item href='/categoryA3'>Tablets</NavDropdown.Item>

                            <NavDropdown.Divider/> */}

                                <NavDropdown.Item href='/categoryB'>Separated link</NavDropdown.Item>

                        </NavDropdown>
                    </Nav>

                    < SearchBox setIfSearch={props.setSearch} searchProducts={props.searchProducts}/>

                    <Nav className='ml-auto'>
                        <Nav.Item>

                            <NavDropdown title="Account" id="basic-nav-dropdown" className='p-2'>

                                    <NavDropdown.Item href='/register'>
                                        Register
                                    </NavDropdown.Item>

                                <NavDropdown.Divider/>

                                    <NavDropdown.Item href='/signIn'>
                                        Sign In
                                    </NavDropdown.Item>

                            </NavDropdown>
                        </Nav.Item>


                        <Nav.Item className='p-2'>

                            <Nav.Link href='/cart'>

                                <i className='fas fa-shopping-cart'></i> Cart({itemInCart.length})

                            </Nav.Link>

                        </Nav.Item>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>


        </header>

    );
};

export default Header;

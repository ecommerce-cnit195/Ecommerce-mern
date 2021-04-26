import React from 'react';

import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import SearchBox from './searchBox';


const Header = () => {


    return (
        <header>
            <Navbar   bg='dark' variant='dark' expand='lg' fixed='top' >

                <Navbar.Brand href='/' > Mern Ecommerce</Navbar.Brand>


                <Navbar.Toggle aria-controls='basic-navbar-nav ' />
                <Navbar.Collapse id='basic-navbar-nav' >
                    <Nav className="mr-auto">
                        <NavDropdown title="Products" id="basic-nav-dropdown" className='p-2'>

                            <NavDropdown.Item href='/categoryPage'>Electronics</NavDropdown.Item>

                            <NavDropdown.Divider/>

                            <NavDropdown.Item href='/category1Page'>Mobile Phones</NavDropdown.Item>


                            <NavDropdown.Item href='/category2Page' >Laptops</NavDropdown.Item>


                            <NavDropdown.Item href='/category3Page'>Tablets</NavDropdown.Item>

                            <NavDropdown.Divider/>

                            <NavDropdown.Item href='/categoryB'>Separated link</NavDropdown.Item>

                        </NavDropdown>
                    </Nav>

                    < SearchBox/>

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

                                <i className='fas fa-shopping-cart'></i> Cart

                            </Nav.Link>

                        </Nav.Item>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>


        </header>

    );
};

export default Header;

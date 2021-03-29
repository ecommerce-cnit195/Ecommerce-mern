import React from 'react';

import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import SearchBox from './SearchBox';


const Header = () => {


    return (
        <header>
            <Navbar bg='dark' variant='dark' expand='lg' className='p-3'>

                <Navbar.Brand href='/'> Mern Ecommerce</Navbar.Brand>

                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className="mr-auto">
                        <NavDropdown title="Products" id="basic-nav-dropdown">
                            <Nav.Link to='/CategoryA'>
                                <NavDropdown.Item>Electronics</NavDropdown.Item>
                            </Nav.Link>
                            <NavDropdown.Divider/>
                            <Nav.Link to='/CategoryA1'>
                                <NavDropdown.Item>Mobile Phones</NavDropdown.Item>
                            </Nav.Link>
                            <Nav.Link to='/CategoryA2'>
                                <NavDropdown.Item>Laptops</NavDropdown.Item>
                            </Nav.Link>
                            <Nav.Link to='/CategoryA3'>
                                <NavDropdown.Item>Tablets</NavDropdown.Item>
                            </Nav.Link>
                            <NavDropdown.Divider/>
                            <Nav.Link to='/CategoryB'>
                                <NavDropdown.Item>Separated link</NavDropdown.Item>
                            </Nav.Link>
                        </NavDropdown>
                    </Nav>

                    < SearchBox/>

                    <Nav className='ml-auto'>
                        <Nav.Item>

                            <NavDropdown title="Account" id="basic-nav-dropdown">
                                <Nav.Link to='/Register'>
                                    <NavDropdown.Item>
                                        Register
                                    </NavDropdown.Item>
                                </Nav.Link>
                                <NavDropdown.Divider/>
                                <Nav.Link to='/SignIn'>
                                    <NavDropdown.Item>
                                        Sign In
                                    </NavDropdown.Item>
                                </Nav.Link>
                            </NavDropdown>
                        </Nav.Item>


                        <Nav.Item>

                            <Nav.Link to='/Cart'>

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

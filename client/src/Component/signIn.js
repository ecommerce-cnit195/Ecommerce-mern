import React from 'react';
import {Form, Button, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';



const SignIn = (props) => {
    return (
        <Container  className="justify-content-center p-3" >
            <h1 className='p-3'>Sign In</h1>
            <Form className="p-3">
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="warning" type="submit">
                    Submit
                </Button>
            </Form>
            <div className="p-3">
                <p>New Customer?</p>
                <Link to="/register">Register</Link>
            </div>
        </Container>
    )
}

export default SignIn;

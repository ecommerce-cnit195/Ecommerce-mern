import React from 'react';
import {Form, Button, Container} from 'react-bootstrap';




const Register = (props) => {
    return (
        <Container  className="justify-content-center p-5" >
            <h1 className='pt-5'>Register</h1>
            <Form className=" p-3">
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter an username" />
                </Form.Group>
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
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Confirm password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="warning" type="submit" >
                    Submit
                </Button>
            </Form>
            <br /><br /><br /><br /><br /><br /><br /><br />
        </Container>
    )
}

export default Register;

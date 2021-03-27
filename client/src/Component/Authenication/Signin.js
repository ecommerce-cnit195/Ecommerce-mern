import React from 'react';
import { Form, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './SignIn.css'

const SignIn = (props) => {
    return (
        <div>
            <h1>Sign In</h1>
            <Form className="SignInContainer">
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
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <div className="ToRegister">
                <p>New Customer?</p>
                <Link to="/Register">Register</Link>
            </div>
        </div>
    )
}

export default SignIn;
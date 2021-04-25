import React , {useEffect,useRef,useState }from 'react';
import {Form, Button, Container} from 'react-bootstrap';

import Message from "./Messages"
import AuthService from "../Service/AuthService"



const Register = (props) => {

    const [user, setUser] = useState({ username: "", password: "", email: "" });
    const [message, setMessage] = useState(null);
    let timerID = useRef(null);

    useEffect(()=>{
        return () =>{
            clearTimeout(timerID)
        };
    },[]);

    const onChange = (e) =>{
        setUser({...user, [e.target.name]: e.target.value})
    }

    const resetEntries = ()=>{
setUser({username:"", password:"", email:""})
    }

    const onSubmit =(e)=>{
        e.preventDefault()
        AuthService.register(user).then((data) =>{
            const {message} = data;
            setMessage(message)
            resetEntries()

            if(!message.msgError){
                timerID = setTimeout(()=>{
                    props.history.push("/signIn")
                },3000)
            }
        })
    }

    return (
        <Container  className="justify-content-center p-5" >
            <h1 className='pt-5'>Register</h1>

            {message ? <Message message={message} /> : null}
            <Form className=" p-3" onSubmit={onSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter an username" 
                        className="input"
                        name="username"
                        value={user.username}
                        onChange={onChange} />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        className="input" 
                        type="email" 
                        placeholder="Enter email" 
                        name="email"
                        value={user.email}
                        onChange={onChange}
                    />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        className="input" 
                        type="password" 
                        placeholder="Password"
                        name="password"
                        value={user.password}
                        onChange={onChange} />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Confirm password</Form.Label>
                    <Form.Control 
                        className="input" 
                        type="password" 
                        placeholder="Confirm password"
                        name="password2"
                        value={user.password2}
                        onChange={onChange} />
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

import React , {useContext , useState} from 'react';
import {Form, Button, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {AuthContext} from "../Context/AuthContext"
import AuthService from "../Service/AuthService"
import Message from "./Messages"


const SignIn = (props) => {

    const [user,setUser] = useState({username:"", password:""})
    const [message, setMessage] = useState (null)
    const authContext = useContext(AuthContext)

    const onChange = (e) =>{
        setUser({ ...user, [e.target.name]: e.target.value })
    } 
    const onSubmit =(e)=>{
        e.preventDefault()
        AuthService.login(user).then((data)=>{
            const {isAuhtentecated, user,message} = data
            console.log('login,', data);
            if(isAuhtentecated){
                authContext.setUser(user)
                authContext.isAuhtentecated(isAuhtentecated)
                props.history.push("/category")
            } else setMessage(message)
        })
    }


    return (
        <Container  className="justify-content-center p-5" >
            <h1 className='pt-5'>Sign In</h1>
            {message ? <Message message={message} /> : null}
            <Form className="p-3" onSubmit={onSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control 
                    className="input"
                    type="text" 
                    name="username"
                    onChange={onChange}
                    placeholder="Enter username" 
                    />
                    {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                    className="input"
                    name="password"
                    type="password" 
                    placeholder="Password" 
                    onChange={onChange}
                    />
                </Form.Group>
                <Button variant="warning" type="submit">
                    Submit
                </Button>
            </Form>
            <div className="p-3">
                <p>New Customer?</p>
                <Link to="/register">Register</Link>
            </div>


            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </Container>
    )
}

export default SignIn;

import React from 'react';
import {Form, Button, InputGroup} from 'react-bootstrap';

const SearchBox = () => {


    return (
        <Form onSubmit='' className='form-in'>
            <InputGroup>
                <Form.Control
                    type='text'


                    onChange=''
                    placeholder='Search Products'
                    aria-describedby="basic-addon"
                />
                <InputGroup.Append>
                    <Button type='submit' variant='warning' >
                        <i className="fas fa-search"></i> Search
                    </Button>
                </InputGroup.Append>
            </InputGroup>
        </Form>
    );
};

export default SearchBox;

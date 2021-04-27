import React, {useState} from 'react';
import {Form, Button, InputGroup} from 'react-bootstrap';
import { useHistory } from "react-router-dom"
import axios from 'axios';

const endpoint = 'http://localhost:5000/product';

const SearchBox = (props) => {

    const [searchKey, setSearchKey] = useState("");
    const history = useHistory();

    const onChange = (e) =>{
        setSearchKey(e.target.value);
    } 

    const submitSearch = () => {
        console.log("search, ", searchKey, props.searchProducts);
        console.log("filter,", props.searchProducts.filter((i) => i.productName.toLowerCase().includes(searchKey.toLowerCase())))

        localStorage.setItem("filterProducts" , JSON.stringify(props.searchProducts.filter((i) => i.productName.toLowerCase().includes(searchKey.toLowerCase()))));
        props.setIfSearch(true);
        history.push("/searchPage");
    }

    return (
        <Form onSubmit={submitSearch} className='form-in '>
            <InputGroup>
                <Form.Control
                    type='text'
                    onChange={onChange}
                    placeholder='Search Products'
                    aria-describedby="basic-addon"
                />

                 <InputGroup.Append>
                   <Button type='submit' variant='warning'>
                            <i className="fas fa-search"></i> Search
                        </Button>
                    </InputGroup.Append>
            </InputGroup>
        </Form>
    );
};

export default SearchBox;

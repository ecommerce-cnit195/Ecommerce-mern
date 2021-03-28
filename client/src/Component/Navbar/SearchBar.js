import React from 'react';
import { FormControl, Button, InputGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const SearchBar = (props) => {
    return(
        <InputGroup className="mb-3">
            <FormControl placeholder="Search" aria-describedby="basic-addon1" />
                <InputGroup.Prepend>
                    <Button type="button" class="btn btn-success"><i class="fa fa-search"></i>Search</Button>
                </InputGroup.Prepend>
        </InputGroup>
    )
}

export default SearchBar;
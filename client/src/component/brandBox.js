import React from "react";
import {Form, Col,Row, Card} from 'react-bootstrap';

const BrandBox =() => {

    return (

 <Card style={{ width: '18rem' }} className='p-4 ' border='warning'>
        <Form.Group as={Col} >



                <Form.Label as="legend" >
                    Brands
                </Form.Label>
                <Form.Check
                    type="radio"
                    label="Apple"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios1"
                />
                <Form.Check
                    type="radio"
                    label="Microsoft"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios2"
                />
                <Form.Check
                    type="radio"
                    label="Lenovo"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios3"
                />
                <Form.Check
                    type="radio"
                    label="Samsung"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios1"
                />
                <Form.Check
                    type="radio"
                    label="Nokia"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios2"
                />
                <Form.Check
                    type="radio"
                    label="Google"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios3"
                />
                <br />
            <Form.Label as="legend" >
                Price
            </Form.Label>
            <Form.Check
                type="radio"
                label="Under $200"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
            />
            <Form.Check
                type="radio"
                label="$200 to $400"
                name="formHorizontalRadios"
                id="formHorizontalRadios2"
            />
            <Form.Check
                type="radio"
                label="$400 to $600"
                name="formHorizontalRadios"
                id="formHorizontalRadios3"
            />
            <Form.Check
                type="radio"
                label="$600 to $800"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
            />
            <Form.Check
                type="radio"
                label="$800 to $1000"
                name="formHorizontalRadios"
                id="formHorizontalRadios2"
            />
            <Form.Check
                type="radio"
                label="$1000 & Above"
                name="formHorizontalRadios"
                id="formHorizontalRadios3"
            />


        </Form.Group>
 </Card>
    );
};
export default BrandBox

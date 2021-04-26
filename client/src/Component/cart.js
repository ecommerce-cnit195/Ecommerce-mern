import React from 'react';
import {connect,useSelector} from "react-redux";
import {Container} from "react-bootstrap";

const Cart = (props) => {
    const itemsInCart = props.itemsInCart;
    console.log("cart,", itemsInCart);
    return(
        <Container  className="justify-content-center p-5" >
            <h1 className='pt-5'>Cart</h1>



            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </Container>
    )
}

const mapStateToProps = (state) => {
    console.log("state in cart,", state);
    return {itemsInCart: state.shoppingCartReducer};
}

export default connect(mapStateToProps, null)(Cart);

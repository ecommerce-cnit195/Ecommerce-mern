import {ADD_ITEM_TO_CART, REMOVE_TIEM_FROM_CART, CLEAR_THE_CART} from '../actionConstant';

export const addItemToCart = (item) => {
    return {
            type: ADD_ITEM_TO_CART,
            payload: item
    }
}

export const removeItemFromCart = (item) => {
    return {
        type: REMOVE_TIEM_FROM_CART,
        payload: item
    }
}

export const clearCart = () => {
    return{
        type: CLEAR_THE_CART
    }
}
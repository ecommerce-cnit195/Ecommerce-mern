import {ADD_ITEM_TO_CART, REMOVE_TIEM_FROM_CART, CLEAR_THE_CART} from '../actionConstant';


const Reducer = (state=[], action) => {
    
    const {type, payload} = action;
    
    switch(type){
        case ADD_ITEM_TO_CART:
            console.log("state add to cart",state);
            return [...state, payload]
            
        
        case REMOVE_TIEM_FROM_CART:
            return state.filter(item => item !== payload)
        
        default:
            console.log("state", state);
            return state;
    }
    
    
}

export default Reducer;
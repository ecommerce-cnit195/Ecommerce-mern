import {createStore, applyMiddleware, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import shoppingCartReducer from '../redux/reducer/reducer';

const reducers = combineReducers({
    shoppingCartReducer: shoppingCartReducer
})

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
)

export default store; 
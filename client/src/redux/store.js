import {createStore, applyMiddleware, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import shoppingCartReducer from '../redux/reducer/reducer';

//persist redux state get idea and refer from https://www.youtube.com/watch?v=o_Ni4Cqh4XA
const saveToLocalStorage = (state) => {
    try{
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState)
    }catch(e){
        console.log(e);
    }
}

const loadFromLocalStorage = () => {
    try{
        const serializedState = localStorage.getItem('state');
        if(serializedState === null){
            return undefined
        }else{
            return JSON.parse(serializedState)
        }
    }catch(e){
        console.log(e);
        return undefined
    }
}

const reducers = combineReducers({
    shoppingCartReducer: shoppingCartReducer
})

const persistedState = loadFromLocalStorage();

const store = createStore(
    reducers,
    persistedState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
)

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store; 
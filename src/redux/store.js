import { createStore, combineReducers, applyMiddleware } from 'redux'
import {thunk} from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import { categoriesReducer } from './reducers/CategoryReducer';
import { productDetailsReducer, productReducer } from './reducers/ProductReducer';
import { cartReducer } from './reducers/CartReducer';

const reducer = combineReducers({
    cat : categoriesReducer,
    pro : productReducer,
    pDetail : productDetailsReducer,
    cart : cartReducer
})

let initializeState = {}

const Store = createStore(reducer, initializeState, composeWithDevTools(applyMiddleware(thunk)))

export default Store
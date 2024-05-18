import { createStore, combineReducers, applyMiddleware } from 'redux'
import {thunk} from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import { categoriesReducer } from './reducers/CategoryReducer';

const reducer = combineReducers({
    cat : categoriesReducer
})

let initializeState = {}

const Store = createStore(reducer, initializeState, composeWithDevTools(applyMiddleware(thunk)))

export default Store
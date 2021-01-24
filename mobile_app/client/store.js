import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import posts from './reducers/postsReducer'

const rootReducer = combineReducers({
    posts,
})

export default createStore(rootReducer, applyMiddleware(thunk, logger));

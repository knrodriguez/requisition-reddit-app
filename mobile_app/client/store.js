import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import posts from './reducers/postsReducer'
import user from './reducers/userReducer'

const rootReducer = combineReducers({
    posts,
    user
})

export default createStore(rootReducer, applyMiddleware(thunk, logger));

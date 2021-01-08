import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import posts from './reducers/postsReducer';
import logger from 'redux-logger';
import allRequisitions from './reducers/allRequisitionsReducer';
import requisition from './reducers/requisitionReducer';
import user from './reducers/userReducer';

const rootReducer = combineReducers({
    posts,
    allRequisitions,
    requisition,
    user
});

export default createStore(rootReducer, applyMiddleware(thunk, logger));
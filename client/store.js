import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import posts from './reducers/postsReducer';
import logger from 'redux-logger';
// import post from './postReducer';
// import requisitions from './requisitionsReducer';
// import requisition from './requisitionReducer';
//import { reducer as form } from 'redux-form';
import user from './reducers/userReducer';

const rootReducer = combineReducers({
    posts,
    // post,
    // requisitions,
    // requisition,
    //form,
    user
});

export default createStore(rootReducer, applyMiddleware(thunk, logger));
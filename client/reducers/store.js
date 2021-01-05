import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import posts from './postsReducer';
// import post from './postReducer';
// import requisitions from './requisitionsReducer';
// import requisition from './requisitionReducer';
//import { reducer as form } from 'redux-form';

const rootReducer = combineReducers({
    posts,
    // post,
    // requisitions,
    // requisition,
    //form
});

export default createStore(rootReducer, applyMiddleware(thunk));
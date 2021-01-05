import { createStore, combineReducers } from 'redux';
import posts from './postsReducer';
// import post from './postReducer';
// import requisitions from './requisitionsReducer';
// import requisition from './requisitionReducer';
//import { reducer as form } from 'redux-form';

const rootReducer = combinerReducers({
    posts,
    // post,
    // requisitions,
    // requisition,
    //form
});

const store = createStore(rootReducer);
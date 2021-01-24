import axios from 'axios';

const GET_MY_POSTS = 'GET_MY_POSTS';
const GET_REDDIT_POSTS = 'GET_REDDIT_POSTS';
const DELETED_POST = 'DELETED_POST';
const EMPTY_POSTS = 'EMPTY_POST';

const getPosts = (posts, from) => ({
    type: from === 'reddit' ? GET_REDDIT_POSTS : GET_MY_POSTS,
    posts
})

const deletedPost = (postId) => ({
    type: DELETED_POST,
    postId
})

export const emptyPosts = () => ({
    type: EMPTY_POSTS,
    posts: []
})

export const getPostsFromReddit = (reqId) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`/api/reddit/${reqId}`);
            if(Array.isArray(data)){
                dispatch(getPosts(data, 'reddit'));
            }
        } catch (error) {
            console.error('Error inside getPostsFromReddit thunk', error);
        }
    }
}

export const getPostsFromDb = (userId) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`/api/posts`);
            dispatch(getPosts(data, 'db'));
        } catch (error) {
            console.error('Error inside getPostsFromDb thunk', error);
        }
    }
}

export const deletePost = (postId) => {
    return async (dispatch) => {
        try {
            await axios.delete(`/api/posts/${postId}`);
            dispatch(deletedPost(postId));
        } catch (error) {
            console.error('Error inside deletePost thunk', error);
        }
    }
}

export default (state = [], action) => {
    switch(action.type){
        case GET_MY_POSTS:
            return [...action.posts, ...state];
        case GET_REDDIT_POSTS:
            return [...action.posts, ...state];
        case DELETED_POST:
            return state.filter(post => post.id !== action.postId);
        case EMPTY_POSTS:
            return action.posts
        default:
            return state;
    }
}
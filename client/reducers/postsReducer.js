import axios from 'axios';

const GET_MY_POSTS = 'GET_MY_POSTS';
const GET_REDDIT_POSTS = 'GET_REDDIT_POSTS';

export const getPosts = (posts, from) => ({
    type: from === 'reddit' ? GET_REDDIT_POSTS : GET_MY_POSTS,
    posts
})

// export const getMyPosts = (posts) => ({
//     type: GET_MY_POSTS,
//     posts
// })

// export const getRedditPosts = (posts) => ({
//     type: GET_REDDIT_POSTS,
//     posts
// })

export const getPostsFromReddit = (reqId) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`/reddit/${reqId}`);
            dispatch(getPosts(data, 'reddit'));
        } catch (error) {
            next(error);
        }
    }
}

export const getPostsFromDb = (reqId) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`/posts/${reqId}`);
            dispatch(getPosts(data, 'db'));
        } catch (error) {
            next(error);
        }
    }
}

export default (state = [], action) => {
    switch(action.type){
        case GET_MY_POSTS:
            return action.posts;
        case GET_REDDIT_POSTS:
            return action.posts;
        default:
            return state;
    }
}
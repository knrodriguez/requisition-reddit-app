import axios from 'axios';

const ADD_TO_POSTS = 'ADD_TO_POSTS';
const LOAD_POSTS = 'LOAD_POSTS'
const DELETED_POST = 'DELETED_POST'

const addToPosts = (posts) => ({
    type: ADD_TO_POSTS,
    posts
})

const deletedPost = (postId) => ({
    type: DELETED_POST,
    postId
})

const loadPosts = (posts) => ({
    type: LOAD_POSTS,
    posts
})

export const fetchPostsFromDb = (userId) => {
    return async dispatch => {
        try { 
            const {data} = await axios.get(`http://192.168.1.4:8080/api/posts/${userId}`)
            dispatch(loadPosts(data))
        } catch (error) {
            console.error(error)
        }
    }
}

export const deletePost = (postId) => {
    return async dispatch => {
        try {
            await axios.delete(`http://192.168.1.4:8080/api/posts/${postId}`)
            dispatch(deletedPost(postId))
        } catch (error) {
            console.error(error)
        }
    }
}

export default (state=[], action) => {
    switch(action.type){
        case ADD_TO_POSTS:
            return [...state, actions.posts]
        case LOAD_POSTS:
            return action.posts
        case DELETED_POST:
            return state.filter(post => post.id !== action.postId)
        default:
            return state;
    }
}
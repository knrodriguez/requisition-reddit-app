import axios from 'axios';

const GET_USER = 'GET_USER';

const getUser = (user) => ({
    type: GET_USER,
    user
})


export const login = (credentials) => {
    return async(dispatch) => {
        try {
            const { data } = await axios.put('/auth/login', credentials);
            dispatch(getUser(data));
        } catch (error) {
            console.error('An error has occured in the login thunk', error);
        }
    }
}

export const getMe = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get('/auth/me');
            dispatch(getUser(data));
        } catch (error) {
            console.error('An error has occured in the GET ME thunk', error);
        }
    }
}

export default (state = {}, action) => {
    switch(action.type){
        case GET_USER:
            return action.user;
        default:
            return state;
    }
}
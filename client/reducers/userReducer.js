import axios from 'axios';

const GET_USER = 'GET_USER';

const getUser = (user) => ({
    type: GET_USER,
    user
})

export default (state = {}, action) => {
    switch(action.type){
        case GET_USER:
            return action.user;
        default:
            return state;
    }
}
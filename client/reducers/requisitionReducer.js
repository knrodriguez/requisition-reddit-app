import axios from 'axios';

const ADD_REQUISITION = 'ADD_REQUISITION';

export const createRequisition = (requisition) => ({
    type: ADD_REQUISITION,
    requisition
})

export const addRequisition = (requisition) => {
    return async (dispatch) => {
        try {
            console.log(requisition);
            const { data } = await axios.post(`/api/requisitions`, requisition);
            dispatch(createRequisition(data));
        } catch (error) {
            console.log('Error inside addRequisition thunk', error);
        }
    }
}

export default (state = {}, action) => {
    switch(action.type){
        case ADD_REQUISITION:
            return action.requisition;
        default:
            return state;
    }
}
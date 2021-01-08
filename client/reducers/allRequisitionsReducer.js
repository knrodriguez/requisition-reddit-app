import axios from 'axios';

const GOT_REQUISITIONS = 'GOT_REQUISITIONS';

const gotRequisitions = (allReqs) => ({
    type: GOT_REQUISITIONS,
    allReqs
})

export const getRequisitions = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get('/api/requisitions')
            dispatch(gotRequisitions(data));
        } catch (error) {
            console.error('Error in getRequisitions thunk', error)
        }
    }
}

export default (state=[], action) => {
    switch(action.type) {
        case GOT_REQUISITIONS:
            return action.allReqs;
        default:
            return state;
    }
}
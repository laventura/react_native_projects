// Reducer for a single Employee
import {
    EMPLOYEES_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {};

// Reducer
export default (state = INITIAL_STATE, action) => {
    console.log('FetchAction:', action);
    switch (action.type) {
        case EMPLOYEES_FETCH_SUCCESS:   // fetch data from Firebase snapshot(payload)
            console.log('EmployeeReducer:', action);
            return action.payload;
        default:
            return state;
    }
};

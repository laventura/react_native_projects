import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEE_SAVE_SUCCESS
} from '../actions/types';

// Reducer for EmployeeCreate / Update Form

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: ''
};

export default (state = INITIAL_STATE, action) => {
    // console.log('EmployeeFormReducer: ', action);
    switch (action.type) {
        case EMPLOYEE_UPDATE:
        // action.payload === { prop: 'name', value: 'jane' }
        // ES6: Key Interpolation here
            return { ...state, [action.payload.prop]: action.payload.value };
        case EMPLOYEE_CREATE:
        // action.payload;  reset to init state so that the Form resets
            return INITIAL_STATE;
        case EMPLOYEE_SAVE_SUCCESS:     // when Emp Changes SAVED, clear out the Form
            return INITIAL_STATE;
        default:
            return state;
    }
};

// All Authentication related Reducer

//  Get all the Types 
import { 
    EMAIL_CHANGED, 
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER
} from '../actions/types';

// Initial State values
const INITIAL_STATE = { 
    email: '',
    password: '',
    user: null,
    error: '',
    loading: false
}; // value of User Input (Default)

export default (state = INITIAL_STATE, action) => {
    // console.log(action);    // debug only

    switch (action.type) {
        case EMAIL_CHANGED:
            // create a NEW object, copy the email value from payload
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            // create a NEW object, copy password from the payload
            return { ...state, password: action.payload };

        case LOGIN_USER:
            // set loading = true; this can help our Spinner
            return { 
                ...state, 
                loading: true,
                error: ''
             };
        case LOGIN_USER_SUCCESS:
            // show the User model (returned by Firebase)
            return { 
                ...state, 
                ...INITIAL_STATE,       // blank out everything else
                user: action.payload,   // just add the User payload (fm Firebase)
             };
        case LOGIN_USER_FAIL:
            // return error msg and clear out passwd
            return { 
                ...state, 
                error: 'Authentication failed', 
                password: '',
                loading: false  
            }; 
        default:
            return state;
    }
};
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

//  Get all the Types 
import { EMAIL_CHANGED, 
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER
} from './types';



// Action is a JS object with 'type' propery
export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

export const loginUser = ({ email, password }) => {
    // action-creator returns a func via dispatch - for async requests
    return (dispatch) => {
        // ASYNC AJAX, use Redux-Thunk via dispatch()
        dispatch({ type: LOGIN_USER });    // 

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user)) 
            .catch((error) => {
                console.log(error); // keep this error!
                // Login failed... so try CREATing a User account in Firebase
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(user => loginUserSuccess(dispatch, user))
                    .catch(() => loginUserFail(dispatch));
            });
    };
};

//  internal helpers
const loginUserFail = (dispatch) => {
    dispatch({
        type: LOGIN_USER_FAIL
    });
};

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });

    // navigate to another screen: using key defined in Router 
    Actions.scene_main();
};
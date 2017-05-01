// All Actions for Employee

import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
// local

import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEES_FETCH_SUCCESS,
    EMPLOYEE_SAVE_SUCCESS
} from './types';

// One ActionCreator - to handle all Employee Updates
//  will be called with one Object that has prop,value
export const employeeUpdate = ({ prop, value }) => {
    // prop : name of action
    // value: value to be updated

    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }
    };
};

// ActionCreator to CREATE record in Firebase
export const employeeCreate = ({ name, phone, shift }) => {
    
    //  need the currently Auth User Id
    const { currentUser } = firebase.auth();

    console.log('EmployeeCreator:', currentUser.uid, name, phone, shift);

    return (dispatch) => {  // Pretend to use Redux-Thunk
        // call firebase via path to our DB:
        firebase.database().ref(`/users/${currentUser.uid}/employees`)  // ES6 string interpolation
            .push({ name, phone, shift })               // add NEW RECORD to Firebase
            .then(() => {
                dispatch({ type: EMPLOYEE_CREATE });    // dispatch Action
                Actions.scene_employeeList({ type: 'reset' });
            });  // nav back to Scene EmployeeList
    };  
};

// ActionCreator to fetch/LIST employees from Firebase
export const employeesFetch = () => {

    //  need the currently Auth User Id
    const { currentUser } = firebase.auth();

    // async Action; use Redux-thunk
    return (dispatch) => {
        // call Firebase
        firebase.database().ref(`/users/${currentUser.uid}/employees`) // ES6 string interpolation
            .on('value', snapshot => {  // snapshot is a handle to employees, not the actual data
                dispatch({ 
                    type: EMPLOYEES_FETCH_SUCCESS, 
                    payload: snapshot.val()
                 });
            });
    };
};

// ActionCreator -- SAVE employee changes to Firebase
export const employeeSave = ({ name, phone, shift, uid }) => {

    //  need the currently Auth User Id
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        // point to specific record with uid
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
            .set({ name, phone, shift })    // UPDATE record in Firebase
            .then(() => {
                dispatch({ type: EMPLOYEE_SAVE_SUCCESS });  // to clear out saved Form
                // NAVigate back to Employee List - via Actions
                Actions.scene_employeeList({ type: 'reset' });
            });
    };
}; 

// ActionCreator -- DELETE employee (specified by uid) from Firebase 
export const employeeDelete = ({ uid }) => {
    //  need the currently Auth User Id
    const { currentUser } = firebase.auth();

    return () => {
        // point to specifid record with uid in Firebase
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
            .remove()   // DELETE record in Firebase
            .then(() => {
                // NAVigate back to Employee List
                Actions.scene_employeeList({ type: 'reset' });
            });
    };
};

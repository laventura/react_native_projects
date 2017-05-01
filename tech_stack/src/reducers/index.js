// Reducers all here

import { combineReducers } from 'redux'; // to help all reducers play nicely
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

// simply returns an array
export default combineReducers({
    // Key names here are our state values
    libraries: LibraryReducer,     //  define a new state KEY, which has list of Libraries
    selectedLibraryId: SelectionReducer
});

// console.log(store.getState());
// { libraries: [] }
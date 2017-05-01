// Select 1 single item from Library - this will be expanded 

export default (state = null, action) => {
    // state = null is for the very 1st invocation
    switch (action.type) {
        case 'select_library':
            return action.payload; // the library's ID 
        default:
            return state;   // the default
    }

    // console.log(action);
    // // cannot return undefined, therefore return null
    // return null;
};
// All Actions / ActionCreators here

// ActionCreator is a JS object that has 'type' property (just like an Action)
/// To export many things, use 'export' not 'export default'
export const selectLibrary = (libraryId) => {
    return {
        type:   'select_library',   // action: select the lib given by its payload
        payload: libraryId
    };
};
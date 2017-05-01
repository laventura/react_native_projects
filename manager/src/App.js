import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
// local 
import reducers from './reducers';
// import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {

    // one-time setup
    componentWillMount() {
          // Initialize Firebase
        const config = {
            apiKey: 'AIzaSyBFArBrV4Dvj6g745TDlRHM_7SE-mCNmGo',
            authDomain: 'manager-react-native-c2e81.firebaseapp.com',
            databaseURL: 'https://manager-react-native-c2e81.firebaseio.com',
            projectId: 'manager-react-native-c2e81',
            storageBucket: 'manager-react-native-c2e81.appspot.com',
            messagingSenderId: '882104325642'
        };
        firebase.initializeApp(config);
    }

    // main render
    render() {
        // 1st arg: reducers
        // 2nd arg is for any initial state we want to populate (optional)
        // 3rd arg: store enhancers (middleware)
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

// export 
export default App;

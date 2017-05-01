import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';   // index.js in common is understood
import LoginForm from './components/LoginForm';


class App extends Component {
    // state - if user is signed-in/logged-out
    state = { loggedIn: null };

    // lifecycle method
    componentWillMount() {
        // init Firebase -- tokens from firebase app
        firebase.initializeApp({
            apiKey: 'AIzaSyAbjumqBUGnirIouciu-rjvmyVLtHmRrmI',
            authDomain: 'authentication-e25ed.firebaseapp.com',
            databaseURL: 'https://authentication-e25ed.firebaseio.com',
            projectId: 'authentication-e25ed',
            storageBucket: 'authentication-e25ed.appspot.com',
            messagingSenderId: '845028682042'
        });

        // handle if User logs-in or logs-out
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                // user is defined / has value if User logs-in
                this.setState({ loggedIn: true });
            } else {
                // user is undefined, if User logs-out
                this.setState({ loggedIn: false });
            }
        });
    }

    // conditional JSX - to show Login or Logout button
    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                <Button buttonPress={() => firebase.auth().signOut()}>
                    Log Out Let Try a Really Long Button Name
                </Button>
            );
            case false:
                return <LoginForm />;
            default:    // null
                return <Spinner size="large" />;
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}

// export 
export default App;

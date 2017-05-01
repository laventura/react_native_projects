import React, { Component } from 'react';
// import { TextInput } from 'react-native';   // bcos we use our own Input component
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';


class LoginForm extends Component {
    // state 
    state = { email: '', password: '', error: '', loading: false };   // prop contains email address, password

    // Login button Press handler
    onButtonPress() {
        const { email, password } = this.state;

        this.setState({ error: '', loading: true }); // set state

        console.log('Calling Firebase login:' + email + ' ' + password);
        // 1 - call Firebase to auth
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))   // DO NOT put () after onLoginSuccess
            .catch(() =>  {
                console.log('sign-in failed: User:[' + email + ', ' + password + '] trying to Create account...');
                // 2a - failed: so try create a new account
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess.bind(this))
                    // 2b - failed again: show error
                    .catch(this.onLoginFail.bind(this));
            });
    }

    onLoginSuccess() {
        // clear out any error msg
        // clear out 'loading'
        // clean out the form
        this.setState({
            email: '',
            password: '',
            loading: false,  // clears out spinner
            error: ''
        });
    }

    onLoginFail() {
        // console.log('Error authenticating: User/pswd:' + email + ', ' + password);
        this.setState({ 
            error: 'Authentication failed',
            loading: false
        });
    }

    // show Login button conditionally
    renderButton() {
        // if trying to login... 
        if (this.state.loading) {
            return <Spinner size="small" />;
        } 
        // else show Login Button
        return (
            <Button buttonPress={this.onButtonPress.bind(this)}>
                Log In!
            </Button>
        );
    }

    // render
    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                        label="Email:"
                        placeholder="user@gmail.com"
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                </CardSection>

                <CardSection>
                    <Input 
                        secureTextEntry={true}
                        placeholder="password"
                        label="Password:"
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />

                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>

            </Card>
        );
    }
}


// Styling
const styles =  {
    errorTextStyle: {
        fontSize:   20,
        alignSelf: 'center',
        color:      'red'
    }
};

export default LoginForm;

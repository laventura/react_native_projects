import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
// local 
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';

class LoginForm extends Component {
    // callback
    onEmailChange(text) {
        // call action-creator
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        // call action-creator
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        const { email, password } = this.props;

        this.props.loginUser({ email, password });
    }
    // conditionally show Button or Spinner
    renderButton() {
        if (this.props.loading) {
            return <Spinner size="large" />;
        }
        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                    Login
            </Button>
        );
    }

    // main render
    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email:"
                        placeholder="email@gmail.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        label="Password:"
                        placeholder="password"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {this.props.error}
                </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

// Styles
const styles = {
    errorTextStyle: {
        fontSize:   20,
        alignSelf:  'center',
        color:      'red'
    }
};

// map state to props
const mapStateToProps = state => {
    // these props defined in reducers/index.js
    return {
        email:      state.auth.email,
        password:   state.auth.password,
        error:      state.auth.error,
        loading:    state.auth.loading
    };
};

// export
export default connect(mapStateToProps, { 
    emailChanged, passwordChanged, loginUser 
})(LoginForm);

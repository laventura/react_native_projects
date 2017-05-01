import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';   // bcos we need an ActionCreator
import { View, Text, Picker } from 'react-native';
import Communications from 'react-native-communications';

// local imports
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';    // ActionCreator modifies EmployeeForm reducerr
import { Card, CardSection, Button, Confirm } from './common';
import EmployeeForm from './EmployeeForm';

// import Communications from 'react-native-communications';
// local 


// Must get navigated to with a specific Employee
// we need to load that employee's attributes via a reducer

class EmployeeEdit extends Component {

    // component-level (not app-level) state: 
    // to toggle visibility of Modal dialog
    state = { showModal: false };

    // one-time
    componentWillMount() {
        // take all this.state.props.employee - and stuff them into the reducer 'employeeUpdate'
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({ prop, value });
        });
    }

    // callback - to save Emmployee changes
    onButtonPress() {
        const { name, phone, shift } = this.props;  // from the reducer (NOT this.state.props!!!)

        // console.log('EmpEdit Button:', name, phone, shift); // debug

        // call on Firebase - with uid of this employee!
        // this.props.employee is set when EmployeeEdit is called (from ListItem)
        this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
    }

    // callback - to SMS an employee
    onTextPress() {
        const { phone, shift } = this.props;

        const msg = `Your upcoming shift is on ${shift}`;
        Communications.text(phone, msg);
    }

    // callback - when DELETE pressed to Fire employee
    onDeletePress() {
        // simply show the modal dialog
        this.setState({ showModal: !this.state.showModal });
    }

    // Modal Decline
    onConfirmDecline() {
        // just toggle the visibility of the modal
        this.setState({ showModal: false });
    }
    // Model Accept
    onConfirmAccept() {
        // this results in Deletion of Employee record from Firebase
        const { uid } = this.props.employee;

        // DELETE the employee in Firebase
        this.props.employeeDelete({ uid });
    }

    // main render
    render() {
        // console.log('*** EmpEdit:', this.props.employee);  // debug
        return (
            <Card>
                <EmployeeForm />

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Save Changes
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={this.onTextPress.bind(this)}>
                        Text Schedule
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={this.onDeletePress.bind(this)}>
                        Let Go (Delete/Fire) Employee 
                    </Button>
                </CardSection>

                <Confirm 
                  visible={this.state.showModal}
                  onAccept={this.onConfirmAccept.bind(this)}
                  onDecline={this.onConfirmDecline.bind(this)}
                >
                    Are you sure you want to delete this?
                </Confirm>

            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
};

// export
export default connect(mapStateToProps, { 
    employeeUpdate,
    employeeSave,
    employeeDelete
})(EmployeeEdit);

import React, { Component } from 'react';
import { connect } from 'react-redux';
// local imports
import { Card, CardSection, Button } from './common';
import { employeeUpdate, employeeCreate } from '../actions';  // ActionCreator
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
    // callback
    onButtonPress() {
        const { name, phone, shift } = this.props;

        // call on our ActionCreator
        this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
    }

    // main render
    render() {
        // debug 
        // console.log('EmpCreate:', this.props.employee);

        return (
            <Card>
                <EmployeeForm {...this.props} />

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Create Employee
                    </Button>
                </CardSection>
                
            </Card>
        );
    }
}



// mapStateToProps
const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm; // these props defined in reducers/index.js

    return { name, phone, shift };
};

// export via connect helper
export default connect(mapStateToProps, { 
    employeeUpdate,
    employeeCreate 
})(EmployeeCreate);

import _ from 'lodash';
import React, { Component } from 'react';
import { ListView, View, Text } from 'react-native';
import { connect } from 'react-redux';
// local
import { employeesFetch } from '../actions';    // ActionCreator
import EmployeeListItem from './EmployeeListItem';

class EmployeeList extends Component {
    // Lifecycle: one time setup - get employees from Firebase
    componentWillMount() {
        this.props.employeesFetch();    // get from Firebase; this populates this.props.employees

        // create data source
        this.createDataSource(this.props);
    }

    // Lifecycle: (similar to viewWillAppear() in iOS)
    componentWillReceiveProps(nextProps) {
        // nextProps are the next set of props this component
        // will be rendered with
        // this.props is still the current/old state props

        // create data source
        this.createDataSource(nextProps);
    }

    // internal helper - to build dataSource - called with props for employees
    createDataSource({ employees }) {
        // ListView data source - to show employees
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(employees);
    }

    // employee render
    renderRow(employee) {
        return <EmployeeListItem employee={employee} />;
    }
    
    // main render
    render() {
        // console.log('EmployeeList:', this.props);    // debug only
        return (
            <ListView 
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
}

// map state to props
// Whenever state changes, mapStateToProps() will be invoked by connect helper
// which will run the reducer
const mapStateToProps = state => {
    // convert from employees Object to array
    // state.employees has many key/value pairs
    // for each key/vaue pair (mapped by _lodash), run this fat=> func
    // with each val/uid  (val has name, shift, prop)
    // create a new Object, push in all values from User model, 
    // and throw in id on top
    // then map those into an array (automagically done by map())
    const employees = _.map(state.employees, (val, uid) => {
        return { ...val, uid }; // { shift: 'Monday', name: 'Jane', id: '123434' };
    });

    return { employees };
};


// export - via connect helper
export default connect(mapStateToProps, { employeesFetch })(EmployeeList);

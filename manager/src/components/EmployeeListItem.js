import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';
// local
import { CardSection } from './common';

class EmployeeListItem extends Component {
    // callback for Row Press - Navigate to another screen
    onRowPress() {
        // Navigate to Employee Edit screen - with the selected Employee
        Actions.scene_employeeEdit({ employee: this.props.employee });
    }

    // main render
    render() {
        const { name } = this.props.employee;

        return (
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
                <View>
                    <CardSection>
                        <Text style={styles.titleStyle}>
                            {name}
                        </Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

// styles
const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15,
        color: '#228B22'  // ForestGreen
    }
};

export default EmployeeListItem;

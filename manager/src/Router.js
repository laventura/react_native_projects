// Define all different Scenes/Routes within the App
import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';

// local
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
    return (
        <Router sceneStyle={{ paddingTop: 64 }}>
            <Scene key="scene_auth">
                <Scene 
                    initial
                    key="scene_login"
                    component={LoginForm}
                    title="Please Login"
                />
            </Scene>

            <Scene key="scene_main">
                <Scene 
                    initial
                    rightTitle="Add"
                    onRight={() => Actions.scene_employeeCreate()}
                    key="scene_employeeList"
                    component={EmployeeList}
                    title="Employees"
                />
                <Scene 
                    key="scene_employeeCreate"
                    title="Create/Add Employee"
                    component={EmployeeCreate}
                />
                <Scene 
                    key="scene_employeeEdit"
                    title="Edit Employee"
                    component={EmployeeEdit}
                />
            </Scene>
        </Router>
    );
};


// 
export default RouterComponent;

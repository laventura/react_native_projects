import React from 'react';
import { View, Text } from 'react-native';
// Redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// local
import reducers from './reducers';
import { Header, Button } from './components/common';
import LibraryList from './components/LibraryList';     // our data source

// Create component
const App = () => {

    // flex:1 means fill up as much space as needed
    return (
        <Provider store={createStore(reducers)}>
            <View style={{ flex: 1 }}>
                <Header headerText="Tech Stack" />
                <LibraryList />
            </View>
        </Provider>
    );
};

// export 
export default App;

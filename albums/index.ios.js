/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// 1 - Import Library to create components
import React from 'react';
import { AppRegistry, View } from 'react-native';
// local imports
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';


// 2 - Create a component
// component is a JS func that returns some JSX
// JSX is a bunch of React function calls, that return some JS
const App = () => (
  // flex: 1 needed for the ScrollView in AlbumList. ReactNative bug
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums Main'} />
    <AlbumList />
  </View>
);

// 3 - Render the components to the device
// 0 - register atleast one component in the Registry
// 1 - name of main component must match the project name
// 2 - return the 1st component that renders something
AppRegistry.registerComponent('albums', () => App);

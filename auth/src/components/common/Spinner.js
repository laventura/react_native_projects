import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

// Create
const Spinner = ({ size }) => {
    return (
        <View style={styles.spinnerStyle}>
            <ActivityIndicator  size={size || 'large'} />
        </View>
    );
};


// Styling
const styles = {
    spinnerStyle: {
        // full width on the screen
        flex:   1,
        // let spinner sit in center
        justifyContent: 'center',
        alignItems:     'center'
    }

};


// Export

export { Spinner };

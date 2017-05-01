import React from 'react';
import { Text, TouchableOpacity } from 'react-native';


const Button = ({ buttonPress, children }) => {
    const { 
        buttonStyle, textStyle }   = styles;

    return (
        <TouchableOpacity 
            onPress={buttonPress}
            style={buttonStyle}>
            <Text style={textStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};

// Styling
const styles = {
    textStyle: {
        alignSelf:      'center',
        color:          '#007AFF',
        fontSize:       16,
        fontWeight:     '600',
        paddingTop:     10,
        paddingBottom:  10
    },
    buttonStyle: {
        flex:       1,  // expand to fill content as much as it can
        alignSelf:  'stretch', // position itself to fill
        backgroundColor: '#FFF',
        borderWidth:    2,
        borderColor:    '#007AFF', // ios Blue
        marginLeft:    5,
        marginRight:    5,
        borderRadius:   5
    }
};


export default Button;

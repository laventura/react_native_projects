// Header component 

// 1 - Import libraries to make component
import React from 'react';
import { Text, View } from 'react-native';

// 2 - Create Component
const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8', // sapphire blue
        justifyContent: 'center',   // vertical
        alignItems: 'center',       // horizontal
        height: 60,                 // px
        paddingTop: 15,             // px
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,               // 
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
};

// 3 - Make Component avail to other parts
export default Header;

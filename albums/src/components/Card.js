import React from 'react';
import { View } from 'react-native';

// Card component -- just to look nice and wrap other components
const Card = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}   
        </View> // props.children passed from AlbumDetail
    );
};

// Styling
const styles = {
    containerStyle: {   // arbitrary name - but useful
        borderWidth:        1,
        borderRadius:       2, // rounded corners
        borderColor:        '#DDD',
        borderBottomWidth:  0,  // dont give any bottom width bcos many items

        shadowColor:    '#000',
        shadowOffset:   { width: 0, height: 2 },
        shadowOpacity:  0.1,     // light
        shadowRadius:   2,
        elevation:      1,
        marginLeft:     5,
        marginRight:    5,
        marginTop:      10  // spacing between two items 
    }
};

export default Card;
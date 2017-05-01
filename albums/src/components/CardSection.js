import React from 'react';
import { View } from 'react-native';

// create
const CardSection = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );

};

// styling
const styles = {
    containerStyle: {
        borderBottomWidth:  1,
        padding:            5,
        backgroundColor:    '#FFF',
        justifyContent:     'flex-start',
        flexDirection:      'row',  // horizontal adjustment for justifyContent
        borderColor:        '#DDD',
        position:           'relative'
    }

};


// export
export default CardSection;

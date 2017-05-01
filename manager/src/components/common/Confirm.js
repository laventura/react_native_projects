// Modal to Confirm YES/NO dialog

import React from 'react';
import { Text, View, Modal } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';

/// Pass in:
// children: text for modal dialog
// onAccept(): a func when user clicks YES
// onDecline() a func when user clicks NO
// visible: boolean - to show or not
const Confirm = ({ children, visible, onAccept, onDecline }) => {

    const { containerStyle, dialogStyle, cardSectionStyle } = styles;

    // main render
    return (
        <Modal
            visible={visible}           // make visible or not
            animationType="slide"
            onRequestClose={() => {}}  // empty bcos Android expects this
            transparent
        >
            <View style={containerStyle}>
                <CardSection style={cardSectionStyle}>
                    <Text style={dialogStyle}>
                        {children}
                    </Text>
                </CardSection>

                <CardSection>
                    <Button onPress={onAccept}>Accept</Button>
                    <Button onPress={onDecline}>No</Button>
                </CardSection>
            </View>
        </Modal>
    );
};

// styling
const styles = {

    cardSectionStyle: {
        justifyContent: 'center'
    },

    // for the dialog
    dialogStyle: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 40,
        color: 'red'
    },
    // for container: show a transparent bg w/ opacity setting
    containerStyle: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        position: 'relative',
        flex: 1,
        justifyContent: 'center'
    }
};

// named export bcos reusable 
export { Confirm };

import React, { Component } from 'react';
import { 
    Text, 
    TouchableWithoutFeedback, 
    View,
    LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
// local
import { CardSection } from './common';
import * as actions from '../actions';  // import all actions 


// Create: Shows one item of a List
// available to us as this.props.library
class ListItem extends Component {

    // Lifecyle method
    componentWillUpdate() {
        LayoutAnimation.spring();   // springy animation
    }

    // conditionally render a description for the selected library Id
    renderDescription() {
        const { library, expanded } = this.props;

        if (expanded) {
            return (
                <CardSection>
                    <Text style={{ flex: 1, paddingLeft: 16, paddingRight: 16, color: '#FA8072' }}>
                        {library.description}
                    </Text>
                </CardSection>
            );
        }
    }

    // main render
    render() {
        const { titleStyle } = styles;
        const { id, title } = this.props.library;

        // console.log(this.props);  // debug only

        return (
            <TouchableWithoutFeedback 
                onPress={() => this.props.selectLibrary(id)}  // call action-creator
            >
                <View>
                    <CardSection>
                        <Text style={titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
} // ListItem

const mapStateToProps = (state, ownProps) => {
    // ownProps are passed to the item we call (i.e. selected library List Item)
    // return selected library ID (// from the SelectionReducer)
    // Expand description if this library's Id is selected (tapped by User)
    const expanded = state.selectedLibraryId === ownProps.library.id;

    return { expanded };  // a flag we pass to ListItem
};

// Styling an item
const styles = {
    titleStyle: {
        fontSize:   18,
        paddingLeft: 15
    }
};

// export
export default connect(mapStateToProps, actions)(ListItem); 
// bind action-creator to connect
// 1st arg 'null' bcos we dont have mapStatesToProps() yet
// modify ListItem with the connect helper
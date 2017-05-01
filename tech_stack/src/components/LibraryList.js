import React, { Component } from 'react';
import { connect } from 'react-redux';  // Connect Helper - to get the datasource
import { ListView } from 'react-native';  // TableView in IOS

// local
import ListItem from './ListItem';

class LibraryList extends Component {

    componentWillMount() {
        // similiar to viewDidLoad
        const ds = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2
        });

        // bind the props 'libraries' to this table view
        this.dataSource = ds.cloneWithRows(this.props.libraries);
    }

    // render one row of the List
    renderRow(item) {
        return <ListItem library={item} />;
    }

    // Render the entire List
    render() {
        // console.log(this.props);    // received from mapStateToProps
        return (
            <ListView
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }

} // LibraryList

// map State --> Props
const mapStateToProps = state => {
    // console.log(state);  // debug only
    // return an object that maps from our Data Source to some key
    return {
        libraries: state.libraries  
        // Key 'libraries' can be anything, but state.KEY_NAME must match to that in index.js
    };
};

// export: invoke connect(), which returns another func, which is called with LibraryList
export default connect(mapStateToProps)(LibraryList);  

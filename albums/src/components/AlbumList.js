// 1 - Import libraries to make component
import React, { Component } from 'react';
import { ScrollView }  from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

// 2 - contructor
class AlbumList extends Component {
    state = { albums: [] }; // 2a - init state


    // lifecycle - just before component will be placed on screen
    componentWillMount() {
        // 2b - fetch albums from REST
        console.log('component will mount AlbumList');
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data }));
    }

    // 2c - map from state to albumlist
    // use a map method
    renderAlbums() {
        return this.state.albums.map(album => 
            <AlbumDetail key={album.title} album={album} /> // props 'album' in AlbumDetail
        );
    }

    render() {
        console.log(this.state);

        return (
            // this is scrollable list!
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}

// export
export default AlbumList;

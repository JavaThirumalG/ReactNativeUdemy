import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import axandroid from 'axios';

import AlbumDetail from './albumDetails';


export default class AlbumList extends Component<{}>{
    state = { albums: [] };
    componentWillMount() {
        axandroid.get('http://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data }));

    }

    renderAlbums() {
        return this.state.albums.map(album => <AlbumDetail key={album.title} album={album} />);
        // return <Text>onsdfsdf</Text>;
    }

    render() {
        console.log(this.state.albums);
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>

        );
    }
}


/**
 * Created by tedshaffer on 4/23/16.
 */
import React, { Component } from 'react';

class Playlist extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        console.log("Playlist componentDidMount invoked");
    }

    render () {

        console.log("Playlist: eat pizza");

        return (
            <div className="playlistDiv">
                <p>Zone>Zone 1: Video or Images: Playlist</p>
            </div>
        );
    }

}

export default Playlist;

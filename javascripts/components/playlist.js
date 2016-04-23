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
            <div>
                Playlist
            </div>
        );
    }

}

export default Playlist;

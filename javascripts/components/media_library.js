/**
 * Created by tedshaffer on 4/23/16.
 */
import React, { Component } from 'react';

class MediaLibrary extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        console.log("MediaLibrary componentDidMount invoked");
    }

    render () {

        console.log("MediaLibrary: eat pizza");

        return (
            <div>
                MediaLibrary
            </div>
        );
    }
    
}

export default MediaLibrary;
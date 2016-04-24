/**
 * Created by tedshaffer on 4/23/16.
 */
import React, {Component} from 'react';

import MediaLibrary from './components/media_library';
import Playlist from './components/playlist';

class App extends Component {
    render() {
        return (
            <div className = "container baContainer">
                <MediaLibrary />
                <Playlist />
            </div>
        );
    }
}

export default App;
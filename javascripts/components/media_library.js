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

        this.mediaLibraryThumbs = [];
        this.buildMediaLibrary();
    }

    buildMediaLibrary() {

        // var fs = require('fs');
        // const fs = require('fs');
        // let path = require('path');
        //
        // let dir = '/Users/tedshaffer/Documents/Projects/electron/ba-2/public';
        // let suffix = "jpg";
        //
        // let thumbCount = 0;
        // let columnIndex = 0;
        // let imageItemThumb = {};
        //
        // let files = fs.readdirSync(dir);
        // files.forEach(function(file) {
        //
        //     let filePath = path.format({
        //         root: "/",
        //         dir: dir,
        //         base: file,
        //         ext: "." + suffix,
        //         name: "file"
        //     });
        //
        //     let url = path.relative(dir, filePath);
        //
        //     let thumb = {};
        //
        //     thumb.id = thumbCount.toString();
        //     thumb.thumbUrl = "public/" + url;
        //     thumb.path = url;
        //     thumb.fileName = file;
        //
        //     thumbCount++;
        //
        //     let keyColumn = "column" + columnIndex.toString();
        //     imageItemThumb[keyColumn] = thumb;
        //     columnIndex++;
        //
        //     if ((columnIndex % numColumns) == 0) {
        //         this.mediaLibraryThumbs.push(imageItemThumb);
        //         imageItemThumb = {};
        //         columnIndex = 0;
        //     }
        // });
        //
        // console.log("all done");

        // need a thumb that tells users to drag / drop here
        // var playlistThumb = {};
        // playlistThumb.id = "0";
        // playlistThumb.thumbUrl = $scope.mediaLibraryThumbs[0].column0.thumbUrl;
        // playlistThumb.stateName = "Drop item here";
        // this.state.playlistThumbs.push(playlistThumb);
    }

    render () {

        let self = this;
        // let mediaLibraryThumbs = this.props.mediaLibaryThumbs.map(function(thumb) {
        //
        // });



        return (
            <div className="mediaLibraryDiv">
                <p>Media Library:</p>
            </div>
        );

    }
    
}

export default MediaLibrary;
require('../less/main.less');

'use strict';

// var React = require('react');
// var ReactDOM = require('react-dom');
//
// var Entry = React.createClass({
//   render: function(){
//     return (
//       <div className="myDiv">
//         Best Pizza ever!
//       </div>
//     )
//   }
// });
//
// ReactDOM.render(<Entry />, document.getElementById('content'));

import React from 'react';
import {render} from 'react-dom';
// import App from './App';

render(
    <div className="myDiv">pizza</div>,
    document.getElementById('content')
);

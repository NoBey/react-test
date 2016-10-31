import React, {Component}  from 'react'
import {render} from 'react-dom'
// import { Router, Route, Link, browserHistory } from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import MyAwesomeReactComponent from './MyAwesomeReactComponent.js';
import RaisedButton from 'material-ui/RaisedButton';
import BottomNavigation from 'material-ui/BottomNavigation';
import {
    Card,
    CardActions,
    CardHeader,
    CardMedia,
    CardTitle,
    CardText
} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';


render(<App />, document.getElementById('app'))

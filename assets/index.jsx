'use strict';

import $ from 'jquery';  
import ReactDOM from 'react-dom';
import React from 'react';

// themes
import normalize from './css/normalize.css';
import toast from './css/toast.css'; // Grids
import styles from './css/style.css';

import injectTapEventPlugin from 'react-tap-event-plugin';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {deepPurple100, deepPurple500, deepPurple700} from 'material-ui/styles/colors';

// React components
import Navbar from './components/navbar';
import Footer from './components/footer';
import App from './components/app';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: deepPurple500,
    primary2Color: deepPurple700,
    primary3Color: deepPurple100,
  },
}, {
  avatar: {
    borderColor: null,
  },
});

ReactDOM.render(
  <div className={styles.wrap}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <Navbar />
    </MuiThemeProvider>
    <MuiThemeProvider muiTheme={muiTheme}>
      <App />
    </MuiThemeProvider>
    <MuiThemeProvider muiTheme={muiTheme}>
      <Footer />
    </MuiThemeProvider>
  </div>,
  document.getElementById('content')
);
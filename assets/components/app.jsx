import React from 'react';

import toast from '../css/toast.css'; // Grids
import styles from '../css/style.css';

import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';

class App extends React.Component {
  render() {
    return (
      <div className={[styles.mainContent, toast.grid].join(' ')}>
        <TextField 
          hintText="Search..."
          fullWidth={true}
        />
        <h1>Hello, World!</h1>
      </div>
    );
  }
}

export default App;
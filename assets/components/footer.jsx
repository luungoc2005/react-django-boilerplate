import React from 'react';

import toast from '../css/toast.css'; // Grids
import styles from '../css/style.css';

import Paper from 'material-ui/Paper';

class Footer extends React.Component {
    render() {
        return (
            <Paper zDepth={1} className={[styles.footer, toast.grid].join(' ')}>
                <p>Footer content</p>
                <p>Paragraph 1 of footer content</p>
            </Paper>
        );
    }
}

export default Footer;
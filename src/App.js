import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';

function App() {
  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

  const classes = useStyles();

return <div >
  Hello material ui <br/>
  <Button variant="contained" color="secondary">Hello Kayani</Button>
 <br/>
 This is send button   <Button
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<Icon>send</Icon>}
      >
        Send
      </Button>
 
 </div>
}

export default App;

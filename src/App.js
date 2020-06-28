import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
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
  <Grid container spacing={3}>
  <Grid item xs={12}>
      Hello world1
  </Grid>
  <Grid item xs={6}>
      Hello world2
  </Grid>
  <Grid item xs={6}>
      Hello world3
  </Grid>
  <Grid item xs={2} style={{backgroundColor:"red"}}>
      Hello world5
  </Grid>
  <Grid item xs={8} style={{backgroundColor:"green"}}>
      Hello world6
  </Grid>
  <Grid item xs={2} style={{backgroundColor:"blue"}}>
      Hello world7
  </Grid>
  </Grid>
 </div>
}

export default App;

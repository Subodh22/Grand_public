import React from 'react';


import {Typography,AppBar,Card,CardActions,CardContent,CardMedia,CssBaseline,Grid,Toolbar,Container, Button} from '@material-ui/core';
import useStyles from './style';

import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import Search_tab from './components/Search_tab';




const card_array=[1,2,3,4,5,6,7,8]
function App() {
  const classes =useStyles();
 

  return (
    <>
  <CssBaseline/>
  <AppBar className={classes.apps} position="relative">
    <Toolbar>
     
      <Typography variant="h6">
        Zantalone
      </Typography>
    </Toolbar>
    </AppBar>
    
    <main>
      <div className={classes.xip}  >
       <Toolbar> <Typography className={classes.degree} align="center" variant='h7' gutterButtom>Degrees</Typography>
        </Toolbar>
      </div>
    <div className={classes.container}>
       
      <div>
      <Grid className={classes.buttons}
      container spacing={2} justify="center">
        <Grid item>
       <Search_tab/>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary">Search</Button>
          </Grid>
         

      </Grid>

      </div>
      <Grid container
  className={classes.degree_choose} justify="center">
      
      
        
      </Grid>

    </div>

  
    </main>
    </>
  );
}

export default App;
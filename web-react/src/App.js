import React from 'react';


import {Typography,AppBar,Card,CardActions,CardContent,CardMedia,CssBaseline,Grid,Toolbar,Container, Button} from '@material-ui/core';
import useStyles from './style';
import {useState,useEffect} from 'react';
import Search_tab from './components/Search_tab';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route,Switch,Link} from 'react-router-dom';
import Results_tab from './components/Results_tab';



function App() {
  const classes =useStyles();

const [query_value,setQuery]=useState('')
const [deg_value,setDeg]=useState('')
const changeValue=(input,deg)=>
{
  setQuery(input);
  setDeg(deg);
  
}
  useEffect(() => {
  
   const params = new URLSearchParams(location.search);
   const topic = params.get("topic");
   const degree = params.get("degree");
   setQuery(topic);
   setDeg(degree);
   
  }, [])

  return ( <Router>
    <>
     
  <CssBaseline/>
  <AppBar className={classes.apps} position="relative">
    <Toolbar>
    <Link  className={classes.nth} to="/">
      <Typography  variant="h6">
      Zantalone
      </Typography></Link>
    </Toolbar>
    </AppBar>
    <div className={classes.xip}  >
       <Toolbar> <Typography className={classes.degree} align="center" variant='h6' >Degrees</Typography>
        </Toolbar>
      </div>
    
    <main>

      
    
<Route path='/' exact render={(props)=>
  (
<div className={classes.container}>
      <div>
      <Grid className={classes.buttons}
      container spacing={2} justify="center">
        <Grid item>
       <Search_tab onChange={changeValue}/>
        </Grid>
        <Grid item>
          <Link to={'/result?topic='+query_value+'&degree='+deg_value}><Button variant="contained" color="primary">Search</Button></Link>
          </Grid>
         </Grid> </div>
      <Grid container
  className={classes.degree_choose} justify="center">
      </Grid>
</div>
  )}/>
    <Route path ="/result" component={Results_tab}/>

    </main>
    
    </></Router>
    
  );
}

export default App;
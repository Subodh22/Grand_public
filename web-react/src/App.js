import React from 'react';


import {Typography,AppBar,Card,CardActions,CardContent,CardMedia,CssBaseline,Grid,Toolbar,Container, Button} from '@material-ui/core';
import useStyles from './style';
import {useState,useEffect} from 'react';
import Search_tab from './components/Search_tab';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route,Switch,Link } from 'react-router-dom';
import Results_tab from './components/Results_tab';

import degree_tab from './components/degree_tab';
import syllabus from './components/syllabus';
import course from './components/course';

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
  <AppBar className={classes.apps} position="static">
    <Toolbar>
    <Link  className={classes.nth} to="/">
      <Typography  variant="h6">
      Zantalone
      </Typography></Link>
    </Toolbar>
    </AppBar>
    <div className={classes.xip}  >
       <Toolbar> <Button color="inherit" component={Link} to="/degree_list"> Degrees 
       
       </Button>
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
       <Router><Search_tab onChange={changeValue}/></Router>
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
  <Switch>
    <Route path ="/result" component={Results_tab}/>
     
    <Route path ="/degree_list" component={degree_tab}/>
    <Route path = "/syllabus" component={syllabus}/>
    <Route path = "/course" component={course}/>
    </Switch>
    </main>
    
    </></Router>
    
  );
}

export default App;
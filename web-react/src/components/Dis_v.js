import React from 'react'
import { Link } from 'react-router-dom'
import {useState,useEffect} from 'react';
import {useQuery,gql} from '@apollo/client';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { useHistory } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      marginBottom:'20px',
      maxWidth: 500,
      

    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
  }));
const Dis_v= ( ) => {
    const history = useHistory() 
    const Get_videos =gql`
    query topic($name:String){
        topic(name:$name)
        {
            videoss
            {
                title
                img
                age
                views
                duration

            }
        }}
    `
    const [tool,setTool]=useState('');

    useEffect(() => {
        if(tool===""){
        const param = new URLSearchParams(location.search);
        const topic= param.get("topic");
        setTool(topic);}
        return history.listen((location) => { 
            const param = new URLSearchParams(location.search);
            const topic= param.get("topic");
            setTool(topic);
         }) 
        
      },[ ]) ;
       
        
   
    
    const classes = useStyles();
    // console.log(tool+"AYO");
    const { loading, error, data } = useQuery(Get_videos,
        {
            variables:{name:tool}
        },);
    if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  
return ( 
      <div>
     {tool==="any"?<h3>Please select a topic</h3> :<div className={classes.root}>
     {data.topic[0].videoss.map(to=>(<Paper key={to.title} className={classes.paper}>
        <Grid container spacing={2}>
            
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={to.img} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            
              <Grid item xs>
                <Typography variant="body2" gutterBottom>
                 {to.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    Duration:{to.duration}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {to.views}.{to.age}
                </Typography>
                
              </Grid>
              
           
            
          </Grid>
        </Grid>
        
        
      </Paper>))}
      </div> } 
    </div>
  );
}


export default Dis_v;

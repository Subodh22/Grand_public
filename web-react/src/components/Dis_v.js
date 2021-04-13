import React from 'react'
import { Link } from 'react-router-dom'
import {useState,useEffect} from 'react';
import {useQuery,gql} from '@apollo/client';
import { makeStyles,useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { useHistory } from 'react-router-dom';
import YouTube from 'react-youtube';
import CardActionArea from '@material-ui/core/CardActionArea';

import { Card, Container, Typography } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
// import './vid_play.css';
const useStyles = makeStyles((theme) => ({
    videoRow:{
      display:'flex',
      marginBottom:'30px',
      maxWidth:'700px'
    },
    media: {
      width:'100%',
      height:140
    }
    ,cc:{
      display:'flex',
      maxWidth:'100vh'
    },
    imgRow:{
      objectFit:'contain',
      width:246,
      height:138
    },
    videoRow_text:
    {
      marginLeft:'14px'
    },
    videoRow_headline:{
      fontSize:'18px',
      color:'#606060'
    },
    videoRow_para:{},
   

    root: {
      display: 'flex',
      minHeight:''
    },
    vide:{
      minHeight:'60vh',
      paddingBottom:'20px'
     
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      objectFit:'contain',
      width:'100%',
      minHeight:'300px'
     
      
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    playIcon: {
      height: 38,
      width: 38,
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
                id
                title
                img
                age
                views
                duration


            }
        }}
    `
    const [tool,setTool]=useState('');
    const [v_id,setV_id]=useState('');
    useEffect(() => {
        if(tool===""){
        const param = new URLSearchParams(location.search);
        const topic= param.get("topic");
        setTool(topic);}
        return history.listen((location) => { 
            const param = new URLSearchParams(location.search);
            const topic= param.get("topic");
            setTool(topic);
            setV_id('');
         }) 
        
      },[ ]) ;
      const opts = {
       width:'100%',
      height:'600',

        playerVars: {
          
          autoplay: 1,
        },
      };
    function shoot(joni)
    {

        setV_id(joni[0])
    
    }
    function onReady(event) {
        // access to player in all event handlers via event.target
        event.target.playVideo();
      }
   
    
const classes = useStyles();
const theme = useTheme();

    // console.log(tool+"AYO");
    const { loading, error, data } = useQuery(Get_videos,
        {
            variables:{name:tool}
        },);
    const fabi=(e)=>{console.log(e.target.key)};
    if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  
return (   
     <>
     {tool==="any"?<Typography>Please select a topic</Typography> :<div   >
         {v_id==="" ?  <></>:<Grid container><Grid item xs={12} className={classes.vide}><YouTube  videoId={v_id}opts={opts} onReady={onReady}/></Grid></Grid>}
         <Grid container  spacing={3}>
           
     {data.topic[0].videoss.map(to=>(
       <Grid item  xs={12}  key={to.title}  onClick={ ()=>shoot(to.id)} >
       

<Card className={classes.root} key={to.title}  onClick={ ()=>shoot(to.id)}>
  <CardActionArea>
  <Grid container>
    <Grid item xs={12}lg={3} md={4} sm={6} >
<CardMedia
  className={classes.cover}
  image={to.img}
 
/></Grid>
<Grid item xs={12}lg={8} md={6} sm={6}>
<div className={classes.details}>
  <CardContent  className={classes.content}>
    <Typography component="h5" variant="h5">
      {to.title}
    </Typography>
    <Typography variant="subtitle1" color="textSecondary">
     {to.duration}
    </Typography>
    <Typography variant="subtitle1" color="textSecondary">
     {to.views}•{to.age}
    </Typography>
    
  </CardContent>
 
</div>
</Grid>
</Grid>
</CardActionArea>
</Card>
</Grid>
     ))}

</Grid> 
      </div> } 
    </>
  );
}


export default Dis_v;

import React from 'react'
import { Link } from 'react-router-dom'
import {useState,useEffect} from 'react';
import {useQuery,gql} from '@apollo/client';
import useStyles from '../style';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ReactDom from 'react-dom';
import { ListSubheader, Typography } from '@material-ui/core';
const syllabus = () => {
     const [degree_name,setDegree_name]=useState('');
     const [values_name,setValue_name]=useState('');
    useEffect(() => {
  
        const params = new URLSearchParams(location.search);
        const degree = params.get("degree");
        
        // const joi='name:'+topic_e
    
        
        setDegree_name(degree)
        
       }, [])
       const Get_Degrees= gql `
        query Degree($name:String)
         {Degree(name:$name){
              name
              _id
              instructions
              {
                  values
              }
              courses
              {
                  name
              }
          }}
      `;
      const { loading, error, data } = useQuery(Get_Degrees,{
          variables:{name:degree_name}
      });
      if (loading) return 'Loading...';
      if (error) return `Error! ${error.message}`;
         console.log(data.Degree[0]["instructions"][0]["values"].replace(/'/g,'"'))
      const mike=JSON.parse(data.Degree[0]["instructions"][0]["values"].replace(/'/g,'"'));
      
      console.log(mike)
    

      const jenny =(je)=>
      {
          
          var jon=je.split(' ');
          var juj_test=/\d/.test(jon[0]);
            
          switch (juj_test)
          {
            case false:
                if(/\d/.test(jon[1])==true)
                {return(  <>
                   <ListSubheader  >OR </ListSubheader>
          <ListItem to={'/course?degree='+degree_name+'&unit='+je+'&topic=any'} component={Link} button  >
          <ListItemText primary= {je.split(jon[0]).pop()}  />
         
          </ListItem>
          
                   </> )
                   
                } 
                
                else 
                {
                   return( <ListItem   >
                   {/* <ListSubheader  >{je}</ListSubheader> */}
                   <ListItemText primary={je}  />
                   </ListItem>)
                }
                
            case true: return (
               
                    <ListItem to={'/course?degree='+degree_name+'&unit='+je+'&topic=any'} component={Link} button  >
          <ListItemText primary={je}  />
          
          </ListItem>
          
         )
         
          }
         
      }

      
    return(
        <div>
             <ListItem >
             {/* <Typography  variant="h5">{degree_name} </Typography> */}
             <ListItemText primary={degree_name}  />
             </ListItem>
            <ListItem >
           
          <ListItemText primary="Select from syllabus below : "/>
          </ListItem>
            {mike.map((k)=>(  k[Object.keys(k)[0]].map((j)=>(   
                 
                 <List >
                     
                   { jenny(j)}
      
                    </List>
)


            )))}
            </div>
            );
}
export default syllabus;

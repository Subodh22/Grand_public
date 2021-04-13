import React from 'react'
import { Link } from 'react-router-dom'
import {useState,useEffect} from 'react';
import {useQuery,gql} from '@apollo/client';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const degree_tab = () => {
    // const [degrees,setDegrees]=useState('');
    // useEffect(() => {
  
    //     const params = new URLSearchParams(location.search);
    //     const degree = params.get("degree_list");
        
    //     // const joi='name:'+topic_e
    
        
    //     setDegrees(degree)
        
    //    }, [])
       const Get_Degrees= gql `{
        Degree{
              name
              _id
              
          }
      }`;
      const { loading, error, data } = useQuery(Get_Degrees);
      if (loading) return 'Loading...';
      if (error) return `Error! ${error.message}`;
      console.log(data.Degree);

    return (
      <>
         <List>
        {data.Degree.map(ty=>(
          
        <ListItem key={ty._id} to={'/syllabus?degree='+ty.name}component={Link} button  >
          <ListItemText primary={ty.name}  />
          
          </ListItem>
       
        ))} </List>
        </>
    )
}

export default degree_tab

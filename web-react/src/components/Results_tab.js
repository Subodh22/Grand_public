import React from 'react'
import { Link } from 'react-router-dom'
import {useState,useEffect} from 'react';
import {useQuery,gql} from '@apollo/client';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Typography } from '@material-ui/core';
    
const Results_tab = () => {
    const [names,setNames] = useState('juli');
    const [topics,setTopic] = useState('');
    const [degrees,setDegree] = useState('');
    
    useEffect(() => {
  
        const params = new URLSearchParams(location.search);
        const topic_e= params.get("topic");
        const degree = params.get("degree");
        
        const joi='name:'+topic_e
    
        setTopic(joi)
        setDegree(degree)
        
       }, [])
       
       const Get_Degrees= gql `
        query topic_search($topic:String)
        {
            topic_search(topic:$topic )
            {
                name
                deg
                degree_name 
                courseunits{
                    name
                }
            }
           
        }
        
        `;
       
        const { loading, error, data } = useQuery(Get_Degrees,
            {
                variables:{topic:topics}
            },);
        if (loading) return 'Loading...';
      if (error) return `Error! ${error.message}`;
      console.log(data)
    return (
        
        <div> {(data.topic_search).length===0 ?<Typography> No results found</Typography> :<List>
           
           {data.topic_search.map(tp=>(
                <ListItem key={tp.name} to={'/course?degree='+tp.degree_name+'&unit='+tp["courseunits"][0]["name"]+'&topic='+tp.name} component={Link} button  >
                <ListItemText primary={tp.name}  secondary={tp.degree_name} />
                
                </ListItem>
           ))}
           
            </List>
}

        </div>
    )
}

export default Results_tab

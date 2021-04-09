import React from 'react'
import { Link } from 'react-router-dom'
import {useState,useEffect} from 'react';
import {useQuery,gql} from '@apollo/client';

    
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
        
        <div>
           
           {data.topic_search.map(tp=>(<Link key={tp.name} to={'/course?unit='+tp["courseunits"][0]["name"]+'&topic='+tp.name}><div >
            <h3  >{tp.name}</h3>
           <h4  > {tp.degree_name}</h4></div></Link>
           ))}
            <Link to="/">Go back</Link>
        </div>
    )
}

export default Results_tab

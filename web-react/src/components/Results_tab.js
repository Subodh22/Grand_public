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
        console.log(topic_e)
        setTopic(topic_e)
        setDegree(degree)
        
       }, [])
       
       const Get_Degrees= gql `
        query topic_search($topic:String,$degree:String)
        {
            topic_search(topic:$topic,degree:$degree)
            {
                name
                deg
                degree_name 
            }
           
        }
        
        `;
       
        const { loading, error, data } = useQuery(Get_Degrees,
            {
                variables:{topic:topics,degree:degrees}
            },);
        if (loading) return 'Loading...';
      if (error) return `Error! ${error.message}`;
      
    return (
        
        <div>
           
           {data.topic_search.map(tp=>(<h3 key={tp._id}>{tp.name}</h3>))}
            <Link to="/">Go back</Link>
        </div>
    )
}

export default Results_tab

import React from 'react'
import { Link } from 'react-router-dom'
import {useState,useEffect} from 'react';
import {useQuery,gql} from '@apollo/client';
import useStyles from '../style';
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
      
      const mike=JSON.parse(data.Degree[0]["instructions"][0]["values"]);
      console.log(mike)
      
    return (
        <div>
            {mike['0'].map((k)=>(<Link key={k} to={'/course?unit='+k+'&topic=any'}><h3>
                {k}
            </h3></Link>))}
        </div>
    )
}

export default syllabus

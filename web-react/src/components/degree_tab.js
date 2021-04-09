import React from 'react'
import { Link } from 'react-router-dom'
import {useState,useEffect} from 'react';
import {useQuery,gql} from '@apollo/client';

    

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
         
        {data.Degree.map(ty=>(<Link key={ty._id} to={'/syllabus?degree='+ty.name}><div>
        <h3 >{ty.name}</h3>
        </div></Link>))}
        </>
    )
}

export default degree_tab

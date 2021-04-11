import React from 'react'
import { Link } from 'react-router-dom'
import {useState,useEffect} from 'react';
import {useQuery,gql} from '@apollo/client';
import useStyles from '../style';
import ReactDom from 'react-dom';
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
          console.log(je);
          var jon=je.split(' ');
          var juj_test=/\d/.test(jon[0]);
          console.log(juj_test)
          switch (juj_test)
          {
            case false:
                if(/\d/.test(jon[1])==true)
                {return(  <>
                    <h3>OR</h3> <Link key={je} to={'/course?unit='+je+'&topic=any'}><h3>
                    
                   {je.split(jon[0]).pop()}
          </h3></Link>
                   </> )
                   
                } 
                
                else 
                {
                   return( <h3>
                    {je}
                    </h3> )
                }
                
            case true: return (
                <Link key={je} to={'/course?unit='+je+'&topic=any'}><h3>
          {je}
          </h3></Link>
         )
         
          }
         
      }

      
    return(
        <div>
            {mike.map((k)=>( k[Object.keys(k)[0]].map((j)=>(   
                    jenny(j)
      




            ))))}
            </div>
            );
}
export default syllabus;

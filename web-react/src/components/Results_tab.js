import React from 'react'
import { Link } from 'react-router-dom'
import {useState,useEffect} from 'react';
const Results_tab = () => {
    useEffect(() => {
  
        const params = new URLSearchParams(location.search);
        const topic = params.get("topic");
        const degree = params.get("degree");
       
        
       }, [])
    return (
        <div>
            <Link to="/">Go back</Link>
        </div>
    )
}

export default Results_tab

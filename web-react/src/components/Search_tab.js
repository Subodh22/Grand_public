import React from 'react'
import useStyles from '../style'
import TextField from '@material-ui/core/TextField';
import {useState} from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import {Grid} from '@material-ui/core';
import {useQuery,gql} from '@apollo/client';



const Search_tab=({onChange})=> {
    const classes =useStyles();
    const [state, setState] = useState('');
    const [input_na, setInput_na] = useState('');
    
    const handlechange= (e)=>{setInput_na(e.target.value); (onChange(e.target.value,state))}
    const han_ch=(e)=>{setState(e.target.value); (onChange(input_na,e.target.value))}
    
    
    const Get_Degrees= gql `{
      Degree{
            name
            _id
            
        }
    }`;
    
      const { loading, error, data } = useQuery(Get_Degrees);
      if (loading) return 'Loading...';
      if (error) return `Error! ${error.message}`;
      
    return (
        <>
         
        <form  >
        <Grid>
          <TextField 
            required
            id="outlined-secondary"
            size="medium"
            autoComplete='off'
            variant="outlined"
            color="primary"
             style={{width:500}}
             onChange={handlechange}
             />
             <FormControl variant="outlined">
             
        <Select
          native
          value={state.age}
          onChange={han_ch}
          
          inputProps={{
            name: 'age',
           
          }}
        >
          <option aria-label="None" value="any">any</option>
          {data.Degree.map(dog => (<option key={dog._id} value={dog.name}>{dog.name}</option> ))}
        </Select>
       
        </FormControl>
       </Grid>
        </form>
       
        </>
    )
}

export default Search_tab;

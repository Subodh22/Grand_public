import React from 'react'
import useStyles from '../style'
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import {Typography,AppBar,Card,CardActions,CardContent,CardMedia,CssBaseline,Grid,Toolbar,Container, Button} from '@material-ui/core';
import {useQuery,gql} from '@apollo/client';



function Search_tab() {
    const classes =useStyles();
    const Get_Degrees= gql `{
        deg_count{
            name
            od
        }
    }`
    const [state, setState] = React.useState({
    
        name: 'hai'
      });
    
      const handleChange = (event) => {
        const name = event.target.name;
        setState({
          ...state,
          [name]: event.target.value,
        });
      };
      const { loading, error, data } = useQuery(Get_Degrees)
     
    return (
        <>
           
        <form  >
        <Grid>
          <TextField 
            id="outlined-secondary"
            size="medium"
            variant="outlined"
            color="primary"
             style={{width:500}}
          /><FormControl variant="outlined">
        <Select
          

        >
          <option  value="" >any</option>
          {data.deg_count.map((c)=>(
              <option key={c.od} value={c.name}>{c.name}</option>
          )) 
          }
        </Select>
        </FormControl>
       </Grid>
        </form>
       
        </>
    )
}
export default Search_tab

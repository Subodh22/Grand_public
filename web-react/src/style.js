import {makeStyles, ThemeProvider} from '@material-ui/core/styles';


const useStyles = makeStyles((theme)=>({

    videoRow:{
              display:'flex',
              marginBottom:'30px',
              maxWidth:'700px'
            },
            imgRow:{
              objectFit:'contain',
              width:246,
              height:138
            },
            videoRow_text:
            {
              marginLeft:'14px'
            },
            videoRow_headline:{
              fontSize:'12px',
              color:'#606060'
            },
            videoRow_para:{},
    container:{
    //   backgroundColor:theme.palette.background.paper,
      padding:theme.spacing(8,0,6)
    },
    nth:{
        textDecoration:"none",
        color:"white"
    },
    buttons:
    {
        marginTop:'40px',
        alignItems:'center'
    },

    xip:
    {
        width:'100%',
        height:'60px'

    },
    // apps:
    // {
    //     height:'200px'
    // },
    degree_choose:
    {
        padding:"10px"
    },
    gogo:
    {
        align:'center'
    },
    cardGrid:{
        // padding:'20px 20px ',
        align:'center',
        maxWidth:'80%'



    },
    card:
    {
        height:'100%',
        display:'felx',
        flexDirection:'column'
    },
    cardMedia:
    {
        paddingTop:'56.25%'

    },
    cardContent:{
        flexGrow:1
    }


    
    }))
  export default useStyles;
import React,{useEffect,useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { orange } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));


  

const Home = () => {

    const [expandId, setExpandId] = useState("");
    const dispatch = useDispatch()

    const handleExpandClick = (id) => {
        if(expandId === id){
            setExpandId("")
        }
        else{
            setExpandId(id)
        }
    };

    useEffect(() => {
        dispatch({ type : 'FETCH_EMPLOYEES'})
    }, [])

    const employeeList = useSelector(state => state.employee)

    return (
        <>
        <Grid container direction = "column" spacing={3}>

        <Grid container item spacing={2} style={{marginTop:"3rem",width:"90%",margin:"auto"}} 
         justifyContent="center">

        {employeeList.map(employee=>
        <Grid item  key={employee._id} xs={3}>
        <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: orange[700] }} aria-label="recipe">
              {employee.name}
            </Avatar>
          }
          
          title={employee.name}
          subheader={`Designation : ${employee.designation}`}

          titleTypographyProps={{variant:'body1' }}
          subheaderTypographyProps={{variant:'subtitle' }}
          >
          </CardHeader>
        
        <CardMedia
          component="img"
          height="194"
          image={employee.picUrl}
          alt={employee.picName}
        />
        <CardContent>
          <Typography variant="body1" color="text.secondary">
                
                {`Status: ${employee.status}`}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <ExpandMore
            expand={expandId === employee._id}
            onClick={()=>{handleExpandClick(employee._id)}}
            aria-expanded={expandId === employee._id}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expandId === employee._id} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>{employee.department}</Typography>
          </CardContent>
        </Collapse>
        </Card>
      </Grid>
        )}
      </Grid>
      </Grid>
      </>
    )
}

export default Home
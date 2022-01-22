import React,{useEffect,useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';



const Home = () => {


    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onClickDetail = (id) =>{
      navigate(`/detail/${id}`)
    }

    useEffect(() => {
        dispatch({ type : 'FETCH_EMPLOYEES'})
    }, [])

    const employeeList = useSelector(state => state.employee)

    return (
        <>
        <Grid container direction = "column" spacing={3}>

        <Grid container item spacing={2} style={{marginTop:"3rem",width:"90%",margin:"auto"}} 
         justifyContent="center">
        {employeeList.map((employee,index)=>
        <Grid item key={employee._id} xs={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image={employee.picUrl}
                alt={employee.picName}
              />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {employee.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {employee.designation}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick = {()=>onClickDetail(index)}>Details</Button>
            </CardActions>
            </Card>
        </Grid>
        )}
      </Grid>
      </Grid>
      </>
    )
}

export default Home
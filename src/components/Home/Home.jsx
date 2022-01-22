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
import swal from 'sweetalert';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Home = () => {


    const dispatch = useDispatch()
    const navigate = useNavigate()
    const deletionStatus = useSelector(store => store.errors.employeeDeletionMessage)

    const onClickDetail = (id) =>{
      navigate(`/detail/${id}`)
    }

    const onDeleteHanlder = (id) => {
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this employee!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          dispatch({
            type : "DELETE_EMPLOYEE",
            payload : id
          })
        } else {
          swal("Your Employee Data is safe!");
        }
      });
    }

    const handleSnackClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      dispatch({type : 'CLEAR_EMPLOYEE_DELETION_MESSAGE'})
    };

    const Alert = React.forwardRef(function Alert(props, ref) {
      return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });
    

    useEffect(() => {
        dispatch({ type : 'FETCH_EMPLOYEES'})
    }, [])

    const user = useSelector(state => state.user)
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
                {user.userRole === "admin" && <Button size="small">Edit</Button>}
                {user.userRole === "admin" && <Button size="small" onClick = {()=>onDeleteHanlder(employee._id)}>Delete</Button>}
            </CardActions>
            </Card>
        </Grid>
        )}
      </Grid>
      </Grid>
      <Snackbar open={deletionStatus === "Deleted"} autoHideDuration={3000} onClose={handleSnackClose}>
                <Alert onClose={handleSnackClose} severity="success" sx={{ width: '100%' }}>
                    Employee Deleted Successfully
                </Alert>
            </Snackbar>
            <Snackbar open={deletionStatus === "Not Deleted"} autoHideDuration={3000} onClose={handleSnackClose}>
                <Alert onClose={handleSnackClose} severity="error" sx={{ width: '100%' }}>
                    Employee Could not be Deleted
                </Alert>
            </Snackbar>
      </>
    )
}

export default Home
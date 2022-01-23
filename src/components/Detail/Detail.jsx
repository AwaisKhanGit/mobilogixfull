import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  mainContainer: {
    width:"80%",
    margin:"auto",
    marginTop:"4rem"
  },
  employeeExp : {
    margin:"auto"
  }
});


const Detail = () =>{

  const { id } = useParams();
  const classes = useStyles();
  const employeeDetail = useSelector(state => state.employee[id])

  return (
      <Grid container direction="column"  className={classes.mainContainer}>
        <Grid item style={{marginBottom:"1rem"}}>
            <Typography variant="h6" >Employee Detail</Typography>
        </Grid>
        <Grid item style={{marginBottom:"1rem"}}>
          <img src={employeeDetail.picUrl} alt={employeeDetail.picName} width="250"/>
        </Grid>
          <Grid item container spacing={1} style={{marginBottom:"1rem"}}>
            <Grid item>
            <Typography variant="h5" >Name: {employeeDetail.name}</Typography>
            </Grid>
          </Grid>
          <Grid item container direction="column" style={{marginBottom:"1rem"}}>
          <Grid item>
              <Typography variant="subtitle1">
                  Designation: {employeeDetail.designation}
              </Typography>
          </Grid>
          <Grid item>
              <Typography variant="subtitle1">
                  Gross Salary: {employeeDetail.grossSalary}
              </Typography>
          </Grid>
          <Grid item>
              <Typography variant="subtitle1">
                  Net Salary: {employeeDetail.netSalary}
              </Typography>
          </Grid>
          <Grid item>
              <Typography variant="subtitle1">
                  Taxes: {employeeDetail.taxes}
              </Typography>
          </Grid>
          <Grid item>
              <Typography variant="subtitle1">
                  Empolyment Status: {employeeDetail.status}
              </Typography>
          </Grid>
          <Grid item>
              <Typography variant="subtitle1">
                  Department: {employeeDetail.department}
              </Typography>
          </Grid>
          <Grid item>
              <Typography variant="subtitle1">
                  Experiences:
              </Typography>
          </Grid>
          </Grid>
          <Grid container spacing={4}>
              {
              employeeDetail.experiences.map((exp,index)=>
              <Grid item xs={3} key={index}>
                <Paper elevation={1}>
                  <Grid container item  alignItems="center">
                  <Grid item className={classes.employeeExp}>
                  <Typography variant="subtitle1" >{exp.employeeExperience}</Typography>
                  </Grid>
                  </Grid>
                </Paper>
              </Grid>
              )}
          </Grid>
      </Grid>
  );
}

export default Detail;

import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
});


const Detail = () =>{

  const { id } = useParams();
  const classes = useStyles();
  const employeeDetail = useSelector(state => state.employee[id])

  return (
      <Grid direction="column"  >
        <Grid item style={{marginBottom:"1rem"}}>
            <Typography variant="h6" >Employee Detail</Typography>
        </Grid>
        <Grid item style={{marginBottom:"1rem"}}>
          <img src={employeeDetail.picUrl} alt={employeeDetail.picName} width="250"/>
        </Grid>
          <Grid item container spacing={1} style={{marginBottom:"1rem"}}>
            <Grid item>
            <Typography variant="h5" >{employeeDetail.name}</Typography>
            </Grid>
          </Grid>
          <Grid item container direction="column" style={{marginBottom:"1rem"}}>
          <Grid item>
              <Typography variant="subtitle1">
                  {employeeDetail.designation}
              </Typography>
          </Grid>
          <Grid item>
              <Typography variant="subtitle1">
                  And I am a Full Stack Web Developer
              </Typography>
          </Grid>
          </Grid>
          <Grid container>
              {
              employeeDetail.experiences.map((exp,index)=>
              <Grid item xs={3} key={index}>
                <Paper elevation={1} className="paper-container">
                  <Grid container item spacing={2} alignItems="center">
                  {/* <Grid item>
                  <img src={tech.iconName} alt={tech.techName} className="paper-image" />
                  </Grid> */}
                  <Grid item>
                  <Typography variant="subtitle1">{exp.employeeExperience}</Typography>
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

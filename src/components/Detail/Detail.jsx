import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper';


const Detail = () =>{

  const { id } = useParams();
  const employeeDetail = useSelector(state => state.employee[id])

  return (
      <Grid direction="column" className="main-container"  >
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

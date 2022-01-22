import React,{useState,useRef} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import FormLabel from '@mui/material/FormLabel';
import InputLabel from '@mui/material/InputLabel';
import Chip from '@mui/material/Chip';
import { makeStyles } from '@mui/styles';
import AddIcon from '@mui/icons-material/Add';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


const useStyles = makeStyles({
    imageUpload: {
        fontSize:"1rem",
        fontWeight:300,
        fontFamily: "'Montserrat', sans-serif",
        marginBottom: "2rem"
    },
    imageUploadButton:{
        marginTop : "0.5rem"
    }
  });

const AddEmployee = () => {

    const dispatch = useDispatch()
    const inputElement = useRef();
    const classes = useStyles();
    // const creationStatus = useSelector(store => store.error.employeeCreationMessage)

    const [name, setname] = useState("")
    const [designation, setdesignation] = useState("")
    const [grossSalary, setgrossSalary] = useState("")
    const [netSalary, setnetSalary] = useState("")
    const [taxes, settaxes] = useState("")
    const [role, setrole] = useState("")
    const [status, setstatus] = useState("active")
    const [department, setdepartment] = useState("Customer Care")
    const [experience, setexperience] = useState("")
    const [experiences, setexperiences] = useState([])
    const [image, setImage] = useState("")
    // const [snackOpen, setSnackOpen] = useState(false);


    // const handleClose = (event, reason) => {
    //   if (reason === 'clickaway') {
    //     return;
    //   }
    //   setSnackOpen(false);
    // };

    // const Alert = React.forwardRef(function Alert(props, ref) {
    //     return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    //   });

    const handleExperienceDelete = (id) => {
       
        const newArray = [...experiences]
        newArray.splice(id,1)
        setexperiences(newArray)
    }

    const onSubmitHandler = () => {
        const data = new FormData()
        data.append('name', name)
        data.append('designation', designation)
        data.append('grossSalary', grossSalary)
        data.append('netSalary', netSalary)
        data.append('taxes', taxes)
        data.append('role', role)
        data.append('status', status)
        data.append('department', department)
        data.append('experiences', JSON.stringify(experiences))
        data.append('image', image)

        dispatch({
            type : 'SUBMIT_EMPLOYEE_DATA',
            payload : data
        })
    }


    return (
        <>
        <Grid container item direction="column" spacing={2} alignContent="center">
            <Grid item >
                <Typography variant="h6"> Add An Employee</Typography>
            </Grid>
            <Grid item>
                <TextField
                required
                label="Name"
                value={name}
                onChange={(e)=>{setname(e.target.value)}}
                />
            </Grid>
            <Grid item>
                <TextField
                required
                label="Designation"
                value={designation}
                onChange={(e)=>{setdesignation(e.target.value)}}
                />
            </Grid>
            <Grid item>
                <FormLabel >Upload Image</FormLabel>
                <br/>
                <input type="file" id = "image-upload" required
                className = {classes.imageUploadButton}
                ref={inputElement}
                onChange={(e)=>{setImage(e.target.files[0])}}
                />
              </Grid>
            <Grid item>
                <TextField
                required
                type = "number"
                label="Gross Salary"
                value={grossSalary}
                onChange={(e)=>{setgrossSalary(e.target.value)}}
                />
            </Grid>
            <Grid item>
                <TextField
                required
                type = "number"
                label="Net Salary"
                value={netSalary}
                onChange={(e)=>{setnetSalary(e.target.value)}}
                />
            </Grid>
            <Grid item>
                <TextField
                required
                type = "number"
                label="Taxes"
                value={taxes}
                onChange={(e)=>{settaxes(e.target.value)}}
                />
            </Grid>
            <Grid item>
                <TextField
                required
                label="Role"
                value={role}
                onChange={(e)=>{setrole(e.target.value)}}
                />
            </Grid>
            <Grid item>
            <FormLabel >Status</FormLabel>
            <RadioGroup
                row
                value={status}
                onChange={(e)=>{setstatus(e.target.value)}}
            >
            <FormControlLabel value="active" control={<Radio />} label="Active" />
            <FormControlLabel value="resigned" control={<Radio />} label="Resigned" />
            <FormControlLabel value="terminated" control={<Radio />} label="Terminated" />
            </RadioGroup>
            </Grid>
            <Grid item>
            <InputLabel id="department-select-label">Department</InputLabel>
            <Select
                labelId="department-select-label"
                value={department}
                label="Department"
                onChange={(e)=>{setdepartment(e.target.value)}}
            >
                <MenuItem value="Customer Care">Customer Care</MenuItem>
                <MenuItem value="Technical">Technical</MenuItem>
                <MenuItem value="Human Resource">Human Resource</MenuItem>
            </Select>
            </Grid>
            <Grid item>
            <TextField
                required
                label="Add Experiences"
                value={experience}
                onChange={(e)=>{setexperience(e.target.value)}}
            />
            <IconButton color="primary" component="span"
            onClick = {()=>{setexperiences([...experiences,experience]);setexperience("")}}
            disabled = {!experience}>
                <AddIcon />
            </IconButton>
            </Grid>
            <Grid item>
                {experiences.map((exp,index)=><Chip key = {index} label={exp} onDelete={()=>{handleExperienceDelete(index)}}/>)}
            </Grid>
           
            <Grid item>
                <Button variant="contained" onClick = {onSubmitHandler} > Submit </Button>
            </Grid>
            </Grid>
            {/* <Alert severity="success">{creationStatus}</Alert> */}
        </>
    )
}

export default AddEmployee
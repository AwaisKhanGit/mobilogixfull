import { createTheme } from '@mui/material/styles';


export default createTheme({
    typography:{
    h2:{
        fontFamily: "'Montserrat', sans-serif",
        fontWeight:700,
        fontSize:"2.5rem",
        lineHeight:1.5
    },
    h3:{
        fontFamily: "'Montserrat', sans-serif",
        fontSize:"2.5rem"
    },
    h4:{
        fontFamily: "'Montserrat', sans-serif",
        fontWeight:700,
        fontSize:"1.75rem",
        lineHeight:1.5
    },
    h5:{
        fontWeight:400,
        fontFamily: "'Montserrat', sans-serif",
        fontSize:"1.75rem",
    },
    h6:{
        fontWeight:500,
        fontFamily: "'Montserrat', sans-serif"
    },
    subtitle1:{
        fontSize:"1.1rem",
        fontWeight:300,
        fontFamily: "'Montserrat', sans-serif"
    },
    subtitle2:{
        fontSize:"1.25rem",
        fontFamily: "'Montserrat', sans-serif",
        fontWeight:300,
        color:"white"     
    },
    body1:{
        fontSize:"1.25rem",
        fontFamily: "'Montserrat', sans-serif",
        fontWeight:300
    }
}
})
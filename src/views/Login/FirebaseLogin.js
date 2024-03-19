import { useState ,useEffect} from "react";
import React from 'react';
import axios  from 'axios';
// material-ui
import { useTheme } from '@mui/material/styles';
import './fire.css';
import {
  Box,
  Button,
  // Grid,
  TextField,
  // Typography,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton
} from '@mui/material';



// assets
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import Google from 'assets/images/social-google.svg';

// ==============================|| FIREBASE LOGIN ||============================== //


const FirebaseLogin = () => {
  const theme = useTheme();
  const [showPassword, setShowPassword] = React.useState(false);

  const [data,setData] = React.useState({
    email:'',
    password:''
  })
  let [logindetails,setLogindata]=useState([]) //let data=[]
        useEffect(()=>{
          // http://localhost:4444/api/getusers
            axios.get('http://localhost:4444/api/getusers').then((response)=>{
                setLogindata(response.data.registerdata);
            })
        },[]);
        const [errors, setErrors] = useState({
          email: false,
          password: false
        });
      
        const handleClickShowPassword = () => {
          setShowPassword(!showPassword);
        };
      
  const handleMouseDownPassword = (event) => {
    event.preventDefault();};

  
    
    const handleSubmit = (event) => {
      event.preventDefault();
      let x = 0;
      const errorsCopy = { ...errors };
      let isError = false;
  
      for (const key in data) {
        if (!data[key]) {
          errorsCopy[key] = true;
          isError = true;
        } else {
          errorsCopy[key] = false;
        }
      }
  
      setErrors(errorsCopy);
  
      if (isError) return;
  
      // Check if password and confirm password match
      
   
    for(let key in logindetails)
  {
      if(data.email === logindetails[key].email && data.password===logindetails[key].password){
        x = 1;
        break;
      }
  }    
if(x===0){
  alert('details not found')
}
else{
  localStorage.setItem('isAuthenticated', true);
        alert('Loggedin');
        window.location = 'http://localhost:3000/dashboard';
}
  };


  
  

  return (
    <>
      {/* <Grid container justifyContent="center">
        <Grid item xs={12}>
          <Button
            fullWidth={true}
            sx={{
              fontSize: { md: '1rem', xs: '0.875rem' },
              fontWeight: 500,
              backgroundColor: theme.palette.grey[50],
              color: theme.palette.grey[600],
              textTransform: 'capitalize',
              '&:hover': {
                backgroundColor: theme.palette.grey[100]
              }
            }}
            size="large"
            variant="contained"
          >
            <img
              src={Google}
              alt="google"
              width="20px"
              style={{
                marginRight: '16px',
                '@media (maxWidth:899.95px)': {
                  marginRight: '8px'
                }
              }}
            />{' '}
            Sign in with Google
          </Button>
        </Grid>
      </Grid> */}
{/* 
      <Box alignItems="center" display="flex" mt={2}>
        <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
        <Typography color="textSecondary" variant="h5" sx={{ m: theme.spacing(2) }}>
          OR
        </Typography>
        <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
      </Box> */}
      
        {/* {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => ( */}
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Email Address / Username"
              margin="normal"
              name="email"
              onChange={(e)=> setData({...data,email:e.target.value})}
              type="email"
              value={data.email}
              variant="outlined"
            />

            <FormControl sx={{ mt: theme.spacing(3), mb: theme.spacing(1) }}>
              <InputLabel htmlFor="outlined-adornment-password" style={{width:"100%"}}>Password</InputLabel>
              
                <OutlinedInput
                  fullWidth
                  id="outlined-adornment-password"
                  type={showPassword ? 'text' : 'password'}
                  value={data.password}
                  name="password"
                  onChange={(e)=> setData({...data,password:e.target.value})}
                  label="Password"
                  className="a"
                  
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        size="large"
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              
            </FormControl>
            

            

            <Box mt={2}>
              <Button color="primary" fullWidth size="large" type="submit" variant="contained">
                Log In  
              </Button>
            </Box>
          </form>
        {/* )} */}
      
    </>
  );
};

export default FirebaseLogin;
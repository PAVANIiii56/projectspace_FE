import { useState ,useEffect} from "react";
import axios from 'axios';
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Button,
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton
} from '@mui/material';

// assets
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const FirebaseRegister = () => {
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    fullname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '' // New field for confirm password
  });
  let [registrationdetails,setRegistrationdata]=useState([]) //let data=[]
        useEffect(()=>{
          // http://localhost:4444/api/getusers
            axios.get('http://localhost:4444/api/getusers').then((response)=>{
                setRegistrationdata(response.data.registerdata);
            })
        },[]);
  const [errors, setErrors] = useState({
    fullname: false,
    lastname: false,
    email: false,
    password: false,
    confirmPassword: false
  });

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

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
    if (data.password !== data.confirmPassword) {
      alert("Passwords do not match");
      setData({ ...data, confirmPassword: '' });
      return;
    }
    for(let key in registrationdetails){
            if(data.email===registrationdetails[key].email){
                x = 1;
                break
            }
        }
        if (x===1){
            alert('Already Registered')
            window.location="http://localhost:3000/"
        }
        else{
            alert("Successfully Registered")
            window.location="http://localhost:3000/"
        axios.post('http://localhost:4444/api/addusers',{data})
        .then((res) => console.log(res.data))
        .catch((error) => console.error('Error:', error));
      }


    
   
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        fullWidth
        label="Full Name"
        margin="normal"
        name="fullname"
        onChange={(e) => setData({ ...data, fullname: e.target.value })}
        type="text"
        value={data.fullname}
        variant="outlined"
        error={errors.fullname}
        helpertext={errors.fullname ? 'Required' : ''}
      />
      <TextField
        fullWidth
        label="Last Name"
        margin="normal"
        name="lastname"
        onChange={(e) => setData({ ...data, lastname: e.target.value })}
        type="text"
        value={data.lastname}
        variant="outlined"
        error={errors.lastname}
        helpertext={errors.lastname ? 'Required' : ''}
      />
      <TextField
        fullWidth
        label="Email Address / Username"
        margin="normal"
        name="email"
        onChange={(e) => setData({ ...data, email: e.target.value })}
        type="email"
        value={data.email}
        variant="outlined"
        error={errors.email}
        helpertext={errors.email ? 'Required' : ''}
      />

      <FormControl sx={{ mt: theme.spacing(3), mb: theme.spacing(1), width: '100%' }}>
        <InputLabel htmlFor="outlined-adornment-password">New Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? 'text' : 'password'}
          value={data.password}
          name="password"
          onChange={(e) => setData({ ...data, password: e.target.value })}
          label="Password"
          error={errors.password}
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

      <FormControl sx={{ mt: theme.spacing(1), mb: theme.spacing(2), width: '100%' }}>
        <InputLabel htmlFor="outlined-adornment-confirm-password">Confirm Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-confirm-password"
          type="text"
          value={data.confirmPassword}
          name="confirmPassword"
          onChange={(e) => setData({ ...data, confirmPassword: e.target.value })}
          label="Confirm Password"
          error={errors.confirmPassword}
          helpertext={errors.confirmPassword ? 'Required' : ''}
        />
      </FormControl>

      <Box mt={2}>
        <Button color="primary" fullWidth size="large" type="submit" variant="contained" 
        >
          Register
        </Button>
      </Box>
    </form>
  );
};

export default FirebaseRegister;
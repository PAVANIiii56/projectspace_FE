import React, {useState} from 'react';
import { Link } from 'react-router-dom';
// material-ui
// import { Card, CardHeader, CardContent, Divider, Grid, Typography } from '@mui/material';
import { Card, CardContent, Grid, Typography, TextField, Button, FormControl } from '@mui/material';
// project import
import Breadcrumb from 'component/Breadcrumb';
// import { gridSpacing } from 'config.js';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
import cir from './circuit.jpeg'
// import './index.css';
const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/submit-form', formData);
      console.log('Form submitted successfully');
      // Reset form fields after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  return (
    <>
      <Breadcrumb title="Contact Us">
        <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
          Home
        </Typography>
        <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
          Contact
        </Typography>
      </Breadcrumb>

      <Grid container>
        <Grid item xs={12}>
          <img src={cir} alt='' style={{ width: '100%' , height: "350px"}} />
        </Grid>
      </Grid>
      <Breadcrumb></Breadcrumb>
      <Grid container spacing={2}>
      {/* Left Div */}
      <Grid item xs={12} sm={6} md={6} lg={6}>
        <Card>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <FormControl fullWidth>
                <TextField
                  label="Name"
                  variant="outlined"
                  margin="normal"
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl fullWidth>
                <TextField
                  label="Email"
                  variant="outlined"
                  margin="normal"
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl fullWidth>
                <TextField
                  label="Subject"
                  variant="outlined"
                  margin="normal"
                  required
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl fullWidth>
                <TextField
                  label="Message"
                  variant="outlined"
                  margin="normal"
                  required
                  multiline
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </FormControl>
              <Button type="submit" variant="contained" color="primary">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </Grid>
      
      {/* Right Div */}
      <Grid item xs={12} sm={6} md={6} lg={6}>
        <Card>
          <CardContent>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3813.6571501870517!2d82.06422457413414!3d17.089415011322817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a378165aaaaaaab%3A0x481e8b12b4b80715!2sAditya%20Engineering%20College!5e0!3m2!1sen!2sin!4v1710699991137!5m2!1sen!2sin"
                title="Aditya Engineering College"
                width="100%" height="400" style={{ border: 0 }} allowFullScreen="" loading="lazy"
              ></iframe>
            </div>
          </CardContent>
        </Card>
      </Grid>
    </Grid>


      <Breadcrumb></Breadcrumb>
      <Grid container spacing={2}>
      <Grid style={{ display: 'flex'}} item xs={12} sm={6} md={4} lg={3}>
        <Card style={{width:"100%"}} >
          <CardContent>
            <LocationOnIcon />
            <Typography variant="body2" component="p" fontWeight="bold">
              Address:
            </Typography>
            <Typography variant="body2" component="p">
             ADB Road, Aditya Nagar, Surampalem, Andhra Pradesh, 533437
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid style={{ display: 'flex'}} item xs={12} sm={6} md={4} lg={3}>
        <Card style={{width:"100%"}} >
          <CardContent>
            <PhoneIcon/>
            <Typography variant="body2" component="p" fontWeight="bold">
              Phone:
            </Typography>
            <Typography variant="body2" component="p">
              <a href="tel:+91 7095076663">+91 7095076663</a>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid style={{ display: 'flex'}} item xs={12} sm={6} md={4} lg={3}>
        <Card style={{width:"100%"}} >
          <CardContent>
            <EmailIcon />
            <Typography variant="body2" component="p" fontWeight="bold">
              Email:
            </Typography>
            <Typography variant="body2" component="p">
              <a href="mailto: adityaenggcollege@gmail.com">adityacollege@gmail.com</a>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid style={{ display: 'flex'}} item xs={12} sm={6} md={4} lg={3}>
        <Card style={{width:"100%"}} >
          <CardContent>
            <LanguageIcon />
            <Typography variant="body2" component="p" fontWeight="bold">
              Website:
            </Typography>
            <Typography variant="body2" component="p">
              <Link to="http://www.aec.edu.in" target="_blank" rel="noopener noreferrer">
                www.aec.edu.in
              </Link>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
    </>
  );
};
export default Contact;
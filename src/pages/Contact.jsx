import React, { useState, useRef } from 'react';
import { Container, Typography, Box, Grid, TextField, Button, Link, Paper, useTheme, IconButton, Snackbar } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import emailjs from 'emailjs-com';
import CloseIcon from '@mui/icons-material/Close';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
// import QRCode from '../assets/images/WhatsApp-QR.jpeg';
import BusinessIcon from '@mui/icons-material/Business';


const Contact = () => {
  const theme = useTheme();
  const form = useRef();
  const [emailSent, setEmailSent] = useState(false)
  const [formData, setFormData] = useState({ from_name: '', email: '', message: '' });
  const [formErrors, setFormErrors] = useState({})

// Handling input data
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: '' });
  };


  // Input field validation
  const validateForm = () => {
    let errors = {};
    if (!formData.from_name.trim()) errors.from_name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!formData.message.trim()) errors.message = 'Message is required';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

// Function to handle submit by user
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Using EmailJS to send the form data
    emailjs.sendForm('service_xfclmid', 'template_b9ee1wh', form.current, 'yweHPbW3d9fTixms-')
      .then(() => {
        setEmailSent(true)
        setFormData({ from_name: '', email: '', message: '' }); // Reset form data
      }, () => {
  "Try after some time"
      });
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }} id="contact"> {/* Added id for smooth scrolling/linking */}
      <Typography variant="h2" gutterBottom color="primary" align="center">
        Get in Touch
      </Typography>

      <Grid container spacing={2} sx={{ mb: 2 }}>
        <Grid item xs={12} md={7}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <form onSubmit={handleSubmit} autoComplete="off" ref={form}>
              <Grid container spacing={2}>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Name"
                    name="from_name" // This should match the EmailJS template parameter
                    variant="outlined"
                    value={formData.from_name}
                    onChange={handleChange}
                    error={!!formErrors.from_name}
                    helperText={formErrors.from_name}
                    sx={{ mb: 2 }}
                  />
                  <TextField
                    fullWidth
                    label="Email"
                    name="email" // This should match the EmailJS template parameter
                    variant="outlined"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={!!formErrors.email}
                    helperText={formErrors.email}
                    sx={{ mb: 2 }}
                  />
                  <TextField
                    fullWidth
                    label="Message"
                    name="message" // This should match the EmailJS template parameter
                    variant="outlined"
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    error={!!formErrors.message}
                    helperText={formErrors.message}
                    sx={{ mb: 2 }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary">
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </form>
            <Snackbar
              open={emailSent}
              autoHideDuration={2000}
              onClose={() => setEmailSent(false)}
              message="Message sent successfully"
              action={
                <IconButton size="small" aria-label="close" color="inherit" onClick={() => setEmailSent(false)}>
                  <CloseIcon fontSize="small" />
                </IconButton>
              }
            />
          </Paper>
        </Grid>



        {/* <Grid container spacing={2} justifyContent="center"> */}
      <Grid item xs={12} md={5} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <a href="https://wa.me/message/GJ7W27SHMDBNM1" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
          <Typography variant="body1" gutterBottom sx={{ mb: 0, color: 'secondary.main' }}>
            Click here to chat with us on WhatsApp
          </Typography>
        </a>
        {/* <img src={QRCode} alt="WhatsApp QR Code" style={{ width: '100%', maxWidth: '300px', height: 'auto' }} /> */}
        <Box p={6}>
          <Typography variant="body1" gutterBottom  sx={{ mb: 0, color: 'secondary.main' }}>
            Contact Us At
          </Typography>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li style={{ marginTop: '16px', display: 'flex', alignItems: 'center' }}>
              <PhoneIcon sx={{ mr: 1,  color:"secondary.main" }} />
              <Link href="tel:+919523484666" color="inherit" underline="none">
                +91-9523484666
              </Link>
            </li>
            <li style={{ marginTop: '16px', display: 'flex', alignItems: 'center' }}>
              <EmailIcon sx={{ mr: 1,  color:"secondary.main" }} />
              <Link href="mailto:support@idhs.in" color="inherit" underline="none">
                support@idhs.in
              </Link>
            </li>
            <li style={{ marginTop: '16px', display: 'flex', alignItems: 'center' }}>
              <LocationOnIcon sx={{ mr: 1, color:"secondary.main" }} />
              <Typography variant="body1" color="text.primary">
              C/o Sri. Bedamo Devi W/o Kailash Shah, Moti Thel Ara Urban-1 Arrah Near School Of Echonom, Phuhan, Bhojpur, Arrah, Bihar, India, 802163
              </Typography>
            </li>
            <li style={{ marginTop: '16px', display: 'flex', alignItems: 'center' }}>
              <BusinessIcon sx={{ mr: 1, color:"secondary.main" }} />
              <Typography variant="body1" color="text.primary">
              Kailash Upchar (OPC) Private Limited
              </Typography>
            </li>
          </ul>
        </Box>
      </Grid>

      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Typography variant="h6" gutterBottom>
          Follow Us
        </Typography>
        <Box>
          {/* Replace # with actual links */}
          <IconButton href="https://www.facebook.com/IDHSV1" aria-label="Facebook" target="_blank" sx={{ color: theme.palette.secondary.main }}><FacebookIcon /></IconButton>
          <IconButton href="#" color="inherit" aria-label="Twitter" target="_blank" sx={{ color: theme.palette.secondary.main }}><TwitterIcon /></IconButton>
          <IconButton href="https://www.instagram.com/idhs.in/" color="inherit" aria-label="Insta" target="_blank" sx={{ color: theme.palette.secondary.main }}><InstagramIcon /></IconButton>
          <IconButton href="https://www.linkedin.com/company/99288687/admin/feed/posts/" color="inherit" aria-label="LinkedIn" target="_blank" sx={{ color: theme.palette.secondary.main }}><LinkedInIcon /></IconButton>
        </Box>
      </Grid>

      {/* Map below Form and QR Code */}

    </Container>
  );
};

export default Contact;

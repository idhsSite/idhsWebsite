import React, { useState } from 'react';
import { Container, Typography, Box, Grid, TextField, Button, Paper, useTheme, IconButton, Snackbar } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp'; // For social media icons
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import QRCode from "../assets/images/WhatsApp-QR.jpeg"; // Ensure correct path
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Contact = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [openSnackbar, setOpenSnackbar] = useState(false); // For feedback message




    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setOpenSnackbar(true);
        // Handle form submission, e.g., sending data to an API or email service
        setFormData({ name: '', email: '', message: '' }); // Reset form data after submission
    };

    return (
      <Container maxWidth="md" sx={{ py: 4 }} id="contact"> {/* Added id for smooth scrolling/linking */}
        <Typography variant="h4" gutterBottom color="primary" align="center">
            Get in Touch
        </Typography>
        <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" gutterBottom>
                            Follow Us
                        </Typography>
                        <Box>
                            {/* Replace # with actual links */}
                            <IconButton href="https://www.facebook.com/IDHSV1" aria-label="Facebook" target="_blank" sx={{ color: theme.palette.secondary.main }}><FacebookIcon /></IconButton>
                            <IconButton href="#" color="inherit"  aria-label="Twitter" target="_blank" sx={{ color: theme.palette.secondary.main }}><TwitterIcon /></IconButton>
                            <IconButton href="https://www.instagram.com/idhs.in/" color="inherit" aria-label="Insta" target="_blank" sx={{ color: theme.palette.secondary.main }}><InstagramIcon /></IconButton>
                            <IconButton href="https://www.linkedin.com/company/99288687/admin/feed/posts/" color="inherit" aria-label="LinkedIn" target="_blank" sx={{ color: theme.palette.secondary.main }}><LinkedInIcon /></IconButton>
                        </Box>
                    </Grid>
                    <Grid container spacing={2}>
        <Grid item xs={12} md={7}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <form onSubmit={handleSubmit} autoComplete="off">
              <Grid container spacing={2}>
                {Object.entries(formData).map(([key, value]) => (
                  <Grid item xs={12} key={key}>
                    <TextField
                      fullWidth
                      label={key.charAt(0).toUpperCase() + key.slice(1)}
                      name={key}
                      variant="outlined"
                      type={key === 'email' ? 'email' : 'text'}
                      value={value}
                      onChange={handleChange}
                      multiline={key === 'message'}
                      rows={key === 'message' ? 4 : 1}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: theme.palette.secondary.main, // default
                          },
                          '&:hover fieldset': {
                            borderColor: theme.palette.primary.main, // on hover
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: theme.palette.secondary.main, // on focus
                          },
                        },
                      }}
                    />
                  </Grid>
                ))}
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary">
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
        <Grid item xs={12} md={5} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <Typography variant="body1" gutterBottom>
            Scan to chat with us on WhatsApp:
          </Typography>
          <img src={QRCode} alt="WhatsApp QR Code" style={{ width: '100%', maxWidth: '300px', height: 'auto' }} />
        </Grid>
      </Grid>

      {/* Map below Form and QR Code */}
      <Box sx={{ mt: 4, width: '100%', height: '300px' }}>
        <iframe
          title="Our Location"
          // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.593255972654!2d-122.41941548468183!3d37.774929279759206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c32500001%3A0x6678eda22e8f04d0!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1612339636048!5m2!1sen!2sbd"
          src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.593255972654!2d-122.41941548468183!3d37.774929279759206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c32500001%3A0x6678eda22e8f04d0!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1612339636048!5m2!1sen!2sbd`}
          style={{ border: 0, width: '100%', height: '100%' }}
          allowFullScreen=""
          loading="lazy"
          aria-hidden="false"
          tabIndex="0"
          rel="noopener noreferrer"
        />
      </Box>
       
    </Container>
    );
};

export default Contact;

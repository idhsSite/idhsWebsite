import React from 'react';
import { Box, Grid, Typography, Link, IconButton, Container, useTheme } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    const theme = useTheme();

    return (
        <Box component="footer" sx={{ bgcolor: 'primary.main', color: 'white', py: 3 }}>
            <Container maxWidth={false}>
                <Grid container spacing={2} justifyContent="space-between">
                    <Grid item xs={12} sm={6} md={2}>
                        <Typography variant="h6" gutterBottom>
                            IDHS
                        </Typography>
                        <Typography variant="body2">
                            Revolutionizing healthcare through technology.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={2}>
                        <Typography variant="h6" gutterBottom>
                            Services
                        </Typography>
                        <Link color="inherit" variant="body2" display="block" component={NavLink} to="/idhs-app">Patient App</Link>
                        <Link
                            color="inherit"
                            variant="body2"
                            display="block"
                            href="https://account.idhs.in"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Register as Hospital
                        </Link>
                        <Link color="inherit" variant="body2" display="block" component={NavLink} to="/idhs-app">Doctor App</Link>
                    </Grid>
                    <Grid item xs={12} sm={6} md={2}>
                        <Typography variant="h6" gutterBottom>
                            Legal
                        </Typography>
                        <Link color="inherit" variant="body2" display="block" component={NavLink} to="/terms-conditions">Terms & Conditions</Link>
                        <Link color="inherit" variant="body2" display="block" component={NavLink} to="/privacy-policy">Privacy Policy</Link>
                        <Link color="inherit" variant="body2" display="block" component={NavLink} to="/refund-policy">Refund Policy</Link>
                        <Link color="inherit" variant="body2" display="block" component={NavLink} to="/CustomerGrievanceRedressalPolicy">Grievance Redressal Policy</Link>

                    </Grid>
                    <Grid item xs={12} sm={6} md={2}>
                        <Typography variant="h6" gutterBottom>
                            Follow Us
                        </Typography>
                        <Box>
                            <IconButton href="https://www.facebook.com/IDHSV1" aria-label="Facebook" sx={{ color: theme.palette.secondary.main }} target="_blank" rel="noopener noreferrer"><FacebookIcon /></IconButton>
                            <IconButton href="#" aria-label="Twitter" sx={{ color: theme.palette.secondary.main }}><TwitterIcon /></IconButton>
                            <IconButton href="https://www.instagram.com/idhs.in/" aria-label="Instagram" target="_blank" rel="noopener noreferrer" sx={{ color: theme.palette.secondary.main }}><InstagramIcon /></IconButton>
                            <IconButton href="https://www.linkedin.com/company/99288687/admin/feed/posts/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" sx={{ color: theme.palette.secondary.main }}><LinkedInIcon /></IconButton>
                        </Box>
                    </Grid>
                </Grid>
                <Typography variant="body2" align="center" sx={{ mt: 3 }}>
                    © {new Date().getFullYear()} Kailash Upchar (OPC) Private Limited. All rights reserved.
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;

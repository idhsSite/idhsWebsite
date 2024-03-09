import React from 'react';
import { Container, Typography, Box, Grid, Paper, Button , useTheme} from '@mui/material';
import { ShowMoreProvider } from '../context/ShowMore';


// Using global state management for 'See More' button from ShowMore.jsx file, and also have Local state management code below(Commented Code).
import { useShowMore } from "../context/ShowMore"


// Example cities where the company operates
// const operatingCities = [
//   'New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix',
//   'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose'
// ];

const About = () => {
  const theme = useTheme();
  const { expandedSections, toggleExpanded } = useShowMore();
 
  return (
    <ShowMoreProvider>
    <Container maxWidth="lg"n sx={{ 
      p: 2, 
      borderColor: theme.palette.secondary.main, // Use the secondary color for the border
      borderWidth: '2px', // Adjust border width as needed
      borderStyle: 'solid', // Set the border style
    }}>
      <Box my={4} id="about-introduction"b>
        <Typography variant="h2" component="h1" gutterBottom>
          About IDHS
        </Typography>
        <Typography variant="body1" paragraph>
          {expandedSections.introExpanded ? (
            `IDHS is on a mission to transform healthcare in Bihar, 
            making it simpler and more accessible for everyone. 
            Our innovative app is the key to unlocking a new world of 
            healthcare possibilities, offering users the ability to book your appointment,
            emergency services, and find nearby healthcare services with just a few taps.`
          ) : (
            `IDHS is on a mission to transform healthcare in Bihar...`
          )}
          {/* <Button onClick={toggleIntroExpanded}>{introExpanded ? 'See Less' : 'See More'}</Button> */}
          <Button onClick={() => toggleExpanded('introExpanded')}>{expandedSections.introExpanded ? 'See Less' : 'See More'}</Button>
        </Typography>
        <Typography>
          {expandedSections.intro1Expanded ? (
            `Our dedicated team, comprising healthcare professionals, tech enthusiasts, and customer support specialists, 
    works tirelessly to ensure that our platform is not just functional but user-friendly and reliable. 
    We're driven by the vision of a Bihar where quality healthcare is not a luxury but a standard, easily accessible to all, 
    regardless of their location or economic status.`
          ) : (
            `Our dedicated team, comprising healthcare professionals, tech enthusiasts, and customer support specialists, 
    works tirelessly to ensure that our platform is not just functional but user-friendly and reliable.`
          )}
          {/* <Button onClick={toggleExpanded}>{isExpanded ? 'See Less' : 'See More'}</Button> */}
          <Button onClick={() => toggleExpanded('intro1Expanded')}>{expandedSections.intro1Expanded ? 'See Less' : 'See More'}</Button>
        </Typography>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} id="about-mission">
          <Paper elevation={3}  sx={{ 
              p: 2, 
              borderColor: theme.palette.secondary.main, // Use the secondary color for the border
              borderWidth: '2px', // Adjust border width as needed
              borderStyle: 'solid', // Set the border style
            }}
        
      >
            <Typography variant="h5" component="h2" gutterBottom>
              Our Mission
            </Typography>
            <Typography variant="body1" paragraph>
              {/* {missionExpanded ? ( */}
              {expandedSections.missionExpanded ? (
                `At IDHS, we are driven by a singular mission: to revolutionize healthcare accessibility in 
    both rural and urban areas. We strive to bridge the gap, ensuring that everyone, regardless of their location, 
    has access to the care they need and deserve. In essence, IDHS is more than just an app; it's a lifeline,
    a navigator, and a companion in your healthcare journey.`
              ) : (
                `At IDHS, we are driven by a singular mission: to revolutionize healthcare accessibility in 
    both rural and urban areas. We strive to bridge the gap, ensuring that everyone, regardless of their location...`
              )}
              {/* <Button onClick={toggleMissionExpanded}>{missionExpanded ? 'See Less' : 'See More'}</Button> */}
          <Button onClick={() => toggleExpanded('missionExpanded')}>{expandedSections.missionExpanded ? 'See Less' : 'See More'}</Button>
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} id="about-vision" >
          <Paper elevation={3} sx={{ 
              p: 2, 
              borderColor: theme.palette.secondary.main, // Use the secondary color for the border
              borderWidth: '2px', // Adjust border width as needed
              borderStyle: 'solid', // Set the border style
            }}
        >
            <Typography variant="h5" component="h2" gutterBottom>
              Our Vision
            </Typography>
            <Typography variant="body1" paragraph>
              {/* {visionExpanded  ? ( */}
              {expandedSections.visionExpanded  ? (
                `At IDHS, we're dedicated to revolutionizing healthcare accessibility nationwide. Our vision is ambitious: 
        to extend our cutting-edge healthcare solutions and unmatched customer support to every community across the country,
        ensuring that no matter your location, premium healthcare services are always within reach. Our goal is for IDHS to become
        a household name, recognized for bridging healthcare gaps with innovative technology and creating a seamless healthcare experience for all.`
              ) : (
                `At IDHS, we're dedicated to revolutionizing healthcare accessibility nationwide. Our vision is ambitious: 
        to extend our cutting-edge healthcare solutions and unmatched customer support to every community across the country...`
              )}
              {/* <Button onClick={toggleVisionExpanded}>{visionExpanded ? 'See Less' : 'See More'}</Button> */}
          <Button onClick={() => toggleExpanded('visionExpanded')}>{expandedSections.visionExpanded ? 'See Less' : 'See More'}</Button>

            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} id="why-choose-us">
          <Paper elevation={3}  sx={{ 
              p: 2, 
              borderColor: theme.palette.secondary.main, // Use the secondary color for the border
              borderWidth: '2px', // Adjust border width as needed
              borderStyle: 'solid', // Set the border style
            }}
        >
            <Typography variant="h5" component="h2" gutterBottom>
              Why Choose Us?
            </Typography>
            <Typography variant="body1" paragraph>
              {/* {chooseUsExpanded ? ( */}
              {expandedSections.chooseUsExpanded ? (
                `Choosing IDHS is like picking the best path for your health journey. We make sure that everyone, no matter where you are, can easily find and use
        top-notch healthcare services. With our IDHS app, getting medical help is as simple as a click, making us a favorite for care that’s both smart and
        straightforward. Our app is packed with the latest tech to connect you with doctors and keep your health records safe and easy to reach. Plus, 
        our team is always ready to help with any questions, making your healthcare experience smooth and stress-free. We’re all about quality, safety, and trust, ensuring you get the best care.
        IDHS is not just about healthcare; it’s about making it better and more reachable for everyone, everywhere. Join us and see how we’re making healthcare easy, safe, and connected for all.`
              ) : (
                `Choosing IDHS is like picking the best path for your health journey. We make sure that everyone, no matter where you are, can easily find and use
        top-notch healthcare services.`
              )}
              {/* <Button onClick={toggleChooseUsExpanded}>{chooseUsExpanded ? 'See Less' : 'See More'}</Button> */}
          <Button onClick={() => toggleExpanded('chooseUsExpanded')}>{expandedSections.chooseUsExpanded ? 'See Less' : 'See More'}</Button>

            </Typography>
            <Button variant="contained" color="primary">Download app</Button>
          </Paper>
        </Grid>
      </Grid>

      {/* Consider adding additional sections like Testimonials, Achievements, etc., with relevant semantic markup */}
    </Container>
    </ShowMoreProvider>
  );
};

export default About;

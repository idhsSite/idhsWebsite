import { createTheme , responsiveFontSizes} from '@mui/material/styles';

let theme = createTheme({
    palette: {
        primary: {
            main: '#7258BC',
        },
        secondary: {
            main: '#00B29A',
        },
    },
    typography: {
        h1: {
            fontSize: '2.5rem', // You can adjust this base size
        },
        h2: {
            fontSize: '1.75rem', // Base size for h2
        },
        h3: {
            fontSize: '1.5rem', // Base size for h3
        },
        h4:{
           fontSize: '1rem'
        },
        h5: {
            fontSize: '0.75rem', // Base size for h3
        },
    },
    // Other customizations...
});

// Use responsiveFontSizes to adjust typography responsively
theme = responsiveFontSizes(theme);

export default theme;

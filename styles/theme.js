import {createTheme} from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#ff5757",
        },
        common: {
            white: "#fafafa",
            black: "#333"
        },
    },

    breakpoints: {
        values: {
            xs: 650,
            sm: 750,
            md: 900,
            lg: 1000,
            xl: 1400,
        },
    },
});

export default theme;
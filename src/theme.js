import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        mode: "dark", // or "light"

        text: {
            primary: "#EAE0D5",   // your main text color
            secondary: "#A68A64", // optional
        },

        background: {
            default: "#0B0B0B", // your black
            paper: "#12100E",   // slightly brownish black
        },

        primary: {
            main: "#8B5E3C", // subtle brown tone
        },
    },
});

export default theme;
import { Box, Typography } from "@mui/material";
const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: (t) => t.palette.background.paper,
                padding: "1.5rem",
                textAlign: "center",
                mt: "auto",
            }}
        >
            <Typography component="div" sx={{ color: (t) => t.palette.text.secondary }}>
                <Box
                    display="flex"
                    flexDirection={{ xs: "column", sm: "row" }}
                    alignItems="center"
                    justifyContent={{ xs: "center", sm: "space-between" }}
                    gap={{ xs: 0.75, sm: 2 }}
                    sx={{ width: "100%", maxWidth: 980, mx: "auto" }}
                >
                    <Box>Developed by Bereket Tsegaye.</Box>
                    <Box>© {new Date().getFullYear()} All rights reserved.</Box>
                </Box>
            </Typography>
        </Box>
    );
}

export default Footer;
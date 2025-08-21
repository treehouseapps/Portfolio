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
                <Box display={'inline-flex'} justifyContent={'space-between'}>
                    <Box>
                        Developed by Bereket Tsegaye .
                    </Box>
                    <Box>  © {new Date().getFullYear()} All rights reserved.</Box>
                </Box>
            </Typography>
        </Box>
    );
}

export default Footer;
import { Box, Typography } from "@mui/material";
const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: "#f5f5f5",
                padding: "1.5rem",
                textAlign: "center",
                mt: "auto",
            }}
        >
            <Typography component="div" color="textSecondary">
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
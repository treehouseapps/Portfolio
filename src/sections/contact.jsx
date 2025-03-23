import { Typography, Box } from "@mui/material";

const Contact = () => {
    return (
        <Box height="max-content" p={2}>
            <Typography
                id="contact"
                variant="h3"
                mt={4}
                fontFamily="Quicksand"
                fontWeight="900"
                width="100%"
                color="#212529"
                p={2}
                align="center"
                data-aos="fade-right"
                sx={{ boxShadow: 2, fontSize: { xs: "24px", sm: "32px" } }}
            >
                Find Me On
            </Typography>

            <Box
                display="grid"
                gap={5}
                m={{ xs: 0.5, sm: 5 }}
                gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr" }}
                alignItems="center"
            >
                <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                    <Box m={4} p={4} textAlign="center">
                        <Typography variant="h4" fontFamily="Quicksand" fontWeight="bolder">
                            Get In Touch
                        </Typography>
                        <Typography variant="h5" fontFamily="Quicksand">
                            I am looking forward to starting a project with you! Feel free to reach out...
                        </Typography>
                    </Box>

                    <Box display="flex" gap={3} flexWrap="wrap" justifyContent="center">
                        {[
                            { img: "icons/linkedin.svg", label: "LinkedIn", link: "https://www.linkedin.com/in/berekettsegaye/" },
                            { img: "icons/gmail.svg", label: "Gmail", link: "https://mail.google.com/mail/?view=cm&fs=1&to=bbekijunior1@gmail.com&su=Greeting&body=Hi%20There!" },
                            { img: "icons/githubblack.svg", label: "GitHub", link: "https://github.com/treehouseapps" }
                        ].map((item, index) => (
                            <a key={index} href={item.link} style={{ textDecoration: "none" }}>
                                <Box
                                    boxShadow="0px 0px 5px 0px #333"
                                    p={2}
                                    borderRadius={5}
                                    data-aos="zoom-in"
                                    display="flex"
                                    flexDirection="column"
                                    alignItems="center"
                                    sx={{
                                        transition: "all 0.3s ease-in-out",
                                        "&:hover": {
                                            transform: "scale(1.1)",
                                            boxShadow: "0px 0px 15px 0px #333",
                                            cursor: "pointer",
                                        },
                                    }}
                                >
                                    <img src={item.img} alt={item.label} width="80" />
                                    <Typography fontFamily="Quicksand" color="black">
                                        {item.label}
                                    </Typography>
                                </Box>
                            </a>
                        ))}
                    </Box>
                </Box>

                <Box mt={{ xs: 3, md: 5 }} display="flex" justifyContent="center">
                    <img src="./computer.jpg" alt="person" style={{ width: "100%", maxWidth: "400px", borderRadius: "10px" }} />
                </Box>
            </Box>
        </Box>
    );
};

export default Contact;

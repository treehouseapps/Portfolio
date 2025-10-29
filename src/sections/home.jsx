import { Typography, Box } from "@mui/material";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useTheme } from "@mui/material/styles";

const Home = () => {
    const theme = useTheme();
    const [text] = useTypewriter({
        words: [
            "Full-Stack Web Developer",
            "MERN Stack Specialist",
            "Creating Scalable Web Solutions",
        ],
        loop: true, // Loop the texts
        typeSpeed: 100, // Typing speed
        deleteSpeed: 50, // Deleting speed
        delaySpeed: 1000, // Delay between texts
    });
    return (
        <>
            <Typography id="home" variant="h3" color="white" sx={{ visibility: 'hidden' }}></Typography>
            <Box
                id="home"
                height="max-content"
                display="grid"
                gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr" }} // Stack in xs, side by side in md
                gap={3}
                sx={{
                    padding: { xs: "1rem", sm: "2rem", md: "2rem 5rem" },
                    textAlign: { xs: "center", md: "left" }, // Center text on small screens
                }}
            >
                <div data-aos="fade-right">
                    <Box>
                        <Box
                            p={{ xs: 2, sm: 5 }}
                            display="flex"
                            flexDirection="column"
                            alignItems={{ xs: "center", md: "flex-start" }}
                            justifyContent="center"
                            sx={{ color: (t) => t.palette.text.primary }}
                            mt={{ xs: 5, md: 10 }}
                        >
                            <Typography
                                fontFamily="Quicksand"
                                fontWeight={500}
                                sx={{
                                    fontSize: { xs: "24px", sm: "40px" },
                                    padding: { xs: "0.5rem", sm: "1rem" },
                                }}
                            >
                                Hi There!
                            </Typography>
                            <Typography
                                fontFamily="Quicksand"
                                fontSize={{ xs: "32px", sm: "50px" }}
                                display="inline-flex"
                                alignItems="center"
                                fontWeight={500}
                            >
                                I'm
                                <span
                                    style={{
                                        fontSize: "inherit",
                                        fontWeight: "bolder",
                                        marginLeft: "8px",
                                        fontFamily: "Quicksand",
                                    }}
                                >
                                    Bereket Tsegaye
                                </span>
                            </Typography>
                            <Typography
                                fontFamily="Quicksand"
                                fontSize={{ xs: "20px", sm: "30px" }}
                                mt={3}
                                mb={3}
                                fontWeight={500}
                            >
                                {text}
                                <Cursor cursorColor={theme.palette.text.primary} />
                            </Typography>
                            <Box
                                display="flex"
                                justifyContent={{ xs: "center", md: "flex-start" }}
                                gap={2}
                                sx={{ marginTop: 2 }}
                            >
                                <img src="icons/vscodeblack.svg" style={{ filter: "var(--icon-filter)" }} alt="icon" width="40px" data-aos="fade-right" />
                                <img src="icons/githubblack.svg" style={{ filter: "var(--icon-filter)" }} alt="icon" width="40px" data-aos="fade-right" />
                                <img src="icons/vercelblack.svg" style={{ filter: "var(--icon-filter)" }} alt="icon" width="40px" data-aos="fade-right" />
                            </Box>
                        </Box>
                    </Box>
                </div>
                <div data-aos="fade-left">
                    <Box display="flex" justifyContent="center">
                        <img src="person.svg" alt="Person.svg" width="100%" style={{ maxWidth: "500px" }} />
                    </Box>
                </div>
            </Box>
        </>
    );
};

export default Home;

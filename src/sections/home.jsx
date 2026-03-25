import { Typography, Box, Grid, Link } from "@mui/material";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useTheme } from "@mui/material/styles";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailRoundedIcon from "@mui/icons-material/MailRounded";

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

    const quickLinks = [
        { label: "Resume", href: "#", Icon: DescriptionRoundedIcon },
        { label: "GitHub", href: "https://github.com/treehouseapps", Icon: GitHubIcon },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/berekettsegaye/", Icon: LinkedInIcon },
        { label: "Gmail", href: "https://mail.google.com/mail/?view=cm&fs=1&to=bbekijunior1@gmail.com&su=Greeting&body=Hi%20There!", Icon: MailRoundedIcon },
    ];
    return (
        <>
            <Box>
                <Typography id="home" variant="h3" color="white" sx={{ visibility: 'hidden' }}></Typography>

                <Box
                    sx={{
                        display: { xs: "none", md: "flex" },
                        position: "relative",
                        left: "50%",
                        transform: "translateX(-50%)",
                        px: 2,
                        py: 0.75,
                        mt: "7rem",
                        maxWidth: "fit-content",
                        borderRadius: "999px",
                        color: "white",
                        overflow: "hidden",
                        zIndex: 1,

                        // inner content style
                        alignItems: "center",
                        gap: 1,

                        backgroundColor: "rgba(255,255,255,0.06)",
                        backdropFilter: "blur(10px)",
                        WebkitBackdropFilter: "blur(10px)",

                        // 🔥 animated border
                        "&::before": {
                            content: '""',
                            position: "absolute",
                            inset: 0,
                            borderRadius: "999px",
                            padding: "1px", // thickness of border
                            background:
                                "linear-gradient(270deg, #4FACFE, #00F2FE, #4FACFE)",
                            backgroundSize: "400% 400%",
                            animation: "glowMove 6s linear infinite",
                            WebkitMask:
                                "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                            WebkitMaskComposite: "xor",
                            maskComposite: "exclude",
                        },

                        "@keyframes glowMove": {
                            "0%": { backgroundPosition: "0% 50%" },
                            "100%": { backgroundPosition: "400% 50%" },
                        },
                    }}
                >
                    Available for Work
                </Box>
                <Box
                    id="home"
                    height="max-content"
                    display="grid"
                    gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr" }} // Stack in xs, side by side in md
                    gap={3}
                    sx={{
                        padding: { xs: "1rem", sm: "2rem", md: "0rem 5rem" },
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
                                            background: "linear-gradient(90deg, #4FACFE, #00F2FE)",
                                            WebkitBackgroundClip: "text",
                                            WebkitTextFillColor: "transparent",
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
                                    <Grid container spacing={1.25} sx={{ maxWidth: 520 }}>
                                        {quickLinks.map((item) => (
                                            <Grid key={item.label} item xs={6} md={3}>
                                                <Box
                                                    component={Link}
                                                    href={item.href}
                                                    underline="none"
                                                    color={theme.palette.text.secondary}
                                                    borderColor={theme.palette.text.secondary}
                                                    sx={{
                                                        display: "inline-flex",
                                                        width: "100%",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        gap: 1,
                                                        py: 1,
                                                        px: 1.25,
                                                        borderRadius: "999px",
                                                        border: "1px solid",
                                                        backgroundColor: "background.paper",
                                                        backdropFilter: "blur(10px)",
                                                        WebkitBackdropFilter: "blur(10px)",
                                                        transition: "transform 150ms ease, background-color 150ms ease",
                                                        "&:hover": {
                                                            transform: "translateY(-1px)",
                                                            backgroundColor: "action.hover",
                                                        },
                                                    }}
                                                >
                                                    <item.Icon sx={{ fontSize: 18 }} />
                                                    <Typography
                                                        component="span"
                                                        sx={{
                                                            fontFamily: "Quicksand",
                                                            fontWeight: 700,
                                                            fontSize: 14,
                                                            letterSpacing: 0.2,
                                                        }}
                                                    >
                                                        {item.label}
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Box>
                            </Box>
                        </Box>
                    </div >
                    <div data-aos="fade-left">
                        <Box display="flex" justifyContent="center">
                            <img src="person.svg" alt="Person.svg" width="65%" style={{ maxWidth: "500px" }} />
                        </Box>
                    </div>
                </Box >
            </Box>
        </>
    );
};

export default Home;
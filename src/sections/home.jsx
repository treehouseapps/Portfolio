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
                <Typography id="home" variant="h3" sx={{ visibility: "hidden" }} />

                <Box
                    sx={{
                        display: "flex",
                        position: "relative",
                        mx: "auto",
                        px: 2,
                        py: 0.75,
                        mt: { xs: "3rem", md: "7rem" },
                        maxWidth: "fit-content",
                        borderRadius: "999px",
                        color: "white",
                        overflow: "hidden",
                        zIndex: 1,
                        alignItems: "center",
                        gap: 1,
                        backgroundColor: "rgba(255,255,255,0.06)",
                        backdropFilter: "blur(10px)",
                        WebkitBackdropFilter: "blur(10px)",

                        "&::before": {
                            content: '""',
                            position: "absolute",
                            inset: 0,
                            borderRadius: "999px",
                            padding: "1px",
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
                    display="grid"
                    gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr" }}
                    gap={{ xs: 2, md: 3 }}
                    sx={{
                        px: { xs: 2, sm: 4, md: 8 },
                        py: { xs: 3, md: 6 },
                        textAlign: { xs: "center", md: "left" },
                    }}
                >
                    <div data-aos="fade-right">
                        <Box
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
                                    fontSize: { xs: "20px", sm: "28px", md: "36px" },
                                    mb: 1,
                                }}
                            >
                                Hi There!
                            </Typography>

                            <Typography
                                fontFamily="Quicksand"
                                fontWeight={500}
                                sx={{
                                    fontSize: { xs: "28px", sm: "40px", md: "50px" },
                                    display: "flex",
                                    flexWrap: "wrap",
                                    justifyContent: { xs: "center", md: "flex-start" },
                                    alignItems: "center",
                                }}
                            >
                                I'm
                                <Box
                                    component="span"
                                    sx={{
                                        ml: 1,
                                        fontWeight: "bold",
                                        background:
                                            "linear-gradient(90deg, #4FACFE, #00F2FE)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                    }}
                                >
                                    Bereket Tsegaye
                                </Box>
                            </Typography>

                            <Typography
                                fontFamily="Quicksand"
                                fontWeight={500}
                                sx={{
                                    fontSize: { xs: "18px", sm: "22px", md: "28px" },
                                    mt: 2,
                                    mb: 3,
                                }}
                            >
                                {text}
                                <Cursor cursorColor={theme.palette.text.primary} />
                            </Typography>

                            <Grid
                                container
                                spacing={1.5}
                                sx={{
                                    maxWidth: { xs: "100%", sm: 520 },
                                    justifyContent: { xs: "center", md: "flex-start" },
                                }}
                            >
                                {quickLinks.map((item) => (
                                    <Grid key={item.label} item xs={6} sm={4} md={3}>
                                        <Box
                                            component={Link}
                                            href={item.href}
                                            underline="none"
                                            sx={{
                                                display: "flex",
                                                width: "100%",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                gap: 1,
                                                py: 1,
                                                px: 1.25,
                                                borderRadius: "999px",
                                                border: "1px solid",
                                                color: "text.secondary",
                                                borderColor: "text.secondary",
                                                backgroundColor: "background.paper",
                                                backdropFilter: "blur(10px)",
                                                transition:
                                                    "transform 150ms ease, background-color 150ms ease",
                                                "&:hover": {
                                                    transform: "translateY(-2px)",
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
                                                    fontSize: 13,
                                                }}
                                            >
                                                {item.label}
                                            </Typography>
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </div>

                    <div data-aos="fade-left">
                        <Box display="flex" justifyContent="center">
                            <Box
                                component="img"
                                src="person.svg"
                                alt="Person"
                                sx={{
                                    width: { xs: "80%", sm: "60%", md: "100%" },
                                    maxWidth: "500px",
                                }}
                            />
                        </Box>
                    </div>
                </Box>
            </Box>
        </>
    );
};

export default Home;
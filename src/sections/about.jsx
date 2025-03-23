import { Typography, Box } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const About = () => {
    return (
        <Box height="max-content" px={{ xs: 2, sm: 4 }}>
            <Typography id="about" variant="h3" color="white" >.</Typography>
            <Typography
                variant="h4"
                component="div"
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
                What I Do
            </Typography>
            <Box
                display="grid"
                gridTemplateColumns={{ xs: "1fr", md: "2.5fr 3fr" }}
                gap={3}
                mt={3}
            >
                {/* Left Side - Image */}
                <Box
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    display="flex"
                    justifyContent="center"
                >
                    <img
                        src="website-development.jpg"
                        alt="Web Development"
                        width="100%"
                        style={{ maxWidth: "500px", borderRadius: "8px" }}
                    />
                </Box>

                {/* Right Side - Text Content */}
                <Box
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    sx={{
                        backgroundColor: "white",
                        borderRadius: 2,
                        padding: 3,
                        maxWidth: "800px",
                        margin: "auto",
                    }}
                >
                    <Typography
                        fontFamily="Quicksand"
                        fontSize={{ xs: "16px", sm: "18px" }}
                        sx={{ color: "#212529", lineHeight: 1.6, fontWeight: 400 }}
                        component="div" // ✅ FIX: Ensures no <p> wraps <Box>
                    >
                        <b>Full-Stack Web Developer</b> skilled in building modern, high-performance web applications.
                    </Typography>

                    <Typography component="div" sx={{ mt: 2 }}>
                        <b>Technical Skills:</b>
                        <Box>
                            {[
                                { text: "MERN Stack & Next.js – Proficient in MongoDB, Express, React, and Node.js." },
                                { text: "Frontend – Building responsive UIs with Material UI & Bootstrap." },
                                { text: "Backend – Developing secure, scalable APIs with MongoDB & MySQL." },
                                { text: "Authentication – Implementing bcrypt, JWT, and OAuth." },
                                { text: "API Integration – Experience with third-party services (weather, movie, etc.)." }
                            ].map((skill, index) => (
                                <Box key={index} display="flex" alignItems="center" mb={{ xs: '10px' }} >
                                    <ArrowRightIcon />
                                    <Typography component="span">{skill.text}</Typography>
                                </Box>
                            ))}
                        </Box>
                    </Typography>

                    <Typography component="div" sx={{ mt: 2 }}>
                        <b>Soft Skills:</b>
                        <Box>
                            {[
                                "Strong communication, teamwork, and problem-solving.",
                                "Passionate about continuous learning and tech advancements.",
                                "Dedicated to creating efficient & user-friendly websites."
                            ].map((skill, index) => (
                                <Box key={index} display="flex" alignItems="center" mb={{ xs: '10px' }}>
                                    <ArrowRightIcon />
                                    <Typography component="span">{skill}</Typography>
                                </Box>
                            ))}
                        </Box>
                    </Typography>
                </Box>
            </Box>
        </Box >
    );
};

export default About;

import { Box, Typography, Avatar, IconButton, Chip, Stack, Paper, Divider } from "@mui/material";
import { Email, LinkedIn, GitHub, Twitter, LocationOn, WorkOutline } from "@mui/icons-material"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CodeIcon from "@mui/icons-material/Code";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import SecurityIcon from "@mui/icons-material/Security";

const techSkills = [
    { icon: <CodeIcon color="primary" />, text: "MERN Stack & Next.js – MongoDB, Express, React, Node.js" },
    { icon: <DesignServicesIcon color="secondary" />, text: "Frontend – Responsive UIs with Material UI & Bootstrap" },
    { icon: <SecurityIcon color="error" />, text: "Backend – Secure APIs, JWT, bcrypt, OAuth" },
    { icon: <CodeIcon color="primary" />, text: "API Integration – Third-party services (weather, movies, etc.)" },
];

const softSkills = [
    "Strong communication, teamwork, and problem-solving",
    "Passionate about continuous learning and tech advancements",
    "Dedicated to creating efficient & user-friendly websites",
];

const socialLinks = [
    { icon: Email, link: "https://mail.google.com/mail/?view=cm&fs=1&to=bbekijunior1@gmail.com&su=Greeting&body=Hi%20There!" },
    { icon: LinkedIn, link: "https://www.linkedin.com/in/berekettsegaye/" },
    { icon: GitHub, link: "https://github.com/treehouseapps" },
    { icon: Twitter, link: "https://twitter.com/@Bereket54467899" },
];

const About = () => {
    return (
        <Box px={{ xs: 2, sm: 6 }} py={6} id="about">

            <Typography
                variant="h4"
                textAlign="center"
                fontWeight={900}
                fontFamily="Quicksand"
                sx={{
                    background: "linear-gradient(90deg, #4FACFE, #00F2FE)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    mt: 7,
                }}
            >
                What I Do
            </Typography>
            <Box
                fontFamily="Quicksand"
                backgroundColor={(t) => t.palette.background.paper}
                borderRadius="50px"
                letterSpacing={1}
                p={{ xs: "0rem 1rem", sm: "0.5rem 5rem" }}
                data-aos="zoom-out"
                fontStyle="italic"
                sx={{ color: (t) => t.palette.text.secondary }}
                fontSize={{ xs: "16px", sm: "20px" }}
                mx={{ xs: 0, md: "5rem" }}
                textAlign="center">
                <Typography
                    fontWeight={600}
                    fontSize={{ xs: 18, sm: 20 }}
                    fontFamily="Quicksand"
                >
                    I’m a Full-Stack Web Developer passionate about creating scalable, efficient, and user-friendly web applications.
                    I turn ideas into real-world solutions while continuously learning new technologies.
                </Typography>
            </Box>

            <Box
                display="grid"
                gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr" }} // Stack in xs, side by side in md
                gap={10}
                sx={{
                    padding: { xs: "1rem", sm: "2rem", md: "0rem 5rem" },
                    textAlign: { xs: "center", md: "left" }, // Center text on small screens
                }}
            >

                <Box item xs={12} md={6} padding={{ xs: 0, sm: 2, md: 5 }}>
                    <Box
                        sx={{
                            width: "100%",
                            maxWidth: 380,
                            bgcolor: '#121212',
                            borderRadius: 6,
                            p: { xs: 2.5, sm: 4 },
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            color: 'white'
                        }}
                    >
                        <Box
                            sx={{
                                p: '3px',
                                background: 'linear-gradient(45deg, #4FACFE 0%, #00F2FE 100%)',
                                borderRadius: '50%',
                                position: 'relative',
                                mb: 3
                            }}
                        >
                            <Avatar
                                src="your-image.jpg"
                                sx={{ width: 140, height: 140, border: '4px solid #121212' }}
                            />
                            <Box
                                sx={{
                                    width: 16,
                                    height: 16,
                                    bgcolor: '#00c853',
                                    borderRadius: '50%',
                                    position: 'absolute',
                                    bottom: 15,
                                    right: 15,
                                    border: '3px solid #121212'
                                }}
                            />
                        </Box>

                        <Typography variant="h5" fontWeight="bold" gutterBottom>
                            Bereket Tsegaye
                        </Typography>

                        <Chip
                            icon={<WorkOutline sx={{ fontSize: '1rem !important', color: '#4FC3F7 !important' }} />}
                            label="Full-Stack Web Developer"
                            size="small"
                            sx={{ bgcolor: '#1e1e1e', color: '#999', mb: 1, border: '1px solid #333' }}
                        />

                        <Stack direction="row" spacing={0.5} alignItems="center" sx={{ color: '#666', mb: 3 }}>
                            <LocationOn sx={{ fontSize: '0.9rem' }} />
                            <Typography variant="body2">Addis Ababa, Ethiopia</Typography>
                        </Stack>

                        <Stack direction="row" spacing={1} mb={4}>
                            {socialLinks.map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <IconButton
                                        key={index}
                                        component="a"
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        sx={{
                                            border: '1px solid #333',
                                            color: '#888',
                                            '&:hover': { color: 'white', borderColor: '#555' }
                                        }}
                                    >
                                        <Icon fontSize="small" />
                                    </IconButton>
                                );
                            })}
                        </Stack>

                        <Divider sx={{ width: '100%', borderColor: 'rgba(255, 255, 255, 0.05)', mb: 4 }} />

                        <Typography
                            variant="caption"
                            sx={{ letterSpacing: 2, color: '#666', fontWeight: 'bold', mb: 2, textTransform: 'uppercase' }}
                        >
                            Core Expertise
                        </Typography>

                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
                            <Chip label="React" sx={{ color: 'white', bgcolor: 'rgba(255,255,255,0.05)', borderRadius: '20px' }} />
                            <Chip label="Next.js" sx={{ color: 'white', bgcolor: 'rgba(255,255,255,0.05)', borderRadius: '20px' }} />
                            <Chip label="TypeScript" sx={{ color: 'white', bgcolor: 'rgba(255,255,255,0.05)', borderRadius: '20px' }} />
                            <Chip label="Node.js" sx={{ color: 'white', bgcolor: 'rgba(255,255,255,0.05)', borderRadius: '20px' }} />
                            <Chip label="MongoDB" sx={{ color: 'white', bgcolor: 'rgba(255,255,255,0.05)', borderRadius: '20px' }} />
                            <Chip label="Express" sx={{ color: 'white', bgcolor: 'rgba(255,255,255,0.05)', borderRadius: '20px' }} />
                            <Chip label="Material UI" sx={{ color: 'white', bgcolor: 'rgba(255,255,255,0.05)', borderRadius: '20px' }} />
                            <Chip label="Tailwind CSS" sx={{ color: 'white', bgcolor: 'rgba(255,255,255,0.05)', borderRadius: '20px' }} />
                            <Chip label="AWS" sx={{ color: 'white', bgcolor: 'rgba(255,255,255,0.05)', borderRadius: '20px' }} />
                        </Box>
                    </Box>
                </Box>
                <Box item xs={12} md={6}>
                    <Box display="flex" flexDirection="column" gap={4}>
                        <Box>
                            <Typography fontWeight={700} mb={2}>Technical Skills</Typography>
                            <Box display="flex" flexDirection="column" gap={2}>
                                {techSkills.map((skill, i) => (
                                    <Paper
                                        key={i}
                                        elevation={2}
                                        sx={{
                                            p: 2,
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 2,
                                            borderRadius: 2,
                                            bgcolor: (t) => t.palette.background.paper,
                                        }}
                                    >
                                        {skill.icon}
                                        <Typography>{skill.text}</Typography>
                                    </Paper>
                                ))}
                            </Box>
                        </Box>

                        {/* Soft Skills */}
                        <Box>
                            <Typography fontWeight={700} mb={2}>Soft Skills</Typography>
                            <Box display="flex" flexDirection="column" gap={1}>
                                {softSkills.map((skill, i) => (
                                    <Box key={i} display="flex" alignItems="center" gap={1}>
                                        <ArrowForwardIosIcon fontSize="small" color="action" />
                                        <Typography>{skill}</Typography>
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    </Box>
                </Box>

            </Box>
        </Box >
    );
};

export default About;
import { Typography, Button, Box, useMediaQuery } from "@mui/material";
import WebIcon from '@mui/icons-material/Web';
import GitHubIcon from '@mui/icons-material/GitHub';

const Projects = () => {
    const isSmallScreen = useMediaQuery('(max-width:600px)');
    const isMediumScreen = useMediaQuery('(max-width:960px)');

    const projects = [
        {
            id: 1, name: 'Full Stack E-Commerce Web Application', img: './ecommerce.png',
            desc: 'A responsive E-Commerce app built with React and Material UI. Users can browse products, manage a cart, and checkout seamlessly. It features real-time updates, smooth navigation, and a clean, user-friendly design.',
            link: 'https://th-ecommerce.vercel.app/',
            github: 'https://github.com/treehouseapps/E-commerce',
            featured: true
        },
        {
            id: 2, name: 'Online Bus Ticket Booking System', img: './bus.png',
            desc: 'An online bus ticket booking system for searching routes, booking seats, and managing reservations. It includes a secure admin dashboard for handling buses, routes, users, and feedback — all built for a smooth, user-friendly experience.',
            link: 'https://th-bus-booking.vercel.app/',
            github: 'https://github.com/treehouseapps/Bus-booking'
        },
        {
            id: 3, name: 'URL Shortener', img: './ttrim.png',
            desc: 'A simple and efficient URL shortener that converts long links into short, shareable URLs. It ensures quick redirection, easy tracking, and a clean user experience.',
            link: 'https://ttrim.vercel.app',
            github: 'https://github.com/treehouseapps/shortner'
        },
        {
            id: 4, name: 'Employee Management System', img: './employee.png',
            desc: 'A simple web app for managing employee records efficiently. It allows adding, viewing, updating, and deleting employee data with a clean and user-friendly interface.',
            link: 'https://th-employee-management-system.vercel.app/',
            github: 'https://github.com/treehouseapps/Employee-Management-System'
        },
        {
            id: 5, name: 'Weather App', img: './weather.png',
            desc: 'A simple weather app built with React that lets users search for the current weather by city name.The app is responsive and provides a smooth user experience across devices.',
            link: 'https://th-weather-app.vercel.app/',
            github: 'https://github.com/treehouseapps/weather_app'
        },
        {
            id: 6, name: 'Notebook App', img: './note.png',
            desc: 'A simple and organized web app for creating, editing, and managing notes. It offers a clean interface for easy note-taking and retrieval.',
            link: 'https://wallnote-frontend.vercel.app/',
            github: 'https://github.com/treehouseapps/wallnote-frontend'
        },
        {
            id: 7, name: 'Authentication System', img: './auth.png',
            desc: 'A secure and user-friendly login and registration system for seamless access control. It ensures smooth user authentication and data protection.',
            link: 'https://secure-user-frontend.vercel.app/',
            github: 'https://github.com/treehouseapps/PRODIGY_FS_01'
        }
    ];

    return (
        <Box height='max-content'>
            <Typography id='projects' variant="h3" sx={{ color: (t) => t.palette.text.primary }}>.</Typography>
            <Typography
                variant="h3" mt={4}
                fontFamily={'Quicksand'}
                fontWeight='900'
                width='100%'
                p={2} align="center"
                data-aos="fade-right"
                sx={{ boxShadow: 2, fontSize: { xs: "24px", sm: "32px" }, color: (t) => t.palette.text.primary }}>
                My Recent Projects
            </Typography>

            {/* Featured Project */}
            {projects.filter(project => project.featured).map((featuredProject) => (
                <Box
                    key={featuredProject.id}
                    sx={{
                        maxWidth: '1000px',
                        margin: '0 auto 4rem auto',
                        padding: { xs: 2, md: 4 },
                    }}
                >
                    <Typography
                        variant="h4"
                        fontFamily="Quicksand"
                        fontWeight="700"
                        textAlign="center"
                        mb={1}
                        sx={{ color: (t) => t.palette.text.primary }}
                        data-aos="fade-down"
                    >
                        Spotlight ✨
                    </Typography>

                    <Box
                        sx={{
                            backgroundColor: (t) => t.palette.background.paper,
                            borderRadius: 4,
                            boxShadow: 6,
                            overflow: 'hidden',
                            transition: 'all 0.3s ease-in-out',
                            '&:hover': {
                                transform: 'translateY(-8px)',
                                boxShadow: 12,
                            }
                        }}
                        data-aos="zoom-in"
                    >
                        <Box
                            display="grid"
                            gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr" }}
                            gap={3}
                            alignItems="center"
                        >
                            {/* Project Image */}
                            <Box
                                sx={{
                                    position: 'relative',
                                    overflow: 'hidden',
                                    height: { xs: '250px', md: '350px' },
                                    backgroundColor: (t) => t.palette.action.hover,
                                }}
                            >
                                <img
                                    src={featuredProject.img}
                                    alt={featuredProject.name}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        objectPosition: 'center',
                                    }}
                                />
                            </Box>

                            {/* Project Details */}
                            <Box p={3}>
                                <Typography
                                    variant="h4"
                                    fontFamily="Quicksand"
                                    fontWeight="700"
                                    mb={2}
                                    sx={{ color: (t) => t.palette.text.primary }}
                                >
                                    {featuredProject.name}
                                </Typography>

                                <Typography
                                    variant="body1"
                                    fontFamily="Quicksand"
                                    mb={3}
                                    sx={{
                                        color: (t) => t.palette.text.secondary,
                                        lineHeight: 1.7,
                                        fontSize: '1.1rem'
                                    }}
                                >
                                    {featuredProject.desc}
                                </Typography>

                                <Box
                                    display="flex"
                                    gap={2}
                                    flexWrap="wrap"
                                    justifyContent={{ xs: "center", md: "flex-start" }}
                                >
                                    <Button
                                        variant="contained"
                                        size="large"
                                        href={featuredProject.github}
                                        target="_blank"
                                        sx={{
                                            backgroundColor: (t) => t.palette.primary.main,
                                            '&:hover': {
                                                backgroundColor: (t) => t.palette.primary.dark,
                                            }
                                        }}
                                    >
                                        <GitHubIcon sx={{ mr: 1 }} />
                                        View Code
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        size="large"
                                        href={featuredProject.link}
                                        target="_blank"
                                        sx={{
                                            borderColor: (t) => t.palette.primary.main,
                                            color: (t) => t.palette.primary.main,
                                            '&:hover': {
                                                borderColor: (t) => t.palette.primary.dark,
                                                backgroundColor: (t) => t.palette.primary.main,
                                                color: (t) => t.palette.background.paper,
                                            }
                                        }}
                                    >
                                        <WebIcon sx={{ mr: 1 }} />
                                        Live Demo
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            ))}

            <Box display='flex' alignItems='center' justifyContent='center'>

                <Box display='grid'
                    gridTemplateColumns={isSmallScreen ? '1fr' : isMediumScreen ? '1fr 1fr' : '1fr 1fr 1fr'}
                    gap={5}
                    p={isSmallScreen ? 2 : 8}
                >
                    {projects.filter(project => !project.featured).map((item) => (
                        <Box
                            key={item.id}
                            p={3}
                            boxShadow={(t) => t.palette.boxShadow}
                            backgroundColor={(t) => t.palette.background.paper}
                            zIndex={1}
                            borderRadius={3}
                            display="flex"
                            flexDirection="column"
                            justifyContent="center"
                            alignItems="center"
                            sx={{
                                maxWidth: isSmallScreen ? '100%' : '18rem',
                                margin: 'auto',
                                transition: 'all 0.5s ease-in-out',
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                    boxShadow: '0px 8px 20px #333',
                                    cursor: 'pointer',
                                }
                            }}
                        >
                            <img
                                src={item.img}
                                data-aos="zoom-in"
                                alt=""
                                style={{
                                    border: '1px solid',
                                    borderRadius: '5px',
                                    width: '100%',
                                    marginBottom: '1rem',
                                }}
                            />
                            <Typography
                                variant="h5"
                                data-aos="fade-in"
                                fontFamily='Quicksand'
                                fontWeight='bolder'
                                textAlign='center'
                            >{item.name}</Typography>
                            <Typography
                                fontFamily='Quicksand'
                                data-aos='zoom-out'
                                textAlign='center'
                            >{item.desc}</Typography>
                            <Box display='inline-flex' m={1}
                                justifyContent='space-around'
                                gap={4}
                                flexWrap='wrap'
                            >
                                <a href={item.github} data-aos="zoom-in">
                                    <Button variant="outlined">
                                        <Typography
                                            fontFamily='Quicksand'
                                            display='inline-flex' alignItems='center' gap={1}
                                        ><GitHubIcon />Github </Typography>
                                    </Button>
                                </a>
                                <a href={item.link} data-aos="zoom-in">
                                    <Button variant="outlined">
                                        <Typography
                                            fontFamily='Quicksand'
                                            display='inline-flex' alignItems='center' gap={1}
                                        ><WebIcon /> Demo </Typography>
                                    </Button>
                                </a>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
}

export default Projects;

import { Typography, Button, Box } from "@mui/material";
import WebIcon from "@mui/icons-material/Web";
import GitHubIcon from "@mui/icons-material/GitHub";
import CodeIcon from "@mui/icons-material/Code";
import JavascriptIcon from "@mui/icons-material/Javascript";
import HtmlIcon from "@mui/icons-material/Html";
import CssIcon from "@mui/icons-material/Css";
import ReactIcon from "@mui/icons-material/Code";
const Projects = () => {
    const projects = [
        {
            id: 1,
            name: 'Sami Rental System',
            subName: 'Car Rental System',
            img: './carrent.png',
            desc: 'A full-stack car rental platform with role-based access, enabling users to book vehicles, admins to manage operations, and super admins to oversee analytics and system control.',
            about: [
                'Role-based system with User, Admin, and Super Admin dashboards',
                'End-to-end reservation system with document upload and PDF generation',
                'Advanced admin analytics with automated background job processing'
            ],
            link: 'https://github.com/treehouseapps/car-rental-v2',
            github: 'https://github.com/treehouseapps/car-rental-v2'
        },
        {
            id: 2,
            name: 'Random Movies',
            subName: 'Movie Explorer',
            img: './movie.png',
            desc: 'A responsive React web app for exploring and searching movies with detailed information.',
            about: [
                'Browse and search movies',
                'View detailed movie information',
                'Responsive and intuitive interface'
            ],
            link: 'https://movie-swart-gamma.vercel.app/',
            github: 'https://github.com/treehouseapps/movie',
        },
        {
            id: 3,
            name: 'TH-Auth',
            subName: 'Auth NPM Module',
            img: './module.png',
            desc: 'An easy-to-use NPM module providing login and register forms with full callback support, ready for integration.',
            about: [
                'User authentication and login management',
                'Secure session handling',
                'Easy integration for web applications'
            ],
            link: 'https://www.npmjs.com/package/treehouse-login',
            github: 'https://github.com/treehouseapps/',
        },
        {
            id: 4,
            name: 'TH-Emp',
            subName: 'Employee Management System',
            img: './employee.png',
            desc: 'Manage employee records with CRUD operations in a clean UI.',
            about: [
                'Add, edit, delete employee records',
                'Search and filter employee data',
                'Clean and organized dashboard'
            ],
            link: 'https://th-employee-management-system.vercel.app/',
            github: 'https://github.com/treehouseapps/Employee-Management-System'
        },
        {
            id: 5,
            name: 'Shopify',
            subName: 'E-Commerce Web Application',
            img: './ecommerce.png',
            desc: 'A responsive E-Commerce app with cart, checkout, and modern UI.',
            about: [
                'Full shopping cart and checkout',
                'Product listing and search',
                'Modern, responsive user interface'
            ],
            link: 'https://th-ecommerce.vercel.app/',
            github: 'https://github.com/treehouseapps/E-commerce',
        },
        {
            id: 6,
            name: 'Kelal Guzo',
            subName: 'Bus Ticket Booking System',
            img: './bus.png',
            desc: 'A full booking system with admin dashboard and reservation management.',
            about: [
                'Ticket booking and reservation management',
                'Admin dashboard with controls',
                'Real-time availability and updates'
            ],
            link: 'https://th-bus-booking.vercel.app/',
            github: 'https://github.com/treehouseapps/Bus-booking'
        },
        {
            id: 7,
            name: 'TH-Trim',
            subName: 'URL Shortener',
            img: './ttrim.png',
            desc: 'A fast and simple URL shortener with tracking features.',
            about: [
                'Shorten URLs quickly',
                'Track click statistics',
                'Simple and fast interface'
            ],
            link: 'https://ttrim.vercel.app',
            github: 'https://github.com/treehouseapps/shortner'
        },
        {
            id: 8,
            name: 'Wall-Note',
            subName: 'Notebook App',
            img: './note.png',
            desc: 'Create and manage notes with a clean and minimal interface.',
            about: [
                'Create, edit, delete notes',
                'Organize notes efficiently',
                'Minimal and user-friendly interface'
            ],
            link: 'https://wallnote-frontend.vercel.app/',
            github: 'https://github.com/treehouseapps/wallnote-frontend'
        },
        {
            id: 9,
            name: 'TH-Login',
            subName: 'Authentication System',
            img: './auth.png',
            desc: 'Secure login/register system with authentication handling.',
            about: [
                'Secure login and registration',
                'Handle authentication and sessions',
                'Ready for integration into apps'
            ],
            link: 'https://secure-user-frontend.vercel.app/',
            github: 'https://github.com/treehouseapps/PRODIGY_FS_01'
        }
    ];
    const items = [
        { label: "JavaScript", Icon: JavascriptIcon },
        { label: "HTML", Icon: HtmlIcon },
        { label: "CSS", Icon: CssIcon },
        { label: "React", Icon: ReactIcon },
        { label: "GitHub", Icon: GitHubIcon },
    ];
    return (
        <Box id="projects" px={{ xs: 2, md: 8 }} pt={10}>

            <Typography
                textAlign="center"
                variant="h4"
                fontWeight="900"
                fontFamily="Quicksand"
                sx={{
                    background: "linear-gradient(90deg, #4FACFE, #00F2FE)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    mb: 8,
                }}
            >
                My Projects
            </Typography>

            <Box display="flex" flexDirection="column" gap={10}>
                {projects.map((project, index) => {
                    const isReverse = index % 2 !== 0;

                    return (
                        <Box
                            key={project.id}
                            display="grid"
                            gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr" }}
                            gap={4}
                            alignItems="center"
                        >

                            <Box
                                sx={{
                                    order: { xs: 1, md: isReverse ? 2 : 1 },
                                    flex: 1, // take equal width
                                    borderRadius: "12px",
                                    overflow: "hidden",
                                }}
                            >
                                <img
                                    src={project.img}
                                    alt={project.name}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover", // ensures full coverage
                                    }}
                                />
                            </Box>

                            <Box
                                sx={{
                                    order: { xs: 2, md: isReverse ? 1 : 2 },
                                    flex: 1, // equal width with image box
                                    p: { xs: 3, md: 5 },
                                    borderRadius: "10px",
                                    backgroundColor: "rgba(255,255,255,0.06)",
                                    backdropFilter: "blur(10px)",
                                    WebkitBackdropFilter: "blur(10px)",
                                }}
                            >
                                <Typography variant="h4" fontWeight="800" mb={1}>
                                    {project.name}
                                </Typography>
                                <Typography fontWeight="800" fontFamily={'Quicksand'} mb={1}>
                                    {project.subName}
                                </Typography>
                                <Box
                                    sx={{
                                        width: 100,
                                        height: 3,
                                        background: 'linear-gradient(90deg, #4FACFE, #00F2FE)',
                                        borderRadius: 2,
                                        my: 2,
                                    }}
                                />
                                <Typography
                                    sx={{ color: "rgba(255,255,255,0.8)", mb: 3, lineHeight: 1.7 }}
                                >
                                    {project.desc}
                                </Typography>

                                <Box display="grid" alignItems="center" gap={1} mb={1}>
                                    {project.about.map((item, index) => (
                                        <Box display="flex" gap={1} key={index}>
                                            <Typography sx={{ color: "rgba(79,172,254,0.6)", fontWeight: "bold" }}>
                                                <CodeIcon />
                                            </Typography>
                                            <Typography sx={{ color: "rgba(255,255,255,0.85)" }} fontSize="small">
                                                {item}
                                            </Typography>
                                        </Box>
                                    ))}
                                </Box>

                                <Box display="flex" mt={2} gap={2} flexWrap="wrap">
                                    <Button
                                        variant="contained"
                                        href={project.link}
                                        target="_blank"
                                        sx={{ borderRadius: "10px" }}
                                    >
                                        <WebIcon sx={{ mr: 1 }} />
                                        Live
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        href={project.github}
                                        target="_blank"
                                        sx={{ borderRadius: "999px" }}
                                    >
                                        <GitHubIcon sx={{ mr: 1 }} />
                                        Code
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    );
                })}
            </Box>

            <Box sx={{ mt: { xs: 4, md: 6 }, display: "flex", justifyContent: "center" }}>
                <Button
                    href="https://github.com/treehouseapps"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="text"
                    sx={{
                        borderRadius: "999px",
                        color: "rgba(255,255,255,0.9)",
                        border: "1px solid rgba(255,255,255,0.25)",
                        px: { xs: 2, sm: 3 },
                        py: 1,
                        "&:hover": { borderColor: "rgba(79,172,254,0.9)", backgroundColor: "rgba(255,255,255,0.04)" },
                        textTransform: "none",
                    }}
                >
                    <GitHubIcon sx={{ mr: 1 }} />
                    More on GitHub
                </Button>
            </Box>
        </Box >
    );
};

export default Projects;
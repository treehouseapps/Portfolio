import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useState, useEffect } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { alpha, useTheme } from "@mui/material/styles";
import { useColorMode } from "../context/ThemeContext";


const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const colorMode = useColorMode();
    const theme = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { id: 1, text: "Home", link: "#home" },
        { id: 2, text: "About", link: "#about" },
        { id: 3, text: "Skills", link: "#skills" },
        { id: 4, text: "Projects", link: "#projects" },
        { id: 5, text: "Contact", link: "#contact" }
    ];
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <Box>
            <AppBar position="fixed" sx={{
                backgroundColor: scrolled
                    ? alpha(theme.palette.background.paper, 0.95)
                    : "transparent",
                color: theme.palette.text.primary,
                boxShadow: scrolled ? 1 : 'none'
            }}>
                <Toolbar sx={{
                    border: 'none',
                    padding: '1rem 2rem',
                    margin: '0 1rem',
                    color: theme.palette.text.primary,
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>

                    <a href="#home" style={{ textDecoration: 'none' }}>
                        <Typography variant="h4" sx={{
                            flexGrow: 1,
                            fontFamily: '"Grechen Fuemen", serif',
                            fontWeight: 700,
                            fontSize: '4rem',
                            fontStyle: 'normal',
                            color: theme.palette.text.primary,
                            marginRight: '2rem',
                        }}>
                            Beki Jr
                        </Typography>
                    </a>

                    <Box sx={{
                        display: { xs: "none", md: "flex" },
                        justifyContent: 'space-around',
                        marginRight: '0rem', width: '60%',
                    }}>
                        {navItems.map((item) => (
                            <Button key={item.text}
                                data-aos="fade-down"
                                data-aos-duration={item.id + '000'}
                                sx={{
                                    position: "relative",
                                    display: "inline-block",
                                    paddingBottom: '0',
                                    marginLeft: '0rem',
                                    "&::after": {
                                        content: '""',
                                        position: "absolute",
                                        left: 0,
                                        bottom: -2,
                                        width: "0%",
                                        borderRadius: '1rem',
                                        height: "4px",
                                        backgroundColor: theme.palette.primary.main,
                                        transition: "width .5s ease-in-out",
                                    },
                                    "&:hover::after": {
                                        width: "100%",
                                        backgroundColor: theme.palette.primary.main
                                    },
                                }}
                                color="inherit"
                                href={item.link}>

                                <Typography
                                    sx={{
                                        fontSize: "large",
                                        fontFamily: "Quicksand",
                                        fontWeight: "bolder",
                                    }}
                                >
                                    {item.text}
                                </Typography>
                            </Button>
                        ))}
                    </Box>

                    {/* Mobile Menu Icon */}
                    <IconButton
                        color="inherit"
                        edge="end"
                        onClick={handleDrawerToggle}
                        sx={{ display: { md: "none" } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <IconButton onClick={colorMode.toggle}>
                        {theme.palette.mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
                    </IconButton>
                </Toolbar>
            </AppBar>

            <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}
            >
                <Box pt={3}
                    display={'inline-block'}
                    placeItems={'right'}
                    width='12rem'
                    gridTemplateColumns={'1fr'}>
                    {navItems.map((item) => (
                        <Button key={item.text}
                            sx={{ color: theme.palette.text.primary }}
                            href={item.link}
                            onClick={handleDrawerToggle}>

                            <Typography
                                sx={{
                                    fontSize: "large",
                                    fontFamily: "Quicksand",
                                    fontWeight: "bolder",
                                    padding: '0.5rem 2rem',
                                    paddingLeft: '0.5rem',
                                    display: 'inline-flex',
                                    alignItems: 'center'
                                }}> <ArrowRightIcon /> {item.text}
                            </Typography>
                        </Button>
                    ))}
                </Box>
            </Drawer >
        </Box >
    );
}

export default Navbar;
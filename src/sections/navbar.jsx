import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import HandymanRoundedIcon from "@mui/icons-material/HandymanRounded";
import WorkspacesRoundedIcon from "@mui/icons-material/WorkspacesRounded";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import { useState, useEffect } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { alpha, useTheme } from "@mui/material/styles";
// import { useColorMode } from "../context/ThemeContext";


const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    // const colorMode = useColorMode();
    const theme = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { id: 1, text: "Home", link: "#home", Icon: HomeRoundedIcon },
        { id: 2, text: "About", link: "#about", Icon: InfoRoundedIcon },
        { id: 3, text: "Skills", link: "#skills", Icon: HandymanRoundedIcon },
        { id: 4, text: "Projects", link: "#projects", Icon: WorkspacesRoundedIcon },
        { id: 5, text: "Contact", link: "#contact", Icon: MailRoundedIcon }
    ];
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <Box>
            <AppBar position="fixed" sx={{
                color: theme.palette.text.primary,
                boxShadow: 'none',
                backgroundColor: 'transparent',
                backgroundImage: 'none',
                mt: '1rem'
            }}>
                <Toolbar sx={{
                    border: 'none',
                    padding: '1rem 2rem',
                    margin: '0 1rem',
                    color: theme.palette.text.primary,
                    display: 'flex',
                    justifyContent: 'space-between',
                    position: 'relative'
                }}>

                    <a href="#home" style={{ textDecoration: 'none' }}>
                        <Typography variant="h4" sx={{
                            flexGrow: 1,
                            fontFamily: '"Grechen Fuemen", serif',
                            fontWeight: 700,
                            fontSize: '2rem',
                            fontStyle: 'normal',
                            color: "whitesmoke",
                            marginRight: '2rem',
                        }}>
                            Beki Jr
                        </Typography>
                    </a>

                    <Box
                        sx={{
                            display: { xs: "none", md: "flex" },
                            position: "absolute",
                            left: "50%",
                            transform: "translateX(-50%)",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "0.75rem",
                            px: 2,
                            py: 0.75,
                            borderRadius: "999px",
                            border: "1px solid rgba(255,255,255,0.35)",
                            backgroundColor: "rgba(255,255,255,0.06)",
                            backdropFilter: "blur(10px)",
                            WebkitBackdropFilter: "blur(10px)",
                        }}
                    >
                        {navItems.map((item) => (
                            <Button
                                key={item.text}
                                data-aos="fade-down"
                                data-aos-duration={item.id + '000'}
                                sx={{
                                    color: "whitesmoke",
                                    textTransform: "none",
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
                                        height: "3px",
                                        backgroundColor: "rgba(255,255,255,0.9)",
                                        transition: "width .35s ease-in-out",
                                    },
                                    "&:hover::after": {
                                        width: "100%",
                                    },
                                }}
                                href={item.link}
                            >
                                <Typography
                                    sx={{
                                        color: "whitesmoke",
                                        fontSize: "medium",
                                        fontFamily: "Quicksand",
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: 0.75,
                                    }}
                                >
                                    <item.Icon sx={{ fontSize: "1.05em" }} />
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
                    {/* <IconButton onClick={colorMode.toggle}>
                        {theme.palette.mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
                    </IconButton> */}
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
                            sx={{ color: "whitesmoke", textTransform: "none" }}
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
                                }}>
                                <ArrowRightIcon />
                                <Box component="span" sx={{ display: "inline-flex", alignItems: "center", gap: 0.75, ml: 0.5 }}>
                                    <item.Icon sx={{ fontSize: "1.05em" }} />
                                    {item.text}
                                </Box>
                            </Typography>
                        </Button>
                    ))}
                </Box>
            </Drawer >
        </Box >
    );
}

export default Navbar;
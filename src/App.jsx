import { Box, useTheme } from "@mui/material";
import { useEffect } from "react";
import './style.css'

import Navbar from "./sections/navbar";
import Home from "./sections/home";
import About from "./sections/about";
import Projects from "./sections/projects";
import Skills from "./sections/skills";
import Contact from "./sections/contact";
import Footer from "./sections/footer";

function App() {

  useEffect(() => {
    // Initialize AOS when the component mounts
    AOS.init({ duration: 1000, once: true });
  }, []);


  return (
    <>
      <Box sx={{
        fontFamily: 'Quicksand',
        height: 'max-content', display: 'flex',
        flexDirection: 'column', overflowX: 'hidden',
      }}>
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </Box >
    </>
  );
}

export default App;
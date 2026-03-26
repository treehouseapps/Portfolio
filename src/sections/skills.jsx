import { Typography, Box, Tooltip } from "@mui/material";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";

// Icons
import JavascriptIcon from "@mui/icons-material/Javascript";
import HtmlIcon from "@mui/icons-material/Html";
import CssIcon from "@mui/icons-material/Css";
import StorageIcon from "@mui/icons-material/Storage";
import CloudIcon from "@mui/icons-material/Cloud";
import SecurityIcon from "@mui/icons-material/Security";
import ApiIcon from "@mui/icons-material/Api";
import TerminalIcon from "@mui/icons-material/Terminal";
import CodeIcon from "@mui/icons-material/Code";
import BuildIcon from "@mui/icons-material/Build";

const Skills = () => {
    const skills = [
        { name: "React", icon: <CodeIcon />, color: "#61DBFB", mern: true, desc: "Building dynamic UIs" },
        { name: "Next.js", icon: <CodeIcon />, color: "#ffffff", desc: "SSR & full-stack React" },
        { name: "JavaScript", icon: <JavascriptIcon />, color: "#f7df1e", desc: "Core programming language" },
        { name: "TypeScript", icon: <CodeIcon />, color: "#3178c6", desc: "Typed JavaScript" },
        { name: "HTML5", icon: <HtmlIcon />, color: "#e34c26" },
        { name: "CSS3", icon: <CssIcon />, color: "#264de4" },
        { name: "Tailwind", icon: <CodeIcon />, color: "#38bdf8" },
        { name: "Bootstrap", icon: <CodeIcon />, color: "#7952b3" },
        { name: "MUI", icon: <BuildIcon />, color: "#00bcd4" },

        { name: "Node.js", icon: <TerminalIcon />, color: "#68a063", mern: true },
        { name: "Express", icon: <ApiIcon />, color: "#aaaaaa", mern: true },
        { name: "PHP", icon: <CodeIcon />, color: "#777bb3" },
        { name: "REST API", icon: <ApiIcon />, color: "#ff9800" },
        { name: "JWT", icon: <SecurityIcon />, color: "#ff5722" },

        { name: "MongoDB", icon: <StorageIcon />, color: "#4db33d", mern: true },
        { name: "MySQL", icon: <StorageIcon />, color: "#00758f" },
        { name: "PostgreSQL", icon: <StorageIcon />, color: "#336791" },

        { name: "Git", icon: <BuildIcon />, color: "#f1502f" },
        { name: "GitHub", icon: <BuildIcon />, color: "#ffffff" },
        { name: "VS Code", icon: <CodeIcon />, color: "#007acc" },
        { name: "Vite", icon: <CodeIcon />, color: "#646cff" },
        { name: "Postman", icon: <ApiIcon />, color: "#ff6c37" },
        { name: "npm", icon: <TerminalIcon />, color: "#cb3837" },

        { name: "Vercel", icon: <CloudIcon />, color: "#ffffff" },
        { name: "Netlify", icon: <CloudIcon />, color: "#00c7b7" },
        { name: "Render", icon: <CloudIcon />, color: "#46e3b7" },

        { name: "Auth", icon: <SecurityIcon />, color: "#ff5252" },
        { name: "bcrypt", icon: <SecurityIcon />, color: "#ff7043" },
        { name: "Validation", icon: <SecurityIcon />, color: "#ffa726" },
    ];

    return (
        <Box id="skills" px={{ xs: 2, sm: 6 }} py={8}>

            < Typography
                fontFamily="Quicksand"
                fontWeight="900"
                textAlign="center"
                variant="h4"
                mt={5}
                sx={{
                    background: "linear-gradient(90deg, #4FACFE, #00F2FE)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                }}
            >
                <QuestionMarkIcon /> Skills & Technologies
            </Typography >

            < Typography
                mt={2}
                sx={{ maxWidth: 900, mx: "auto", px: { xs: 1, sm: 2 } }}
                textAlign="center"
                fontStyle="italic"
                color={(t) => t.palette.text.secondary}
            >
                Using modern technologies and reliable tools, I build scalable, performant applications.
            </Typography >

            < Box
                mt={6}
                display="flex"
                flexWrap="wrap"
                justifyContent="center"
                gap={2}
            >
                {
                    skills.map((skill, index) => (
                        <Tooltip title={skill.desc || skill.name} arrow key={index}>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 1,
                                    px: 2,
                                    py: 1,
                                    borderRadius: "999px",
                                    border: skill.mern
                                        ? "1px solid rgba(97,219,251,0.6)"
                                        : "1px solid rgba(255,255,255,0.12)",
                                    background: skill.mern
                                        ? "rgba(97,219,251,0.08)"
                                        : "rgba(255,255,255,0.04)",
                                    backdropFilter: "blur(10px)",
                                    transition: "0.3s",
                                    "& svg": {
                                        color: skill.color,
                                    },
                                    "&:hover": {
                                        transform: "translateY(-4px) scale(1.05)",
                                        boxShadow: "0px 8px 20px rgba(0,0,0,0.4)",
                                        border: "1px solid rgba(79,172,254,0.6)",
                                    },
                                }}
                            >
                                {skill.icon}
                                <Typography fontSize="14px">{skill.name}</Typography>
                            </Box>
                        </Tooltip>
                    ))
                }
            </Box >
        </Box >
    );
};

export default Skills;
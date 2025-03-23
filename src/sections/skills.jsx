import { Typography, Box } from "@mui/material";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";

const Skills = () => {
    const skills = [
        "react.svg", "javascript.svg", "express.svg", "node.svg",
        "mongo.svg", "html.svg", "css.svg", "bootstrap.svg",
        "mysql.svg", "git.svg", "githubblack.svg", "tailwind.svg",
        "nextjs.svg", "php.svg",
    ];

    const tools = ["vscode.svg", "vercelblack.svg", "vite.svg", "git.svg"];

    return (
        <>
            {/* Skills Section */}
            <Box height="max-content">
                <Typography id="skills" variant="h3" color="white">.</Typography>
                <Typography
                    variant="h4"
                    mt={4}
                    fontFamily="Quicksand"
                    fontWeight="900"
                    color="#212529"
                    p={2}
                    align="center"
                    data-aos="fade-right"
                    sx={{ boxShadow: 2, fontSize: { xs: "24px", sm: "32px" } }}
                >
                    <QuestionMarkIcon fontSize="large" /> Skills and Technologies
                </Typography>

                <Typography
                    fontFamily="Quicksand"
                    backgroundColor="whitesmoke"
                    borderRadius="50px"
                    letterSpacing={1}
                    p={{ xs: "0rem 1rem", sm: "0.5rem 5rem" }}
                    data-aos="zoom-out"
                    fontStyle="italic"
                    color="#6C757D"
                    fontSize={{ xs: "16px", sm: "20px" }}
                    mx={{ xs: "0", sm: "10rem" }}
                    textAlign="center"
                    mt={2}
                >
                    Using a combination of cutting-edge technologies and reliable open-source software,
                    I build user-focused, performant apps and websites for all devices.
                </Typography>

                <Box display="flex" justifyContent="center" p={5}>
                    <Box
                        width="100%"
                        maxWidth="800px"
                        display="grid"
                        gridTemplateColumns={{
                            xs: "repeat(3, 1fr)",
                            sm: "repeat(4, 1fr)",
                            md: "repeat(5, 1fr)",
                        }}
                        gap={3}
                        justifyContent="center"
                    >
                        {skills.map((item, index) => (
                            <Box
                                key={index}
                                width={{ xs: 100, sm: 120 }}
                                height={{ xs: 90, sm: 100 }}
                                data-aos="fade-up"
                                data-aos-duration={(index + 1) * 200}
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                boxShadow="0px 4px 10px #333"
                                sx={{
                                    backgroundColor: "transparent",
                                    borderRadius: "8px",
                                    transition: "all 0.5s ease-in-out",
                                    "&:hover": {
                                        transform: "scale(1.1)",
                                        boxShadow: "0px 8px 20px #333",
                                        cursor: "pointer",
                                    },
                                }}
                            >
                                <img src={`icons/${item}`} alt={item} width={80} />
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>

            {/* Tools Section */}
            <Box height="max-content">
                <Typography
                    id="tools"
                    variant="h4"
                    mt={4}
                    fontFamily="Quicksand"
                    fontWeight="900"
                    color="#212529"
                    p={2}
                    align="center"
                    data-aos="fade-right"
                    sx={{ boxShadow: 2, fontSize: { xs: "24px", sm: "32px" } }}
                >
                    Tools I Use
                </Typography>

                <Typography
                    fontFamily="Quicksand"
                    backgroundColor="whitesmoke"
                    borderRadius="50px"
                    letterSpacing={1}
                    p={{ xs: "0rem 1rem", sm: "0.5rem 5rem" }}
                    data-aos="zoom-out"
                    fontStyle="italic"
                    color="#6C757D"
                    fontSize={{ xs: "16px", sm: "20px" }}
                    mx={{ xs: "1rem", sm: "10rem" }}
                    textAlign="center"
                    mt={2}
                >
                    Leveraging a powerful set of tools, frameworks, and platforms,
                    I streamline development workflows and ensure high-quality code delivery.
                </Typography>

                <Box display="flex" justifyContent="center" p={5}>
                    <Box
                        width="100%"
                        maxWidth="600px"
                        display="grid"
                        gridTemplateColumns={{
                            xs: "repeat(2, 1fr)",
                            sm: "repeat(3, 1fr)",
                            md: "repeat(4, 1fr)",
                        }}
                        gap={3}
                        justifyContent="center"
                    >
                        {tools.map((item, index) => (
                            <Box
                                key={index}
                                width={{ xs: 100, sm: 120 }}
                                height={{ xs: 90, sm: 100 }}
                                data-aos="zoom-in-right"
                                data-aos-duration={(index + 1) * 200}
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                boxShadow="0px 4px 10px #333"
                                sx={{
                                    backgroundColor: "transparent",
                                    borderRadius: "8px",
                                    transition: "all 0.5s ease-in-out",
                                    "&:hover": {
                                        transform: "scale(1.1)",
                                        boxShadow: "0px 8px 20px #333",
                                        cursor: "pointer",
                                    },
                                }}
                            >
                                <img src={`icons/${item}`} alt={item} width={80} />
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default Skills;

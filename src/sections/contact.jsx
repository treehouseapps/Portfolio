import emailjs from "emailjs-com";
import { Typography, Box, TextField, Button } from "@mui/material";
import { useState } from "react";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = () => {
        if (!name || !email || !message) {
            alert("Please fill in all fields before sending.");
            return;
        }

        emailjs
            .send(
                "service_4x0xy29",   // Your Service ID
                "template_5nx05p8",  // Your Template ID
                {
                    name: name,
                    email: email,
                    message: message,
                    time: new Date().toLocaleString(), // optional
                },
                "27Rl0xvyqXbmc5Tnv"  // Your Public Key
            )
            .then(
                () => {
                    alert("✅ Feedback sent successfully!");
                    setName("");
                    setEmail("");
                    setMessage("");
                },
                () => {
                    alert("❌ Something went wrong. Please try again.");
                }
            );
    };

    return (
        <Box height="max-content" p={2}>
            <Typography
                id="contact"
                variant="h3"
                mt={4}
                fontFamily="Quicksand"
                fontWeight="900"
                width="100%"
                p={2}
                align="center"
                data-aos="fade-right"
                sx={{ boxShadow: 2, fontSize: { xs: "24px", sm: "32px" }, color: (t) => t.palette.text.primary }}
            >
                Find Me On
            </Typography>

            <Box
                display="grid"
                gap={5}
                m={{ xs: 0.5, sm: 5 }}
                gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr" }}
                alignItems="center"
            >
                <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                    <Box m={4} p={4} textAlign="center">
                        <Typography variant="h4" fontFamily="Quicksand" fontWeight="bolder">
                            Get In Touch
                        </Typography>
                        <Typography variant="h5" fontFamily="Quicksand">
                            I am looking forward to starting a project with you! Feel free to reach out...
                        </Typography>
                    </Box>

                    <Box display="flex" gap={3} flexWrap="wrap" justifyContent="center">
                        {[
                            { img: "icons/linkedin.svg", label: "LinkedIn", link: "https://www.linkedin.com/in/berekettsegaye/" },
                            { img: "icons/gmail.svg", label: "Gmail", link: "https://mail.google.com/mail/?view=cm&fs=1&to=bbekijunior1@gmail.com&su=Greeting&body=Hi%20There!" },
                            { img: "icons/githubblack.svg", label: "GitHub", link: "https://github.com/treehouseapps" }
                        ].map((item, index) => (
                            <a key={index} href={item.link} style={{ textDecoration: "none" }} target="_blank" rel="noopener noreferrer">
                                <Box
                                    boxShadow={(t) => t.palette.boxShadow}
                                    p={2}
                                    borderRadius={5}
                                    data-aos="zoom-in"
                                    display="flex"
                                    flexDirection="column"
                                    alignItems="center"
                                    sx={{
                                        transition: "all 0.3s ease-in-out",
                                        "&:hover": {
                                            transform: "scale(1.1)",
                                            boxShadow: (t) => t.palette.boxShadow,
                                            cursor: "pointer",
                                        },
                                    }}
                                >
                                    <img src={item.img} alt={item.label} width="80" />
                                    <Typography fontFamily="Quicksand" sx={{ color: (t) => t.palette.text.primary }}>
                                        {item.label}
                                    </Typography>
                                </Box>
                            </a>
                        ))}
                    </Box>
                </Box>

                <Box mt={{ xs: 3, md: 5 }} display="flex" justifyContent="center">
                    <Box
                        sx={{
                            backgroundImage: "url(./computer.jpg)",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundColor: "black",
                            p: 4,
                            borderRadius: 2,
                            maxWidth: 600,
                            mx: "auto",
                            boxShadow: 3,
                            color: "white",
                        }}
                    >
                        <Box
                            display="flex"
                            flexDirection={{ xs: "column", sm: "row" }}
                            gap={2}
                            mb={2}
                            alignItems="center"
                            justifyContent="center"
                        >
                            <TextField
                                name="name"
                                fullWidth
                                label="Name"
                                variant="outlined"
                                InputLabelProps={{ style: { color: (t) => t.palette.text.primary } }}
                                InputProps={{ style: { color: (t) => t.palette.text.primary } }}
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        "& fieldset": { borderColor: (t) => t.palette.text.primary },
                                        "&:hover fieldset": { borderColor: "#ccc" },
                                        "&.Mui-focused fieldset": { borderColor: (t) => t.palette.text.primary },
                                    },
                                }}
                                data-aos='zoom-in'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <TextField
                                name="email"
                                fullWidth
                                label="Email"
                                variant="outlined"
                                InputLabelProps={{ style: { color: (t) => t.palette.text.primary } }}
                                InputProps={{ style: { color: (t) => t.palette.text.primary } }}
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        "& fieldset": { borderColor: (t) => t.palette.text.primary },
                                        "&:hover fieldset": { borderColor: "#ccc" },
                                        "&.Mui-focused fieldset": { borderColor: (t) => t.palette.text.primary },
                                    },
                                }}
                                data-aos='zoom-in'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Box>

                        <Typography variant="body1" component="label" htmlFor="message" sx={{ display: "block", mb: 1, color: "white" }}>
                            Message
                        </Typography>
                        <TextField
                            name="message"
                            id="message"
                            multiline
                            rows={5}
                            fullWidth
                            placeholder="Write your message..."
                            variant="outlined"
                            InputProps={{ style: { color: (t) => t.palette.text.primary } }}
                            InputLabelProps={{ style: { color: (t) => t.palette.text.primary } }}
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    "& fieldset": { borderColor: (t) => t.palette.text.primary },
                                    "&:hover fieldset": { borderColor: "#ccc" },
                                    "&.Mui-focused fieldset": { borderColor: (t) => t.palette.text.primary },
                                },
                            }}
                            data-aos='zoom-in'
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <Button
                            onClick={handleSubmit}
                            variant="outlined"
                            sx={{
                                mt: 2,
                                color: (t) => t.palette.text.primary,
                                borderColor: (t) => t.palette.text.primary,
                                "&:hover": { backgroundColor: "white", color: "black" },
                            }}
                        >
                            Send Message
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Contact;

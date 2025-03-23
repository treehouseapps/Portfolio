import { useEffect } from "react";

const ParticlesBackground = () => {
    useEffect(() => {
        if (window.particlesJS) {
            window.particlesJS.load("particles-js", "./particles.json", function () {
            });
        }
    }, []);

    return <div id="particles-js" style={{ position: "fixed", top: 0, left: 0, width: "100%" }}></div>;
};

export default ParticlesBackground;

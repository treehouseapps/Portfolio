import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useMemo, useState } from "react";

const ParticlesBackground = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setReady(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      background: {
        color: { value: "transparent" },
      },
      fpsLimit: 60,
      particles: {
        number: { value: 200, density: { enable: true, area: 800 } },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: { value: 0.5 },
        size: { value: { min: 1, max: 3 } },
        move: {
          enable: true,
          speed: 0.5,
          direction: "top",
          random: false,
          straight: true,
          outModes: {
            default: "out",
          }
        }
      }
    }),
    []
  );

  if (!ready) return null;

  return (
    <Particles
      id="tsparticles"
      options={options}
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none"
      }}
    />
  );
};

export default ParticlesBackground;
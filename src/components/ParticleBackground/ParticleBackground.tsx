import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import "./ParticleBackground.css";

function ParticleBackground() {
  const particlesInit = useCallback(async (engine: unknown) => {
    await loadSlim(engine as never);
  }, []);

  const options = {
    fullScreen: { enable: false },
    fpsLimit: 120,
    detectRetina: true,
    background: {
      color: "transparent",
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 140,
          links: {
            opacity: 0.35,
          },
        },
      },
    },
    particles: {
      color: {
        value: ["#00ffea", "#ff2efc", "#cc66ff"],
      },
      links: {
        color: "#00ffea",
        distance: 140,
        enable: true,
        opacity: 0.16,
        width: 1,
      },
      move: {
        direction: "none" as const,
        enable: true,
        outModes: {
          default: "bounce" as const,
        },
        random: false,
        speed: 0.6,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 1200,
        },
        value: 70,
      },
      opacity: {
        value: 0.6,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 0.8, max: 2 },
      },
    },
  };

  return (
    <div className="particle-background" aria-hidden="true">
      // @ts-ignore
      <Particles id="tsparticles" init={particlesInit} options={options} />
    </div>
  );
}

export default ParticleBackground;

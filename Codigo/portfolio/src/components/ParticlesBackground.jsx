import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {
  // Inicializamos o motor de física das partículas
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: { value: "transparent" }, // O fundo escuro já vem do CSS
        },
        fpsLimit: 60, // Limite de quadros para otimização de CPU
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab", // O cursor "puxa" as linhas
            },
          },
          modes: {
            grab: {
              distance: 150, // Raio de atração em pixels
              links: { opacity: 0.5 },
            },
          },
        },
        particles: {
          color: { value: "#38bdf8" }, // Cor das partículas (azul do nosso tema)
          links: {
            color: "#38bdf8",
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: { default: "bounce" }, // Partículas rebatem nas bordas
            random: false,
            speed: 1.5, // Velocidade do vetor de deslocamento
            straight: false,
          },
          number: {
            density: { enable: true, area: 800 },
            value: 40, // Quantidade de elementos no plano
          },
          opacity: { value: 0.3 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true, // Otimização para monitores de alta resolução
      }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0, /* Posicionado estritamente no fundo */
      }}
    />
  );
};

export default ParticlesBackground;
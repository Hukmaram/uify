import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const LinkedParticles = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container: any) => {
    console.log(container);
  };
  return (
    <div className="p-4 w-full flex flex-col items-center justify-center overflow-hidden">
      <div className="min-h-96 w-full relative">
        <div>
          {init && (
            <Particles
              id="tsparticles"
              particlesLoaded={particlesLoaded}
              className="absolute w-full h-full"
              options={{
                background: {
                  color: {
                    value: "#ffffff",
                  },
                },
                fpsLimit: 80,
                interactivity: {
                  events: {
                    onClick: {
                      enable: true,
                      mode: "push",
                    },
                    onHover: {
                      enable: true,
                      mode: "repulse",
                    },
                  },
                  modes: {
                    push: {
                      quantity: 4,
                    },
                    repulse: {
                      distance: 100,
                      duration: 0.4,
                    },
                  },
                },
                particles: {
                  color: {
                    value: ["#f20a86", "#7e0af2"],
                  },
                  links: {
                    color: "#7e0af2",
                    distance: 100,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                  },
                  move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                      default: "bounce",
                    },
                    random: false,
                    speed: 6,
                    straight: false,
                  },
                  number: {
                    density: {
                      enable: true,
                    },
                    value: 300,
                  },
                  opacity: {
                    value: 0.5,
                  },
                  shape: {
                    type: "circle",
                  },
                  size: {
                    value: { min: 4, max: 6 },
                  },
                },
                detectRetina: true,
                fullScreen: false,
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default LinkedParticles;

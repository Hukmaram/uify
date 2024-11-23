import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const Sparkles = () => {
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
      <div className="min-h-96 w-full bg-black relative rounded-md">
        <div className="absolute flex flex-col items-center justify-center w-full h-full">
          {init && (
            <Particles
              id="tsparticles"
              particlesLoaded={particlesLoaded}
              className="absolute w-full h-full"
              options={{
                background: {
                  color: "#000000",
                },
                interactivity: {
                  events: {
                    onClick: {
                      enable: true,
                      mode: "repulse",
                    },
                    onHover: {
                      enable: true,
                      mode: "bubble",
                    },
                  },
                  modes: {
                    bubble: {
                      distance: 200,
                      duration: 2,
                      opacity: 0,
                      size: 0,
                      speed: 3,
                    },
                    repulse: {
                      distance: 400,
                      duration: 0.4,
                    },
                  },
                },
                particles: {
                  color: {
                    value: [
                      "#3998D0",
                      "#2EB6AF",
                      "#A9BD33",
                      "#FEC73B",
                      "#F89930",
                      "#F45623",
                      "#D62E32",
                      "#EB586E",
                      "#9952CF",
                      "#f20a86",
                      "#7e0af2",
                    ],
                  },
                  move: {
                    direction: "none",
                    enable: true,
                    outModes: "out",
                    random: true,
                    speed: 0.3,
                  },
                  number: {
                    density: {
                      enable: true,
                    },
                    value: 600,
                  },
                  opacity: {
                    animation: {
                      enable: true,
                      speed: 5,
                    },
                    value: { min: 0.5, max: 0.6 },
                  },
                  shape: {
                    type: "circle",
                  },
                  size: {
                    value: 1.5,
                  },
                },
                fullScreen: false,
              }}
            />
          )}
          <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
            Build Beautiful UIs with Uify
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Sparkles;

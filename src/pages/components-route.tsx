import { Route, Routes } from "react-router-dom";
import { routeConfig } from "../routes/route-config";
import Components from "./components";
import AnalogClock from "../components/useable-components/analog-clock";
import Loading from "../components/useable-components/loading";
import LinkedParticles from "../components/useable-components/linked-particles";
import Sparkles from "../components/useable-components/sparkles";
import LeftNav from "../components/left-nav";
import AnimatedMenu from "../components/useable-components/animated-menu";
import IntroBanner from "../components/useable-components/intro-banner";

const ComponentsRoute = () => {
  return (
    <div className="h-full">
      <div className="flex">
        <LeftNav navs={routeConfig} />
        <div className="flex-1">
          <Routes>
            {/* <Route path="/" element={<div>Components Home</div>} /> */}
            <Route
              path="/analog-clock"
              element={
                <Components
                  component={AnalogClock}
                  path="../components/useable-components/analog-clock.tsx"
                  name="Analog Clock"
                  description="Ready to use analog clock component."
                />
              }
            />
            <Route
              path="/loading"
              element={
                <Components
                  component={Loading}
                  path="../components/useable-components/loading.tsx"
                  name="Loading"
                  description="Loading component."
                />
              }
            />
            <Route
              path="/linked-particles"
              element={
                <Components
                  component={LinkedParticles}
                  path="../components/useable-components/linked-particles.tsx"
                  name="Linked Particles"
                  description="Linked Particles component."
                />
              }
            />
            <Route
              path="/sparkles"
              element={
                <Components
                  component={Sparkles}
                  path="../components/useable-components/sparkles.tsx"
                  name="Sparkles"
                  description="Sparkles component."
                />
              }
            />
            <Route
              path="/animated-menu"
              element={
                <Components
                  component={AnimatedMenu}
                  path="../components/useable-components/animated-menu.tsx"
                  name="Animated Menu"
                  description="Animated Menu component"
                />
              }
            />
            <Route
              path="/intro-banner"
              element={
                <Components
                  component={IntroBanner}
                  path="../components/useable-components/intro-banner.tsx"
                  name="Intro Banner"
                  description="Intro Banner component"
                />
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default ComponentsRoute;

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "../components/layout";
import Landing from "../pages/landing";
import ComponentsRoute from "../pages/components-route";

const AppRoutes = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/components/*" element={<ComponentsRoute />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRoutes;

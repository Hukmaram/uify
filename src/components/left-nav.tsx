import { FC } from "react";
import { RouteConfig } from "../routes/route-config";
import { Link } from "react-router-dom";

interface LeftNavProps {
  navs: RouteConfig[];
}

const LeftNav: FC<LeftNavProps> = ({ navs }) => {
  return (
    <nav className="w-64 h-screen">
      {navs.map((component, index) => (
        <div key={index}>
          <p className="text-sm font-semibold text-gray-600 uppercase">
            {component.label}
          </p>
          {component.components?.map((child, index) => (
            <Link
              key={index}
              to={child.path}
              className="block mt-2 text-sm text-gray-900 hover:text-indigo-600"
            >
              {child.name}
            </Link>
          ))}
        </div>
      ))}
    </nav>
  );
};

export default LeftNav;

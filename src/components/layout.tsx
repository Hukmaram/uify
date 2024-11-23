import { FC } from "react";
import Footer from "./footer";
import Header from "./header";

interface LayoutProps {
  children: React.ReactNode;
}
const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto p-6 lg:px-8">{children}</main>
      <Footer />
    </div>
  );
};
export default Layout;

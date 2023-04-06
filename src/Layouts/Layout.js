import { Outlet } from "react-router-dom";
import Sidebar from "../Components/NavBar";

const Layout = () => {
  return (
    <div>
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Layout;

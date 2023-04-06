import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaUserNinja } from "react-icons/fa";
import { SidebarData } from "./SidebarData";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(true);
  const hideSidebar = () => setSidebar(false);

  return (
    <>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <FaBars onClick={showSidebar} />
        </Link>
        <h1 style={{fontSize: "50px"}}>Ticketing Ninja<FaUserNinja/></h1>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={hideSidebar}>
          <p className="navbar-toggle">
            <Link to="#" className="menu-bars"></Link>
          </p>
          {SidebarData.map((item, index) => {
            return (
              <p key={index} className={item.className}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </p>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;

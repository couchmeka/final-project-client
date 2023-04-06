import { FaHome, FaRegUser, FaTicketAlt, FaSearch } from "react-icons/fa";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <FaHome />,
    className: "nav-text",
  },
  {
    title: "Login",
    path: "/login",
    icon: <FaRegUser />,
    className: "nav-text",
  },
  {
    title: "Registration",
    path: "/registration",
    icon: <FaRegUser />,
    className: "nav-text",
  },
  {
    title: "Open Tickets",
    path: "/ticket",
    icon: <FaTicketAlt />,
    className: "nav-text",
  },
  {
    title: "Create Tickets",
    path: "/create-ticket",
    icon: <FaTicketAlt />,
    className: "nav-text",
  },
  {
    title: "Search Tickets",
    path: "/search",
    icon: <FaSearch />,
    className: "nav-text",
  },
];

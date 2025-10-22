import React from "react";
import { NavLink } from "react-router";

const MyLink = ({ to, className, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "border-[#FB8C00] border-b-4 font-semibold" : `${className} font-semibold`
      }
    >
      {children}
    </NavLink>
  );
};

export default MyLink;
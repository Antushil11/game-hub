import React from "react";
import logo from "../../src/assets/create a GameHub log.png";
import { Link } from "react-router";
import MyContainer from "./MyContainer";
import MyLink from "./MyLink";

const Navbar = () => {
  return (
    <div className="bg-slate-100f py-2 border-b-2 border-gray-500 bg-black">
      <MyContainer className="flex items-center justify-between">
        <figure>
          <img src={logo} className="w-[140px]  " />
        </figure>
        <div className="flex items-center justify-between gap-20 ">
          <ul className="flex items-center gap-20 ">
            <MyLink to={"/"}>Home</MyLink>
            <MyLink to={"/games"}>Games</MyLink>
            <MyLink to={"/newsletter"}>Newsletter</MyLink>
          </ul>

          <button className="btn bg-linear-to-r from-[#FFA726] to-[#FB8C00] text-white">
            <Link to={"/signin"}>Sign In</Link>
          </button>
        </div>
      </MyContainer>
    </div>
  );
};

export default Navbar;

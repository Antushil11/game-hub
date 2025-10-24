import React, { use } from "react";
import logo from "../../src/assets/create a GameHub log.png";
import { Link } from "react-router";
import MyContainer from "./MyContainer";
import MyLink from "./MyLink";
import { AuthContext } from "../provider/AuthContext";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  

  const handleSignOut = () => {
      logOut()
        .then(() => {
          toast.success("Your Logout successfully");
        })
        .catch((error) => {
          toast.error(error.message);
        });
    };
  
  return (
    <div className="navbar  bg-slate-100f py-2 border-b-2 border-gray-500 bg-black lg:mb-0 md:mb-0 mb-20">
      
      <MyContainer>
        <div className="navbar  shadow-sm">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <ul className="flex items-center flex-col gap-1 ">
                  <MyLink to={"/"}>Home</MyLink>
                  <MyLink to={"/games"}>Games</MyLink>
                  <MyLink to={"/newsletter"}>Newsletter</MyLink>
                </ul>
              </ul>
            </div>
            <figure>
              <img src={logo} className="w-[140px]  " />
            </figure>
          </div>
          <div className="navbar-end gap-20 ">
            <ul className="menu hidden lg:flex   menu-horizontal px-1">
              <ul className="flex items-center gap-20 ">
                <MyLink to={"/"}>Home</MyLink>
                <MyLink to={"/games"}>Games</MyLink>
                <MyLink to={"/newsletter"}>Newsletter</MyLink>
              </ul>
            </ul>

            {user ?  (
          <div className="">
            <img
              src={
                user?.photoURL ||
                "https://www.canto.com/cdn/2019/08/19194138/image-url-3.jpg"
              }
              className="h-20 w-20 rounded-full mx-auto"
              alt=""
            />
            <div className="flex flex-col items-center justify-center gap-2 mt-2">
              <h2 className="text-xl font-semibold">{user?.displayName}</h2>
              <h2 className="text-white/80 font-semibold">{user?.email}</h2>
              <button onClick={handleSignOut} className="btn bg-primary">
                Sign Out
              </button>
            </div>
          </div>
        ): (
              <button className="btn bg-linear-to-r from-[#FFA726] to-[#FB8C00] text-white">
                <Link to={"/auth/login"}>Sign In</Link>
              </button>
            )}
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default Navbar;

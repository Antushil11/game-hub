import React, { use } from "react";
import { AuthContext } from "../provider/AuthContext";
import { toast } from "react-toastify";
import { Link, Links } from "react-router";


const ProfilePages = () => {
  const { logOut, user } = use(AuthContext);
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
    <div className="border-2 max-w-full max-h-4/6  py-8 flex items-center justify-center min-h-screen">
      
    
      <div className="w-full max-w-md text-white backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8 ">
        <h2 className="text-2xl font-bold text-gray-400 mb-6 text-center">Profile Details</h2>
        <img
          src={
            user?.photoURL ||
            ""
          }
          className="h-full w-full  mx-auto"
          alt=""
        />
        <div className="flex flex-col items-center justify-center gap-4 mt-4">
          <h2 className="text-xl font-semibold">{user?.displayName}</h2>
          <h2 className="text-white/80 font-semibold">{user?.email}</h2>
        </div>
        <div className="text-center ">
          <Link
            to={"/"}
            onClick={handleSignOut}
            className="btn bg-primary text-white mt-4"
          >
            Sign Out
          </Link>
          <Link to={"/"} className="btn bg-primary text-white  mt-4 ml-4">
            Home Page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfilePages;

import React from "react";

const ProfilePages = () => {
  return (
    <div>
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
    </div>
  );
};

export default ProfilePages;

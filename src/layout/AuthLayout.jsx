import React from "react";
import Navbar from "../components/Navbar";
import MyContainer from "../components/MyContainer";
import Footer from "../components/Footer";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="min-h-screen">
      <header>
        <Navbar></Navbar>
      </header>
      <main >
        <MyContainer>
            <Outlet></Outlet>


        </MyContainer>
      </main>
      
    </div>
  );
};

export default AuthLayout;

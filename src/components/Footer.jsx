import React from "react";
import MyContainer from "./MyContainer";
import logo from "../../src/assets/create a GameHub log.png";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-base-200 ">
      <MyContainer className={"text-center md:text-left lg:text-left"}>
        <img className="max-h-20" src={logo} alt="" />
        <footer className=" text-gray-300 py-12 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <h3 className="text-white font-semibold mb-4">Service</h3>
              <ul className="space-y-2 text-sm">
                <li>Graphic Designe</li>
                <li>Web Developement</li>
                <li>Engineering</li>
                <li>Marketing</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>Virtual Assistants</li>
                <li>Accountants</li>
                <li>Bookkeepers</li>
                <li>Free trial</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>Patnerships</li>
                <li>Terms of use</li>
                <li>Privacy</li>
                <li>Sitemap</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Get in touch</h3>
              <p className="text-sm mb-4">
                You'll find your next freelance valu you prefer.
              </p>
              <div className="flex bg-white max-w-full rounded-2xl">
                <input
                  type="email"
                  placeholder="Enter your mail"
                  className="px-3 py-2 w-full rounded-l-md text-black focus:outline-none"
                />
                <button className="bg-[#FFA726] px-4 rounded-r-md text-gray-200 font-medium">
                  →
                </button>
              </div>
              
            </div>
          </div>
          <div className="mt-12 flex flex-col sm:flex-row justify-between items-center text-sm text-white">
            <h2 className="text-white font-semibold text-lg">Investa</h2>
          </div>
        </footer>
        <p className="text-center ">
          Copyrightantushil2025@.com, All rights reserved.
        </p>
      </MyContainer>
    </div>
  );
};

export default Footer;

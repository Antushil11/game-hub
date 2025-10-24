import React from "react";
import Marquee from "react-fast-marquee";

import spiderman from "../assets/spider man.jpg"
import godfall from "../assets/god fall.avif"
import godwar from "../assets/god war.avif"
import MyContainer from "./MyContainer";

// import logo from "../../src/assets/create a GameHub log.png";

const Banner = () => {
  return (
    <MyContainer className={"lg:mt-0 mt:mb-0 mt-16"}>
      <Marquee className="flex gap-10 mt-2" pauseOnHover={true} speed={40}>
        <figure>
            <img className="md:max-w-6xl max-w-2xl lg:max-w-6xl ml-12 " src={godfall} alt="" />
        </figure>
        <figure>
            <img className="md:max-w-6xl max-w-2xl lg:max-w-6xl ml-12"  src={spiderman} alt="" />
        </figure>
        <figure>
            <img className="md:max-w-6xl max-w-2xl lg:max-w-6xl ml-12 "  src={godwar} alt="" />
        </figure>
       
      </Marquee>
      
      
    </MyContainer>
  );
};

export default Banner;

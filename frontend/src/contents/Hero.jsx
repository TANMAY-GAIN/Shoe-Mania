import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";


const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-center gap-3">
      <Link to="/collection" >  
        <img src={assets.Hero} className="border border-gray-400" alt="Hero" />
      </Link>
  </div>
  );
};

export default Hero;

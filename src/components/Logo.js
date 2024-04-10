import React from "react";
import { Link } from "react-router-dom";
import LogoSvg from "../assets/logo.svg";
import bglogo from '../assets/weblogo.png';
import bglogo2 from '../assets/weblogo2.png';
const Logo = () => {
  return (
    <Link
      to="/"
      className="absolute top-[0.5rem] left-[0.5rem] [text-decoration:nonone] text-lg text-cyan flex items-center "
    >
      <img src={bglogo2} alt="CryptoBuckes" className="w-[25rem] h-50 " />
      {/* <span>CryptoBuckes</span> */}
    </Link>
  );
};

export default Logo;

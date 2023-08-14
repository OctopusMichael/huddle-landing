import React from "react";
import logoInvert from "../images/logoInvert.svg";
import location from "../images/icon-location.svg";
import tlfn from "../images/icon-phone.svg";
import email from "../images/icon-email.svg";
import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="md:ps-[120px]  md:py-[120px] h-auto  relative  flex flex-col xl:flex-row  px-[20px] text-white pb-[50px]">
        <div className=" drop-shadow-2xl  xl:w-[55.5%] absolute  top-[-70px] inset-0 rounded-[15px] h-[140px] md:h-[280px] md:top-[-175px]  w-[90%]  bg-zinc-50 mx-auto flex flex-col justify-center items-center">
          <h1 className="text-black md:mt-[10px] font-bold md:text-[32px]  "> Ready To Build Your Community?</h1>
          <button className="mt-[30px] md:text-[22px] hover:bg-pinkLight shadow-inner rounded-[50px] bg-pink font-bold h-10 w-[50%] md:h-[80px]  text-white  text-sm">
            Get Started For Free
          </button>
        </div>
        <div className="footer-menu">
        <div className="logo">
          <img src={logoInvert} alt="logoInvert" />
        </div>
          <ul>
            <li>
              <img src={location} alt="location" />{" "}
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p> 
            </li>
            <li>
              <img src={tlfn} alt="tlfn" />
              <p>+1-543-123-4567</p>
            </li>
            <li>
              <img src={email} alt="email" />
              <p>example@huddle.com</p>
            </li>
          </ul>
        </div>
       <div className="footer-menu-two">
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">What We Do</a></li>
          <li><a href="#">FAQ</a></li>
        </ul>
        <ul>
          <li><a href="#">Career</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
       </div>
       <div className="social">
        <ul>
          <li><a href="#"><FaFacebookF/></a></li>
          <li><a href="#"><FaTwitter/></a></li>
          <li><a href="#"><FaInstagram/></a></li>
        </ul>
       <p className="mt-[20px] text-[12px] text-center">&copy; Copyright 2018 Huddle. All rights reserved.</p>
       </div>
      </footer>
    </>
  );
};

export default Footer;








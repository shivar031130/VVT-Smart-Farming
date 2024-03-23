import React from "react";
import logoMSN from "../../../assets/images/VVT-PRODUCTION-LOGO.png";
import { Link } from 'react-router-dom'
import {
  FaPhoneAlt,
  FaLinkedin,
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {ButtonWa} from "../../../components";

const Footer = () => {
  return (
    <div>
      <footer className="p-20 footer text-base-100"
        style={{ backgroundColor: "#000000" }}
      >
      <div>
  <Link to='/'>
    <img src={logoMSN} alt="VVT SMART FARMING" className="w-10 sm:w-22" />
  </Link>
  <h1 className="text-2xl font-bold text-white">VVT SMART FARMING</h1>
  <span className="text-white">Universiti Sains Malaysia, <br />
    11800 USM Penang, <br />
    Malaysia.</span>
  <div className="flex items-center my-1">
    <FaPhoneAlt className="mr-6 text-2xl text-white" />
    <h3 className="font-medium text-white">+60 19-508 6715</h3>
  </div>
  <div className="flex items-center my-1">
    <MdEmail className="mr-6 text-2xl text-white" />
    <h3 className="font-medium text-white">info@vvtsmartfarming.com</h3>
  </div>
</div>
        {/* Tautan */}
        <div>
  <span className="font-bold text-white">Links</span>
  <Link
    to="/"
    className="link link-hover hover:text-#31BF73 text-white"
  >
    <span>Home</span>
  </Link>
  <Link
    to="/tentang"
    className="link link-hover hover:text-#31BF73 text-white"
  >
    <span>About</span>
  </Link>
  <Link
    to="/paket"
    className="link link-hover hover:text-#31BF73 text-white"
  >
    <span>Products</span>
  </Link>
  <Link
    to="/kontak"
    className="link link-hover hover:text-#31BF73 text-white"
  >
    <span>Contact</span>
  </Link>
  <Link
    to="/blog"
    className="link link-hover hover:text-#31BF73 text-white"
  >
    <span>Key features</span>
  </Link>
</div>
        {/* Fokus & Layanan */}
        <div>
  <span className="font-bold text-white">Focus & Services</span>
  <Link
    to="/paket"
    className="link link-hover hover:text-#31BF73 text-white"
  >
    <span>Smart Farming Learning Portals</span>
  </Link>
  <Link
    to="/paket"
    className="link link-hover hover:text-#31BF73 text-white"
  >
    <span>Pest Management</span>
  </Link>
  <Link
    to="/paket"
    className="link link-hover hover:text-#31BF73 text-white"
  >
    <span>Iot Device Integration</span>
  </Link>
  <Link
    to="/paket"
    className="link link-hover hover:text-#31BF73 text-white"
  >
    <span>Irrigation Control</span>
  </Link>
  <Link
    to="/paket"
    className="link link-hover hover:text-#31BF73 text-white"
  >
    <span>Crop Monitoring</span>
  </Link>

</div>

<div className="flex items-center mt-4">
  <a
    href="https://www.linkedin.com/in/usm-university-a18a7b65/?originalSubdomain=my"
    target="blank"
    className="text-2xl text-white hover:text-#31BF73 hover:-translate-y-1.5 shadow-lg mx-1 duration-300"
  >
    <FaLinkedin></FaLinkedin>
  </a>
  <a
    href="https://www.facebook.com/USMOfficial1969/?locale=ms_MY"
    target="blank"
    className="text-2xl text-white hover:text-#31BF73 hover:-translate-y-1.5 shadow-lg mx-1 duration-300"
  >
    <FaFacebookSquare></FaFacebookSquare>
  </a>
  <a
    href="https://twitter.com/USMOfficial1969"
    target="blank"
    className="text-2xl text-white hover:text-#31BF73 hover:-translate-y-1.5 shadow-lg mx-1 duration-300"
  >
    <FaTwitterSquare></FaTwitterSquare>
  </a>
  <a
    href="https://www.instagram.com/usmofficial1969/"
    target="blank"
    className="text-2xl text-white hover:text-#31BF73 hover:-translate-y-1.5 shadow-lg mx-1 duration-300"
  >
    <FaInstagramSquare></FaInstagramSquare>
  </a>
</div>


      </footer>
      <footer className="px-10 py-6 text-sm text-center text-white border-base-300 bg-green-400"> {/* Change here */}
  <div className="w-full h-[2px] bg-black"></div>
  <div className="flex flex-col items-center justify-center mt-6 md:flex-row text-accent">
  <p className="text-black">&copy; Copyright 2024, VVT SMART FARMING . All Rights Reserved</p>
  </div>
</footer>
      <ButtonWa />
    </div>
  );
};

export default Footer;
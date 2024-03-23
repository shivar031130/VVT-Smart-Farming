import React from "react";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import { motion } from "framer-motion";
import bannerImg from "../../../assets/images/bg.png"
import "../../../pages/shared/Shared.css";
import { SecondaryBtn } from "../../../components";

const Banner = () => {
  return (
    <div className="parent min-h-[100vh] flex flex-col-reverse lg:flex-row items-center justify-between" style={{backgroundColor: '#000000'}}>
      <img
    src="LOGO.png"
    alt="Background Image"
    className="absolute inset-0 w-full h-full object-cover filter blur-sm"
    style={{ zIndex: -1 }}
  />
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="mb-0 text-4xl font-bold" style={{ color: "white" }}>VVT SMART FARMING</h1>



        <h2 className="my-6 text-2xl font-bold" style={{ color: "#31BF73" }}>Innovating Agriculture, Cultivating Sustainability</h2>

        {/* </div> */}
        <p className="max-w-md mb-10 font-medium" style={{ color: "white" }}>
  Welcome to VVT SMART FARMING, where innovation meets cultivation. Our platform revolutionizes farming by providing tailored solutions, collaborative tools, and cutting-edge automation, empowering farmers with knowledge and technology for sustainable and efficient agricultural practices.
</p>


        <div className="flex items-center mb-20">
          <a
            href="https://api.whatsapp.com/send/?phone=60143724652&text=VVT+Production&type=phone_number&app_absent=0"
            target="blank"
          >
            <button className="primary-button" style={{ backgroundColor: "#31BF73" }}>
              <span className="text-button-mobile">CONTACT US</span>
              <span>
                <FaAngleRight />
              </span>
            </button>
          </a>
          <Link to="/paket" className="ml-4">
          <SecondaryBtn style={{ backgroundColor: "#31BF73", color: "#FFFFFF" }}>
          <span className="text-button-mobile" style={{ color: "white" }}>View Offers</span>
              <span>
                <FaAngleRight />
              </span>
            </SecondaryBtn>
          </Link>
        </div>
      </motion.div>
      <motion.div
        className="w-full md:w-1/2"
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
<div className="order-1 pt-10 lg:order-3 lg:pt-0 md:pt-0 sm:pt-0">
  <img src={bannerImg} alt="Banner VVT PRODUCTION" style={{ width: '150%', height: '150%' }} />
</div>

      </motion.div>
    </div>
  );
};

export default Banner;

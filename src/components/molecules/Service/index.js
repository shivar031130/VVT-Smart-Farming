import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Services from "../../../utils/Services";
import { FaAngleRight } from "react-icons/fa";
import {
  headingAnimation,
  sectionBodyAnimation,
} from "../../../hooks/useAnimation";
import { BottomLine } from "../../../components";

const Service = () => {
  const [ref, inView] = useInView();
  const [viewDiv, setViewDiv] = useState(false);
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      setViewDiv(true);
    } else {
      setViewDiv(false);
    }
  }, [inView, animation]);
  return (
    <div className="py-20 parent bg-neutral">
      <motion.div
        className="mb-12"
        initial="hidden"
        animate={viewDiv && "visible"}
        variants={headingAnimation}
      >
        <h3 className="text-center text-accent">Services</h3>
        <h1 className="text-4xl font-semibold text-center">
          Platform for <span className="text-primary"style={{ color: "#31BF73" }}>Innovative and Technological Solutions</span>
        </h1>
        <BottomLine />
        <h2 className="py-5 text-center text-accent">Our main goal is to revolutionize traditional agricultural practices by integrating advanced technologies and data-driven solutions. Through the implementation of innovative features such as crop monitoring, weather forecasting, pest management, irrigation control, and access to educational resources.</h2>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        ref={ref}
        initial="hidden"
        animate={viewDiv && "visible"}
        variants={sectionBodyAnimation}
      >
        {Services?.map((service) => (
          <div
            key={service.id}
            className={`${service.id % 2 === 0
              ? "bg-base-100 impactfull-card shadow-lg"
              : "bg-base-100 impactfull-card shadow-lg"
              } rounded-lg p-6 duration-300`}
          >
            <div className="mb-4 text-center">
              <span className="inline-block text-5xl text-primary">
                {service.icon}
              </span>
            </div>
            <h2 className="mb-4 text-2xl font-semibold text-center">
              {service.title}
            </h2>
            <p className="text-accent">
              {service.description.split("\n").map((s, i) => (
                <React.Fragment key={i + 1}>
                  <span className="inline-block mb-4 text-justify text-gray-600 align-bottom">{s}</span>
                  <br />
                </React.Fragment>
              ))}
              <br />
              <span className="flex justify-center mb-5">
                <a
                  href="https://wa.me/60143724652"
                  target="blank"
                >
                  <button className="flex items-center gap-3 text-black duration-500 bg-transparent border-2 btn border-primary hover:bg-primary hover:border-transparent hover:text-white">
                    <span className="text-button-mobile">Contact Us</span>
                    <span>
                      <FaAngleRight />
                    </span>
                  </button>
                </a>
              </span>
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Service;

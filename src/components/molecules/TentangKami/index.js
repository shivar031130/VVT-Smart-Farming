import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { BottomLine } from "../../../components";
import { useInView } from "react-intersection-observer";
import {
    sectionBodyAnimation,
} from "../../../hooks/useAnimation"

const Tentang = () => {
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
        <div className="pt-2 my-16 parent" style={{ backgroundColor: "#FFFFFF" }}>
            <div className="">
                <motion.div
                    className="mb-12"
                    initial={{ y: -200, opacity: 0 }}
                    animate={{
                        y: 0,
                        opacity: 1,
                        transition: { duration: 1, type: "spring" },
                    }}
                >
                    <h3 className="text-center text-accent">What is VVT SMART FARMING??</h3>
                    <h1 className="text-4xl font-semibold text-center drop-shadow-md">
                        About <span className="text-primary" style={{ color: "#31BF73" }}>Us</span>
                    </h1>
                    <BottomLine />
                </motion.div>
                <div className="items-center px-5 pt-4 text-center sm:px-20">
                    <motion.div
                        ref={ref}
                        initial="hidden"
                        animate={viewDiv && "visible"}
                        variants={sectionBodyAnimation}
                    >
                        <p className="font-medium text-accent">
                        Established in 2024, VVT SMART FARMING is dedicated to revolutionizing the agricultural landscape through technology and innovation. Our platform serves as a catalyst for change in the farming industry, empowering farmers worldwide with data-driven insights, collaborative tools, and sustainable practices. Committed to bridging the gap between technology and agriculture, our team works tirelessly to ensure farmers have access to the tools and knowledge needed for success. With a focus on sustainability, efficiency, and community, VVT SMART FARMING is leading the way towards a brighter future in agriculture. Join us as we cultivate innovation and prosperity in every field.
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Tentang;

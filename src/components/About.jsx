import React from "react";
import ParallaxText from "./ParallaxText";
import { motion } from "framer-motion";
import profile from "../assets/sai.jpeg";

const AboutVerticalanimation = () => {
  return (
    <section>
      <ParallaxText baseVelocity={-4}>About</ParallaxText>
    </section>
  );
};

const About = () => {
  return (
    <div className="h-screen flex flex-col text-white relative">
      <div className="flex-1">
        <AboutVerticalanimation />
      </div>
      <div className=" flex items-center justify-center absolute h-screen w-full opacity-85 rounded-md">
        <motion.div
          className="flex flex-col max-w-xs md:flex-row md:max-w-4xl lg:max-w-[1250px] rounded-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 0.9, scale: 1 }}
          transition={{ duration: 0.5 }}
          animate={{ type: "easeinout" }}
        >
          <motion.img
            className="w-44 h-44 rounded-full max-sm:mb-4 self-center md:h-[300px] object-cover md:w-max lg:rounded-tl-md lg:rounded-bl-md md:rounded-none"
            src={profile}
            alt=""
            initial={{ opacity: 0, x: -25, scale: 0.8 }}
            whileInView={{ opacity: 0.9, x: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
            animate={{ type: "easeinout" }}
          />
          <motion.div
            className="px-6 py-5 flex flex-col justify-center bg-about max-sm:rounded-md sm:rounded-tr-md sm:rounded-br-md"
            initial={{ opacity: 0, x: 25, scale: 0.8 }}
            whileInView={{ opacity: 0.9, x: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
            animate={{ type: "easeinout" }}
          >
            <motion.div
              className="text-blue-900 text-2xl md:text-4xl font-medium lg:mb-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              animate={{ type: "easeinout" }}
            >
              About me
            </motion.div>
            <p className="text-gray-600 text-sm md:text-lg">
              Hello! I'm SaiTheja_Kunta, a passionate coder and aspiring data
              scientist currently pursuing B.Tech in Data Science at Guru Nanak
              Institutions. I have a strong foundation in Python programming and
              can confidently code in Java, C, and C++. My journey in the tech
              world has been an exciting one. I had the opportunity to establish
              a club called "Feliks," where I fostered a community of
              like-minded individuals passionate about coding and technology. As
              a Co-lead for the Google Developer Students Club (GDSC) at GNI, I
              actively organized events and workshops to promote learning and
              collaboration among students.
            </p>
          </motion.div>
        </motion.div>
      </div>
      <motion.div className="flex-1 bottom-0 right-0 text-[100px] md:text-[200px] lg:text-[250px] absolute opacity-10 font-opensans">
        About
      </motion.div>
    </div>
  );
};

export default About;

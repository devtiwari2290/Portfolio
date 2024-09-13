import React, { useState } from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const data = [
    { image: "https://saarthack.github.io/portfolio/images/html-min.webp" },
    { image: "https://saarthack.github.io/portfolio/images/css-min.webp" },
    { image: "https://saarthack.github.io/portfolio/images/js-min.webp" },
    {
      image: "https://saarthack.github.io/portfolio/images/React-icon.svg.webp",
    },

    { image: "https://saarthack.github.io/portfolio/images/gsap-min.webp" },
    {
      image:
        "https://logowik.com/content/uploads/images/tailwind-css3232.logowik.com.webp",
    },
  ];

  const data2 = [
    { image: "https://nodejs.org/static/logos/jsIconGreen.svg" },
    { image: "https://saarthack.github.io/portfolio/images/mongodb-min.webp" },
  ];

  const data3 = [
    { image: "https://saarthack.github.io/portfolio/images/github-min.webp" },
    {
      image:
        "https://external-preview.redd.it/now-i-have-seen-all-v0-GECZj5NCEqP-3-RG3h5Iaiih6nBAR38ZbxlBrxmk-yw.jpg?auto=webp&s=529d9242cd74c584ff5bfa37e94087814d87ee0b",
    },
    {
      image: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
    },
  ];

  const [images, setImages] = useState(data);

  const [images2, setImages2] = useState(data2);

  const [images3, setImages3] = useState(data3);

  return (
    <div className="w-full min-h-screen bg-[#222222] pb-10 pt-20 ">
      <h1 className="skills text-4xl font-extrabold text-white lg:pt-10  px-5 lg:text-6xl lg:px-14  tracking-normal  md:text-4xl sm:text-3xl">
        Things I'm <span className="text-sky-400">good</span> at
      </h1>
      <p className="text-sm font-bold text-white px-6 tracking-wide lg:text-3xl lg:px-16 pt-2">
        skills, interest, passion and hobbies
      </p>

      <div className="frontend lg:mt-14 mt-10">
        <div className="rounded  bg-gradient-to-r from-[#C33764] to-[#1D2671] max-w-sm whitespace-nowrap py-3 mx-5  lg:max-w-[28%] lg:mx-16 ">
          <h2 className="text-xl  text-white px-3 lg:text-3xl lg:px-5 sm:text-2xl md:text-2xl">
            Front-end development
          </h2>
        </div>

        <motion.div
          className="grid grid-cols-3 lg:flex flex-wrap gap-4 mt-5 mx-9 items-center lg:mx-16 lg:mt-5 "
          initial={{
            opacity: 0,
            x: -50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
          viewport={{
            once: true,
          }}
        >
          {images.map((item, index) => {
            return (
              <div
                className="w-[70px] h-[70px] bg-white rounded-lg flex items-center justify-center
                lg:w-[80px] lg:h-[80px]"
                key={index}
              >
                <img
                  className=" w-[60px] h-[60px] object-cover lg:w-[70px] lg:h-[70px]"
                  src={item.image}
                  alt=""
                />
              </div>
            );
          })}
        </motion.div>
      </div>

      <div className="backend mt-14">
        <div className="rounded  bg-gradient-to-r from-[#C33764] to-[#1D2671] max-w-sm  whitespace-nowrap py-3 mx-5 lg:max-w-[28%] lg:mx-16">
          <h2 className="text-xl  text-white px-3 lg:text-3xl lg:px-5">
            Back-end development
          </h2>
        </div>

        <motion.div
          className="grid grid-cols-3 lg:flex flex-wrap gap-4 mt-5 mx-9 items-center lg:mx-16 lg:mt-5 "
          initial={{
            opacity: 0,
            x: -50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
          viewport={{
            once: true,
          }}
        >
          {images2.map((item, index) => {
            return (
              <div
                className="w-[70px] h-[70px] bg-white rounded-lg flex items-center justify-center
                lg:w-[80px] lg:h-[80px]"
                key={index}
              >
                <img
                  className="w-[60px] h-[60px]  lg:w-[65px] h-[65px]"
                  src={item.image}
                  alt=""
                />
              </div>
            );
          })}
        </motion.div>
      </div>

      <div className="tools mt-14">
        <div className="rounded  bg-gradient-to-r from-[#C33764] to-[#1D2671] max-w-sm whitespace-nowrap py-3 mx-5 lg:max-w-[28%] lg:mx-16">
          <h2 className="text-xl  text-white px-3 lg:text-3xl lg:px-5">
            Tools & Technologies
          </h2>
        </div>

        <motion.div
          className="grid grid-cols-3 lg:flex flex-wrap gap-4 mt-5 mx-9 items-center lg:mx-16 lg:mt-5"
          initial={{
            opacity: 0,
            x: -50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
          viewport={{
            once: true,
          }}
        >
          {images3.map((item, index) => {
            return (
              <div
                className="w-[70px] h-[70px] bg-white rounded-lg flex items-center justify-center
                lg:w-[80px] lg:h-[80px] "
                key={index}
              >
                <img
                  className="w-[60px] h-[60px]  lg:w-[65px] h-[65px] object-cover "
                  src={item.image}
                  alt=""
                />
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;

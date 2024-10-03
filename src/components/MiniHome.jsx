import React, { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import "./App.css";
import Pic from "../assets/Profile3.webp";

function Home() {
  if (typeof window !== "undefined") {
    window.scrollTo(0, 0);

    useGSAP(() => {
      gsap.to(".marque", {
        scrollTrigger: {
          trigger: ".marque",
          start: "top 50%",
          end: "bottom 50%",
          scrub: 1,
        },
      });

      gsap.to(".marque", {
        duration: 5,
        transform: "translateX(-100%)",
        repeat: -1,
        ease: "none",
      });

      gsap.to(".marque img", {
        rotate: 180,
      });
    });
  } else {
    useGSAP(() => {
      gsap.to(".marque", {
        duration: 5,
        transform: "translateX(0%)",
        repeat: -1,
        ease: "none",
      });

      gsap.to(".marque img", {
        rotate: 0,
      });
    });
  }

  return (
    <div className="home w-full max-h-screen bg-[#111111] pt-[100px] relative z-[-10] lg:pt-[150px]">
      <div
        className="max-w-screen h-[300px]  px-8  object-cover lg:px-0 lg:w-[800px] lg:h-[400px] rounded-lg object-cover   lg:object-contain  mx-auto "
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        data-aos-once="true"
      >
        <img
          className="max-w-full h-full mx-auto object-cover  lg:object-contain "
          src={Pic}
          alt=""
        />
      </div>
      <div className="move bg-[#D8FF08] flex shrink py-2 overflow-hidden mt-10  lg:mt-10">
        <div className="marque flex shrink-0 justify-center items-center gap-10  py-2 px-5 lg:py-5 px-10 ">
          <h1 className=" text-lg lg:text-5xl text-center font-semibold">
            WELCOME TO MY PORTFOLIO
          </h1>
          <img
            className="h-[20px] lg:h-[50px]"
            src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg"
            alt=""
          />
        </div>

        <div className="marque flex shrink-0 justify-center items-center gap-10  py-2 px-5 lg:py-5 px-10">
          <h1 className="text-lg  lg:text-5xl text-center font-bold">
            WELCOME TO MY PORTFOLIO
          </h1>
          <img
            className="h-[20px] lg:h-[50px]"
            src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg"
            alt=""
          />
        </div>

        <div className="marque flex shrink-0 justify-center items-center gap-10  py-2 px-5 lg:py-5 px-10">
          <h1 className="text-lg lg:text-5xl text-center font-bold">
            WELCOME TO MY PORTFOLIO
          </h1>
          <img
            className="h-[20px] lg:h-[50px]"
            src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg"
            alt=""
          />
        </div>

        <div className="marque flex shrink-0 justify-center items-center gap-10 py-2 px-5 lg:py-5 px-10 ">
          <h1 className="text-lg lg:text-5xl text-center font-bold">
            WELCOME TO MY PORTFOLIO
          </h1>
          <img
            className="h-[20px] lg:h-[50px]"
            src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

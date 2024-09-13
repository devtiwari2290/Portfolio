import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="contact w-full  min-h-screen pb-6 lg:pb-0 md:h-[45vh] sm:h-[30vh] pt-12  lg:min-h-[100vh] bg-[#393939] lg:pt-20  ">
      <h1 className="contact text-6xl px-7 pt-10 lg:pt-10 font-bold text-[#FFFFFF] text-center leading-normal  text-lowercase lg:text-9xl md:text-7xl sm:text-6xl lg:leading-normal lg:px-40 md:leading-normal sm:leading-normal">
        {" "}
        you can get in touch with me via{" "}
        <Link to="mailto:devrajtiwari229@gmail.com" target="_blank">
          {" "}
          <span className="text-rose-500	"> mail</span>
        </Link>{" "}
        or{" "}
        <Link
          to="https://www.instagram.com/__i__m__prince24/?hl=en"
          target="_blank"
        >
          <span className="text-amber-300	">instagram</span>
        </Link>{" "}
        or{" "}
        <Link
          to="https://www.linkedin.com/in/dev-tiwari-3bb04a297/"
          target="_blank"
        >
          <span className="text-cyan-500">linkedin</span>
        </Link>
        .
      </h1>
    </div>
  );
}

export default Contact;

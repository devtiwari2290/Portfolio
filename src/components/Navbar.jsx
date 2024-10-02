import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing icons for menu toggle\
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import { Routes, Route } from "react-router-dom";
import { style } from "framer-motion/client";
import resume from "../assets/Resume.pdf";
import { FaFileDownload } from "react-icons/fa";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <nav
        className="navbar fixed w-full h-16 bg-[#111111] lg:h-20 z-[10] text-white flex justify-between items-center px-5 md:px-10"
        style={{ fontFamily: "china" }}
      >
        {/* Logo */}
        <div className="logo flex justify-center items-center">
          <h1 className="text-base uppercase lg:text-2xl bg-line bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-500">
            <span className=" text-2xl lg:text-3xl  ">D</span>ev
            <span className=" text-2xl lg:text-3xl ">T</span>iwari
          </h1>
        </div>

        {/* Menu Links - Hidden on small screens */}
        <div
          className={`menu-link  lg:flex lg:pl-32 items-center  ${
            showMenu ? "flex bg-[#111111] " : "hidden"
          } flex-col lg:flex-row absolute  lg:static top-[55px] py-5 gap-5  left-0 w-full  lg:w-auto  lg:bg-transparent`}
        >
          <NavLink
            style={(e) => ({
              color: e.isActive ? "red" : "white",
            })}
            to="/"
            onClick={toggleMenu}
          >
            Home
          </NavLink>

          <NavLink
            style={(e) => ({
              color: e.isActive ? "red" : "white",
            })}
            to="about"
            onClick={toggleMenu}
          >
            About
          </NavLink>

          <NavLink
            style={(e) => ({
              color: e.isActive ? "red" : "white",
            })}
            to="/skills"
            onClick={toggleMenu}
          >
            Skills
          </NavLink>

          <NavLink
            style={(e) => ({
              color: e.isActive ? "red" : "white",
            })}
            to="/projects"
            onClick={toggleMenu}
          >
            Projects
          </NavLink>

          <NavLink
            style={(e) => ({
              color: e.isActive ? "red" : "white",
            })}
            to="/contact"
            onClick={toggleMenu}
          >
            Contact
          </NavLink>

          <Link
            to={resume}
            target="_blank"
            download={true}
            onClick={toggleMenu}
            class="resume lg:hidden py-2 px-4 lg:px-6 lg:py-2 text-white font-bold rounded-3xl "
            style={{ fontFamily: "china" }}
          >
            <div className="flex items-center gap-2">
              <span className="text-base lg:text-xl">get my resume</span>
              <FaFileDownload className="text-xl text-white" />
            </div>
          </Link>
        </div>

        {/* Social Links - Always visible */}
        <div className="social-link flex items-center gap-5">
          <Link
            to={resume}
            target="_blank"
            download={true}
            onClick={toggleMenu}
            class="resume hidden lg:block   lg:px-5 lg:py-2  text-white font-bold rounded-3xl "
            style={{ fontFamily: "china" }}
          >
            <div className="flex items-center gap-2">
              <span className="text-base lg:text-xl">get my resume</span>
              <FaFileDownload className="text-2xl text-white" />
            </div>
          </Link>
          <Link
            to="https://www.linkedin.com/in/dev-tiwari-3bb04a297/"
            className="linkedin text-blue-500 text-2xl lg:text-2xl"
            target="_blank"
          >
            <FaLinkedin />
          </Link>

          <Link
            to="https://github.com/devtiwari2290"
            className="github text-2xl lg:text-2xl"
            target="_blank"
          >
            <FaGithub />
          </Link>

          <Link
            to="https://www.instagram.com/__i__m__prince24/?hl=en"
            className="instagram text-pink-500 text-2xl lg:text-2xl"
            target="_blank"
          >
            <FaInstagram />
          </Link>
        </div>

        {/* Hamburger Icon */}
        <div className="lg:hidden">
          {showMenu ? (
            <FaTimes className="text-2xl " onClick={toggleMenu} />
          ) : (
            <FaBars className="text-2xl " onClick={toggleMenu} />
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;

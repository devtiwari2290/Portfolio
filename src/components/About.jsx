import React, { useEffect } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..

const About = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <>
      <div className="about w-full min-h-screen bg-[#111111]  pt-14 lg:pt-24 pb-10">
        <div
          className="max-w-screen-lg mx-auto pt-10 lg:pt-0 w-full h-full text-white whitespace-nowrap text-wrap tracking-widest px-7 lg:px-0"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
          data-aos-anchor-placement="top-center"
        >
          <h2 className="text-2xl text-white text-center leading-loose	lg:text-5xl lg:leading-loose ">
            Hi !
          </h2>
          <h3 className="text-2xl text-white text-center font-extrabold  tracking-widest leading-loose lg:text-5xl font-extrabold lg:leading-loose">
            I'm Dev Tiwari, a Full Stack Developer and a UI/UX <br /> designer.
            I specialize in about building web applications and UI/UX design &
            animations. I have a passion for creating visually appealing and
            user-friendly websites and Proficient in frontend technologies HTML,
            CSS, JavaScript , Tailwind, React and backend technologies NodeJS,
            ExpressJS, MongoDB.
          </h3>
        </div>
      </div>
    </>
  );
};

export default About;

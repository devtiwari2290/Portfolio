import React from "react";
import { div } from "three/webgpu";
import { Link } from "react-router-dom";
import { Slide, Fade } from "react-awesome-reveal";

const Projects = () => {
  const CardsData = [
    {
      id: 1,
      image:
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/44f38293168233.5e5e2974b43e4.jpg",
      title: "Movie-App",
      desc: " Movieo is a fully responsive Movie Application designed for users by providing New release movies , Tv Shows and users can search & watch their favourites movies and tv shows",
      view: "https://movie-app-nine-virid-51.vercel.app/",
    },

    {
      id: 2,
      image: "https://images.ui8.net/uploads/group-812_1617800675857.png",
      title: "Social Media App",
      desc: "Social Media App is a web application that enables users to connect with each other. The app allows users to chat with each other & share their thoughts, posts and images with other users.",
      view: "https://www.linkedin.com/posts/dev-tiwari-3bb04a297_excited-to-share-my-latest-full-stack-activity-7219017544123244544-TITZ?utm_source=share&utm_medium=member_desktop",
    },

    {
      id: 3,
      image:
        "https://cdn.dribbble.com/userupload/12951483/file/original-f34210b246e09162aaf6bf9bb9eb4483.png?resize=2048x1536",
      title: "Flight Booking ",
      desc: "Website with a great UI design, including carousel slider for sliding the images for better user experience as its has date and selection of flights, hotel booking and more features.",
      view: "https://flight-booking-website-seven.vercel.app/",
    },

    {
      id: 4,
      image:
        "https://cdn.dribbble.com/userupload/7790921/file/original-0e2ac0c0c0019169b1cfcd9f6f8262dc.png?resize=2048x1536&vertical=center",
      title: "CourseCo",
      desc: "CourseCo is a web application that helps students to find the best courses available online. It provides a platform for students to learn with the help of mentors and grow by providing them with the best courses available on our platform.",
      view: "https://courseco-app.vercel.app/",
    },
  ];

  return (
    <div className="projects w-full min-h-screen bg-[#111111] pt-12  pb-10 lg:pb-10">
      <h1 className="text-center text-3xl leading-normal pt-10 tracking-wide font-bold text-white  px-5 lg:text-6xl lg:px-14 lg:pt-20 tracking-normal  md:text-4xl sm:text-3xl">
        Here Are <span className="text-rose-400	"> Some </span> Of My{" "}
        <span className="text-[#00df9a]">Projects</span>{" "}
      </h1>
      {/* cards section */}

      <div className="mt-5  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-6 lg:mt-20 ">
        {CardsData.map(({ id, image, title, desc, view }) => {
          return (
            <div
              key={id}
              className="text-white shadow-md rounded-lg overflow-hidden relative group py-3 lg:py-0"
            >
              <img
                src={image}
                alt=""
                className="max-w-[275px] h-[250px] rounded-lg object-cover group-hover:scale-110 duration-500 lg:max-w-[380px] lg:h-[350px] "
              />
              {/* overlay section */}
              <div className="absolute left-0 top-[-100%] opacity-0 group-hover:opacity-100 group-hover:top-[0] p-4 w-full h-full bg-black/60 group-hover:backdrop-blur-sm duration-500 ">
                <div className="space-y-4">
                  <Slide cascade>
                    <h1 className="text-xl font-bold text-wrap whitespace-nowrap lg:text-3xl ">
                      {title}
                    </h1>
                    <Fade cascade damping={0.05}>
                      <p className="text-wrap text-sm whitespace-nowrap lg:text-lg">
                        {desc}
                      </p>
                    </Fade>
                    <Link to={view} target="_blank" rel="noreferrer">
                      <div>
                        <button className="mt-2 border border-white px-3 py-1 text-sm rounded-lg hover:bg-black/20 duration-300 lg:px-4 py-2 lg:mt-4 lg:text-lg">
                          View Now
                        </button>
                      </div>
                    </Link>
                  </Slide>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;

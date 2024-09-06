import React from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './App.css'
import { div } from 'three/webgpu'


const About = () => {

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function(){
    const tl = gsap.timeline({
      scrollTrigger:{
        trigger: '#two',
        start: "-30%, 50%",
        end: "100% , 50%",
        scrub: 1,
   
      }
    })

    tl.to("#text-area-hover h1",{
  
      width: "100%",
    })

    tl.to("#text-area-hover h2",{
      delay: -0.4,
      width: "100%",
    })

    tl.to("#text-area-hover h3",{
      delay: -0.2,
      width: "100%",
    })

    tl.to("#text-area-hover h4",{
      delay: -0.6,
      width: "100%",
    })
  })
  


  return (
      <>
      <div className='about w-full min-h-screen bg-[#111111]  pt-14 lg:pt-24 pb-10'>
        <div className='max-w-screen-lg mx-auto pt-10 lg:pt-0 w-full h-full text-white whitespace-nowrap text-wrap tracking-widest px-7 lg:px-0'>
          <h2 className='text-xl text-white text-center leading-loose	lg:text-5xl lg:leading-loose ' style={{ fontFamily: "Chunk" }}>Hi !</h2>
          <h3 className='text-xl text-white text-center font-extrabold  tracking-widest leading-loose lg:text-5xl font-extrabold lg:leading-loose' style={{ fontFamily: "Chunk"  }}>I'm Dev Tiwari, a Full Stack Developer and a UI/UX <br /> designer. I specialize in  about building web applications and UI/UX design & animations.
            I have a passion for creating visually appealing and user-friendly websites and Proficient in frontend technologies HTML, CSS, JavaScript , Tailwind, React and backend technologies NodeJS, ExpressJS, MongoDB.
          </h3>
        </div>


      </div>
      </>
     
  
  )
}

export default About

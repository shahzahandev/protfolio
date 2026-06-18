import banner1 from "../../assets/bannerChat.png"
import Container from '../Container/Container'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { BsDownload } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import About from '../About/About'
import Footer from "../Footer/Footer";
import Work from "../Skill/Work";
import Education from "../Education/Education";
import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink } from "react-router"
import { useEffect, useState } from "react";

const Banner = () => {

  return (
    <>
      <div className="bg-primary font-primary pt-24 md:pt-32 lg:pt-36 pb-16 md:pb-20 overflow-hidden">
        <Container>
          <div className="flex flex-col items-center text-center px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-heading leading-tight">
              Shahzahan Siraj
            </h1>
            <h3 className="mt-4 text-lg sm:text-2xl md:text-3xl lg:text-5xl text-gray-300">
              I'm a{" "}
              <span className="text-white font-semibold block sm:inline">
                Frontend Developer
              </span>
            </h3>
            <p className="max-w-xs sm:max-w-xl md:max-w-3xl lg:max-w-4xl mt-5 md:mt-6 text-sm sm:text-base md:text-lg text-gray-400 leading-6 md:leading-8">
              I specialize in creating pixel-perfect, high-performance websites and
              web applications using modern technologies like HTML, CSS, Bootstrap,
              Tailwind CSS, JavaScript, Firebase, Redux, React Router, Hooks, and
              React.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 mt-8 md:mt-10 w-full sm:w-auto">
              <button
                className="
          flex items-center justify-center
          w-full sm:w-auto
          px-8 md:px-10
          py-3
          border-2 border-heading
          rounded-full
          text-heading
          font-semibold
          transition-all duration-300
          hover:shadow-[0px_0px_15px_rgba(12,241,153,.8)]
          "
              >
                DOWNLOAD CV
                <BsDownload className="ml-3 text-lg animate-bounce" />
              </button>

              <NavLink to="/skill" className="w-full sm:w-auto">
                <button
                  className="
            flex items-center justify-center
            w-full sm:w-auto
            px-8 md:px-10
            py-3
            border-2 border-heading
            rounded-full
            text-heading
            font-semibold
            transition-all duration-300
            hover:shadow-[0px_0px_15px_rgba(12,241,153,.8)]
            "
                >
                  VIEW MY WORK
                  <FaArrowRightLong className="ml-3" />
                </button>
              </NavLink>
            </div>
          </div>
        </Container>
      </div>
      <About />
      <Education>
        <Work></Work>
      </Education>
      <Work></Work>
      <Footer></Footer>
    </>
  )
}

export default Banner
import banner1 from "../../assets/bannerChat.png"
import Container from '../Container/Container'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { BsDownload } from "react-icons/bs";
import About from '../About/About'
import Footer from "../Footer/Footer";
import Work from "../Skill/Work";
import Education from "../Education/Education";
import { FaArrowRightLong } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { NavLink } from "react-router"

const Banner = () => {

  return (
    <>
      <div className="bg-gray-800 font-primary md:pt-[100px] pt-[100px] md:pb-[50px] pb-[50px] overflow-y-hidden tracking-[1px] ">
        <Container>
          <div className="md:flex md:flex-col items-center md:px-0 px-5">
            <div className="flex items-center md:hidden w-[100%] relative drop-shadow-[0_0px_15px_rgb(12_241_153_/_.15)] mb-5">
              <img src={banner1} alt="" className="rounded-[25px]" />
            </div>
            <div className="md:w-[100%] md:text-center text-center md:mt-0 mt-8">
              <h1 className="md:text-8xl text-[34px] md:w-auto w-[300px] mx-auto font-semibold text-[#0cf199] md:mt-[0px] tracking-tight">Shahzahan Siraj</h1>
              <h3 className="md:text-5xl text-[#c9c4c4] md:mt-2 md:w-auto w-[330px] mx-auto">I'm a <span className="md:text-6xl text-[22px] text-[#eafaf8] md:font-semibold">Frontend Developer</span></h3>
              <p className="md:text-[16px] text-[14px] text-[#c9c4c4] md:w-[780px] mx-auto md:mt-[20px] mt-2 leading-7">I specialize in creating pixel-perfect, high-performance Website & web applications using modern technologies like HTML, CSS, Bootstrap, Tailwind, Javascript, Firebase, Redux, Router, Hooks & React.</p>
              <div className="flex justify-center md:flex-row flex-col md:gap-x-10 gap-x-5 md:mt-5 mt-6  md:gap-y-0 gap-y-5 mb-10">
                <button className="flex items-center  md:px-[32px] px-[80px] md:py-[13px] py-[10px] border-2 border-[#0cf199] rounded-[50px] bg-transparent md:text-[14px] text-[12px] font-semibold text-[rgb(12,241,153)]  transition-all duration-300 ease-in hover:shadow-[0px_0px_10px_rgba(12,241,153,1)] cursor-pointer">
                  <span>DOWNLOAD CV</span>
                  <span><BsDownload className="font-bold text-[18px] animate-bounce md:ml-4 ml-3" /></span>
                </button>
                <div>
                  <NavLink to="/skill">
                    <button className="flex items-center md:px-[32px] px-[90px] md:py-[13px] py-[10px] border-2 border-[#0cf199] rounded-[50px] bg-transparent md:text-[14px] text-[12px] font-semibold text-[rgb(12,241,153)]  transition-all duration-300 ease-in hover:shadow-[0px_0px_10px_rgba(12,241,153,1)] mx-auto  cursor-pointer uppercase">View my work
                      <FaArrowRightLong className="md:ml-2 ml-5 font-bold text-[18px]" />
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="md:block hidden w-full relative py-15 bg-gray-700 mt-25 px-4 rounded-tl-2xl rounded-tr-2xl">
              <div className="absolute bottom-5 left-120">
              <img src={banner1} alt="" className="rounded-[50%] border-20 border-[#1F2937]  w-[35%]" /> 
              </div>
              <div className="flex items-center gap-70 w-[50%]">
               <div className="flex gap-10">
                <div className="flex items-center space-x-2">
                  <h2 className="text-3xl text-white font-bold" >01</h2>
                  <p className="text-[10px] text-[#c9c4c4] w-[80px]">Years of experience</p>
                </div>
                <div className="flex items-center space-x-2">
                  <h2 className="text-3xl text-white font-bold">24</h2>
                  <p className="text-[10px] text-[#c9c4c4] w-[80px]">Projects Completes</p>
                </div>
                <div className="flex items-center space-x-2">
                  <h2 className="text-3xl text-white font-bold">100+</h2>
                  <p className="text-[10px] text-[#c9c4c4] md:w-[80px] w-[80px]">Code commits</p>
                </div>
              </div>
              <div className="font-main text-white md:block hidden w-[50%]">
                <ul className="flex text-[#0cf199] gap-19">
                  <li className="relative border-2 rounded-[50%] p-2 text-[24px] transition-all duration-100 ease-in  hover:shadow-[0px_0px_10px_rgba(12,241,153,1)]">
                    <a href="https://www.linkedin.com/in/shahzahan-siraj-7b5ba7304/"><FaLinkedinIn className='' /></a>
                  </li>
                  <li className="relative border-2 rounded-[50%] p-2 text-[24px] transition-all duration-100 ease-in hover:shadow-[0px_0px_10px_rgba(12,241,153,1)]">
                    <a href="https://www.facebook.com/shahzahan.siraj.92"><FaFacebookF className='text-[24px]' /></a>
                  </li>
                  <li className="relative border-2 rounded-[50%] p-2 text-[24px] transition-all duration-100 ease-in hover:shadow-[0px_0px_10px_rgba(12,241,153,1)]">
                    <a href="https://github.com/shahzahandev"><FaGithub className='' /></a>
                  </li>
                  <li className="relative border-2 rounded-[50%] p-2 text-[24px] transition-all duration-100 ease-in hover:shadow-[0px_0px_10px_rgba(12,241,153,1)]">
                    <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl"><BiLogoGmail className='' /></a>
                  </li>
                </ul>
              </div>
              </div>
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
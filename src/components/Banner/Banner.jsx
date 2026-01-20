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

  let [count1, setCount1] = useState(0)
  let [count, setCount] = useState(0)
  let [count2, setCount2] = useState(0)

  useEffect(() => {
    if (count2 >= 100) {
      return
    }
    let stop2 = setInterval(() => {
      count2++
      setCount2(count2)
    },3)
    return () => clearInterval(stop2)
  })

  useEffect(() => {
    if (count1 >= 1) {
      return
    }
    let stop1 = setInterval(() => {
      count1++
      setCount1(count1)
    }, 150)
    return () => clearInterval(stop1)
  })

  useEffect(() => {
    if (count >= 25) {
      return
    }
    let stop = setInterval(() => {
      count++
      setCount(count)
    }, 25)
    return () => clearInterval(stop)
  })

  return (
    <>
      <div className="bg-gray-800 font-primary md:pt-[100px] pt-[100px] md:pb-[50px] pb-[50px] overflow-y-hidden tracking-[1px] ">
        <Container>
          <div className="md:flex md:flex-col items-center md:px-0 px-5">
            <div className="flex items-center md:hidden w-[100%] relative drop-shadow-[0_0px_15px_rgb(12_241_153_/_.15)] mt-[-20px]">
              <img src={banner1} alt="" className="rounded-[25px]" />
            </div>
            <div className="md:w-[100%] md:text-center text-center md:mt-0 mt-8">
              <h1 className="heading md:text-8xl text-[34px] md:w-auto w-[300px] mx-auto font-semibold text-[#0cf199] md:mt-[0px] mt-[-25px] tracking-tight">Shahzahan Siraj</h1>
              <h3 className="caption md:text-5xl text-[#c9c4c4] md:mt-2 mt-[-5px] md:w-auto w-[330px] mx-auto">I'm a <span className="md:text-6xl text-[22px] text-[#eafaf8] md:font-semibold">Frontend Developer</span></h3>
              <p className="md:text-[16px] text-[14px] text-[#c9c4c4] md:w-[780px] mx-auto md:mt-[20px] mt-1 md:leading-7 leading-5.5 para">I specialize in creating pixel-perfect, high-performance Website & web applications using modern technologies like HTML, CSS, Bootstrap, Tailwind, Javascript, Firebase, Redux, Router, Hooks & React.</p>
              <div className="button flex justify-center md:flex-row flex-col md:gap-x-10 gap-x-5 md:mt-5 mt-2  md:gap-y-0 gap-y-5 md:mb-10">
                <button className="flex items-center md:px-[32px] px-[85px] md:py-[13px] py-[10px] border-2 border-[#0cf199] rounded-[50px] bg-transparent md:text-[14px] text-[12px] font-semibold text-[rgb(12,241,153)]  transition-all duration-300 ease-in hover:shadow-[0px_0px_10px_rgba(12,241,153,1)] cursor-pointer">DOWNLOAD CV
                    <BsDownload className="font-bold text-[18px] animate-bounce md:ml-4 ml-3" />
                </button>
                <div>
                  <NavLink to="/skill">
                    <button className="flex items-center md:px-[32px] px-[80px] md:py-[13px] py-[10px] border-2 border-[#0cf199] rounded-[50px] bg-transparent md:text-[14px] text-[12px] font-semibold text-[rgb(12,241,153)]  transition-all duration-300 ease-in hover:shadow-[0px_0px_10px_rgba(12,241,153,1)] mx-auto  cursor-pointer uppercase">View my work
                      <FaArrowRightLong className="md:ml-2 ml-5 font-bold text-[18px]" />
                    </button>
                  </NavLink>
                </div>
              </div> 
                  <div className=" md:hidden block">
                    <div className="flex gap-x-.75 mt-5 ml-[-10px]">
                    <div className="flex items-center gap-x-1">
                    <h2 className="text-[22px] text-white font-bold w-[30px]" >0{count1}</h2>
                    <p className="text-[10px] text-[#c9c4c4] w-[80px]">Years of experience</p>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <h2 className="text-[22px] text-white font-bold w-[30px]">{count}</h2>
                    <p className="text-[10px] text-[#c9c4c4] w-[80px]">Projects Completes</p>
                  </div>
                  <div className="flex items-center gap-x-4">
                    <h2 className="text-[22px] text-white font-bold  w-[30px]">{count2}+</h2>
                    <p className="text-[10px] text-[#c9c4c4] w-[80px]md: w-[80px]">Code commits</p>
                  </div>
                    </div>
                </div>         
            </div>
            <div className="banner-footer md:block hidden w-full relative py-15 bg-gray-700 mt-25 px-4 rounded-tl-2xl rounded-tr-2xl shadow-[0px_0px_10px_rgba(12,241,153,.25)] ">
              <div className="absolute bottom-5 left-120">
                <img src={banner1} alt="" className="rounded-[50%] border-20 border-[#1F2937] w-[35%] " />
              </div>
              <div className="flex items-center gap-70 w-[50%]">
                <div className="flex gap-10">
                  <div className="flex items-center gap-x-.5">
                    <h2 className="text-3xl text-white font-bold w-[55px]" >0{count1}</h2>
                    <p className="text-[10px] text-[#c9c4c4] w-[80px]">Years of experience</p>
                  </div>
                  <div className="flex items-center gap-x-.5">
                    <h2 className="text-3xl text-white font-bold w-[55px]">{count}</h2>
                    <p className="text-[10px] text-[#c9c4c4] w-[80px]">Projects Completes</p>
                  </div>
                  <div className="flex items-center gap-x-.5">
                    <h2 className="text-3xl text-white font-bold w-[55px]">{count2}</h2>
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
                      <a href=""><FaTwitter className='' /></a>
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
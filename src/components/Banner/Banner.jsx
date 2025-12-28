import banner1 from "../../assets/bannerChat.png"
import Container from '../Container/Container'
import { FaFacebookF, FaTwitter} from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { BsDownload } from "react-icons/bs";
import About from '../About/About'
import Footer from "../Footer/Footer";
import Work from "../Skill/Work";
import Education from "../Education/Education";

const Banner = () => {

  return (
    <>
      <div className="bg-gray-800 font-primary md:pt-[200px] pt-[150px] md:pb-[60px] pb-[50px] overflow-y-scroll">
        <Container>
          <div className="md:flex md:justify-between items-center md:tracking-[1.5px] tracking-[1px] md:px-0 px-5 scroll- ">
            <div className="flex items-center md:hidden md:w-[80%] relative drop-shadow-[0_5px_25px_rgb(12_241_153_/_.5)]">
              <img src={banner1} alt="" className="rounded-[50%]" />
              <div className="cricle absolute w-full h-full top-0 left-0 rounded-[50%] border-10 border-t-[rgb(12,241,153)] border-b-[#eeeeee] border-l-[#eeeeee] border-r-[#0cf199]"></div>
            </div>
            <div className="md:w-[70%]">
              <h4 className="md:text-[24px] text-[#c9c4c4]">Hello, It's Me</h4>
              <h1 className=" md:tracking-[5px] tracking-[2px] md:text-6xl text-[36px] md:w-auto w-[300px] font-semibold text-[#0cf199] md:mt-[15px]">Shahzahan Siraj</h1>
              <h3 className="md:text-3xl text-[#c9c4c4] md:mt-[20px] md:w-auto w-[400px]">And I'm a <span className="md:text-4xl text-2xl text-[#eafaf8]">Frontend Developer</span></h3>
              <p className="md:text-[16px] text-[14px] text-[#c9c4c4] md:w-[500px] w-[350px] md:mt-[20px] mt-4 tracking-[2px] leading-7">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi nihil labore quam fugit similique ipsam quos odio saepe? Aliquid quos error recusandipsam quos</p>
              <div className="flex md:flex-row flex-col items-center md:mt-[40px] mt-5 md:space-x-10 md:space-y-0 space-y-5">
                <button className="flex items-center md:px-[32px] px-[100px] md:py-[13px] py-[10px] border-2 border-[#0cf199] rounded-[50px] bg-transparent text-[14px] font-semibold text-[#0cf199]  transition-all duration-300 ease-in hover:border-white hover:text-white md:w-auto w-[370px]">DOWNLOAD CV
                  <BsDownload className="md:ml-2 ml-5 font-bold text-[18px] animate-bounce" />
                </button>
                <ul className="flex md:space-x-[50px] space-x-10 text-[#0cf199]">
                  <li className="border-2 rounded-[50%] p-2 text-[24px] transition-all duration-200 ease-in hover:text-white">
                    <a href=""><FaFacebookF className='text-[24px]' /></a>
                  </li>
                  <li className="border-2 rounded-[50%] p-2 text-[24px] transition-all duration-200 ease-in hover:text-white">
                    <a href=""><FaTwitter className='' /></a>
                  </li>
                  <li className="border-2 rounded-[50%] p-2 text-[24px] transition-all duration-200 ease-in hover:text-white">
                    <a href=""><FaLinkedinIn className='' /></a>
                  </li>
                  <li className="border-2 rounded-[50%] p-2 text-[24px] transition-all duration-200 ease-in hover:text-white">
                    <a href="https://github.com/shahzahandev"><FaGithub className='' /></a>
                  </li>
                </ul>
              </div>
              <div className="font-main text-white flex md:flex-row flex-col items-center md:mt-15 mt-8  md:space-y-0 space-y-5">
                <div className="flex md:flex-row space-x-10 items-center">
                  <div className="flex items-center space-x-2">
                    <h2 className="md:text-4xl text-3xl font-semibold" >01</h2>
                    <p className=" md:text-[12px] text-[10px] text-[#c9c4c4] md:w-[120px] w-[80px]">Years of experience</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <h2 className="md:text-4xl text-3xl font-semibold">12</h2>
                    <p className=" md:text-[12px] text-[10px] text-3xl text-[#c9c4c4] md:w-[120px] w-[80px]">Projects Completes</p>
                  </div>
                </div>
                <div className="flex md:flex-row space-x-10 items-center">
                  <div className="flex items-center space-x-2">
                    <h2 className="md:text-4xl text-3xl font-semibold">06</h2>
                    <p className=" md:text-[12px] text-[10px] text-[#c9c4c4] md:w-[120px] w-[80px]">Technologies mastered </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <h2 className="md:text-4xl text-3xl font-semibold">120</h2>
                    <p className=" md:text-[12px] text-[10px] text-[#c9c4c4] md:w-[100px] w-[80px]">Code commits</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:block hidden w-[30%] relative drop-shadow-[0_5px_25px_rgb(12_241_153_/_.5)]">
              <img src={banner1} alt="" className="rounded-[50%]" />
              <div className="cricle absolute w-full h-full top-0 left-0 rounded-[50%] border-10 border-t-[rgb(12,241,153)] border-b-[#eeeeee] border-l-[#eeeeee] border-r-[#0cf199]"></div>
            </div>
          </div>
        </Container>
      </div>
     <About/>
    <Education>
         <Work></Work>
     <Footer></Footer>
    </Education>
     <Work></Work>
     <Footer></Footer>
    </>
  )
}

export default Banner
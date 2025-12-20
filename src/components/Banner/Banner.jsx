import banner1 from "../../assets/banner1.jpg"
import Container from '../Container/Container'
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { BsDownload } from "react-icons/bs";

const Banner = () => {
  return (
    <>
      {/* <Navbar></Navbar> */}
      <div className="bg-gray-800 font-primary pt-[200px] pb-[60px]">
        <Container>
          <div className="flex justify-between items-center tracking-[1.5px]">
            <div className="w-[70%]">
              <h4 className="text-[24px]  text-[#c9c4c4]">Hello, It's Me</h4>
              <h1 className=" tracking-[5px] text-6xl font-semibold text-[#0cf199] mt-[15px]">Shahzahan Siraj</h1>
              <h3 className="text-3xl text-[#c9c4c4] mt-[20px]">And I'm a <span className="text-4xl text-[#eafaf8]">Frontend Developer</span></h3>
              <p className="text-[16px] text-[#c9c4c4] w-[500px] mt-[20px] tracking-[2px] leading-7">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi nihil labore quam fugit similique ipsam quos odio saepe? Aliquid quos error recusandipsam quos  odio sae</p>
              <div className="flex items-center ] mt-[40px] space-x-10">
                <button className="flex items-center px-[32px] py-[13px] border-2 border-[#0cf199] rounded-[50px] bg-transparent text-[14px] font-semibold text-[#0cf199]  transition-all duration-300 ease-in hover:border-white hover:text-white">DOWNLOAD CV <BsDownload className="ml-2 font-bold text-[18px] animate-bounce" />
                </button>
                <ul className="flex space-x-[50px] text-[#0cf199]">
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
                    <a href=""><FaGithub className='' /></a>
                  </li>
                </ul>
              </div>
              <div className="font-main text-white flex items-center justify-between mt-15">
                <div className="flex items-center space-x-2">
                  <h2 className="text-4xl font-semibold">01</h2>
                  <p className=" text-[12px] [#c9c4c4] w-[120px]">Years of experience</p>
                </div>
                <div className="flex items-center space-x-2">
                  <h2 className="text-4xl font-semibold">12</h2>
                  <p className=" text-[12px] [#c9c4c4] w-[120px]">Projects Completes</p>
                </div>
                <div className="flex items-center space-x-2">
                  <h2 className="text-4xl font-semibold">06</h2>
                  <p className=" text-[12px] [#c9c4c4] w-[120px]">Technologies mastered </p>
                </div>
                <div className="flex items-center space-x-2">
                  <h2 className="text-4xl font-semibold">120</h2>
                  <p className=" text-[12px] [#c9c4c4] w-[100px]">Code commits</p>
                </div>
              </div>
            </div>
            <div className="w-[30%]">
              <img src={banner1} alt="" className="rounded-[50%] border-4 border-[#0cf199]" />
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Banner
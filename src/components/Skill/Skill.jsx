import Container from '../Container/Container'
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa6";
import { FaCss3 } from "react-icons/fa";
import { AiOutlineJavaScript } from "react-icons/ai";
import { FaBootstrap } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import Navbar from '../Navbar/Navbar';



const Skill = () => {
  return (
    <>
    {/* <Navbar></Navbar> */}
     <div className='pt-[125px] pb-[39px] bg-gray-800 font-main'>
        <Container>
            <h2 className=' uppercase text-4xl text-[#06fada] font-bold text-center mb-[30px]'>ski<span className='text-[#ffff00]'>ll</span></h2>
            <div className='flex justify-between'>
                <div  className='border-4 border-[#06fada] py-[40px] px-[40px] w-[260px] rounded-[15px]'>
                   <IoLogoFigma className='text-white text-6xl ml-[50px]'/>
                    <h2 className='text-3xl font-bold capitalize text-[#ffff00] text-center mt-[10px]'>figma</h2>       
                    <div className='bg-white h-4 rounded-full  mt-[15px]'>
                        <div className='bg-[#06fada] w-[80%] h-full'></div>
                    </div>
                </div>
                <div  className='border-4 border-[#06fada] py-[40px] px-[40px] w-[260px] rounded-[15px]'>
                    <FaHtml5 className='text-white text-6xl ml-[50px]'/>
                    <h2 className='text-3xl font-bold capitalize text-[#ffff00] text-center mt-[10px]'>html</h2>       
                    <div className='bg-white h-4 rounded-full  mt-[15px]'>
                        <div className='bg-[#06fada] w-[95%] h-full'></div>
                    </div>
                </div>
                <div  className='border-4 border-[#06fada] py-[40px] px-[40px] w-[260px] rounded-[15px]'>
                    <FaCss3 className='text-white text-6xl ml-[50px]'/>
                    <h2 className='text-3xl font-bold capitalize text-[#ffff00] text-center mt-[10px]'>css</h2>       
                    <div className='bg-white h-4 rounded-full  mt-[15px]'>
                        <div className='bg-[#06fada] w-[90%] h-full'></div>
                    </div>
                </div>
                <div  className='border-4 border-[#06fada] py-[40px] px-[40px] w-[260px] rounded-[15px]'>
                    <AiOutlineJavaScript className='text-white text-6xl ml-[50px]'/>
                    <h2 className='text-3xl font-bold capitalize text-[#ffff00] text-center mt-[10px]'>javascript</h2>       
                    <div className='bg-white h-4 rounded-full  mt-[15px]'>
                        <div className='bg-[#06fada] w-[80%] h-full  mt-[15px]'></div>
                    </div>
                </div>
            </div>


             <div className='flex justify-between mt-[50px]'>
                <div className='border-4 border-[#06fada] py-[40px] px-[40px] w-[260px] rounded-[15px]'>
                     <RiTailwindCssFill className='text-white text-6xl ml-[50px]'/>
                    <h2 className='text-3xl font-bold capitalize text-[#ffff00] text-center mt-[10px]'>tailwind</h2>       
                    <div className='bg-white h-4 rounded-full  mt-[15px]'>
                        <div className='bg-[#06fada] w-[85%] h-full'></div>
                    </div>
                </div>
                <div className='border-4 border-[#06fada] py-[40px] px-[40px] w-[260px] rounded-[15px]'>
                    <FaBootstrap className='text-white text-6xl ml-[50px]'/>
                    <h2 className='text-3xl font-bold capitalize text-[#ffff00] text-center mt-[10px]'>bootstrap</h2>       
                    <div className='bg-white h-4 rounded-full  mt-[15px]'>
                        <div className='bg-[#06fada] w-[87%] h-full'></div>
                    </div>
                </div>
                <div className='border-4 border-[#06fada] py-[40px] px-[40px] w-[260px] rounded-[15px]'>
                    <FaReact className='text-white text-6xl ml-[50px]'/>
                    <h2 className='text-3xl font-bold capitalize text-[#ffff00] text-center mt-[10px]'>react</h2>       
                    <div className='bg-white h-4 rounded-full  mt-[15px]'>
                        <div className='bg-[#06fada] w-[80%] h-full'></div>
                    </div>
                </div>
                 <div className='border-4 border-[#06fada] py-[40px] px-[40px] w-[260px] rounded-[15px]'>
                   <FaGithub className='text-white text-6xl ml-[50px]'/>
                    <h2 className='text-3xl font-bold capitalize text-[#ffff00] text-center mt-[10px]'>gitHub</h2>       
                    <div className='bg-white h-4 rounded-full  mt-[15px]'>
                        <div className='bg-[#06fada] w-[85%] h-full'></div>
                    </div>
                </div>
            </div>
        </Container>
    </div>
    </>
   
  )
}

export default Skill
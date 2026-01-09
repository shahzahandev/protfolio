import { FaLongArrowAltRight } from "react-icons/fa";
import Container from '../Container/Container'
import { NavLink } from "react-router";

const About = () => {
  return (
   <>
    <div className='relative bg-gray-800 md:pt-[260px] pt-[50px] md:pb-[180px] pb-[50px] font-primary tracking-[1px] '>
        <Container>
            <div className='md:flex md:flex-row flex-col md:justify-between items-center md:space-x-[150px] '>
                <div className='md:w-[50%] border-b-2 text-white/50 md:pb-10 pb-5'>
                 <div className="flex items-center justify-between">
                  <h3 className='md:text-8xl text-6xl text-white uppercase font-bold'>01</h3>
                  <NavLink to="/footer">
                       <FaLongArrowAltRight className="bg-white text-[#3b3434] md:w-[60px] w-[50px] md:h-[60px] h-[50px] rounded-[50%] hover:bg-white/80 transition-all delay-100 text-[200px] rotate-40 hover:rotate-0" />
                  </NavLink>
                 </div>
                    <h2 className='md:text-4xl text-3xl text-[#0cf199] font-bold mt-[20px]'>Web Design</h2>
                    <p className='md:mt-[20px] mt-[10px] md:text-[16px] text-[14px] font-medium text-[#c9c4c4]'>I provide modern, responsive web design tailored to your business goals. My designs focus on clean layouts, user-friendly interfaces, and performance to help you attract and convert visitors effectively.</p>
                </div>
                 <div className='md:w-[50%] border-b-2 text-white/50 md:pb-10 pb-5 md:mt-0 mt-15'>
                 <div className="flex items-center justify-between">
                  <h3 className='md:text-8xl text-6xl text-white uppercase font-bold'>02</h3>
                    <NavLink to="/footer">
                       <FaLongArrowAltRight className="bg-white text-[#3b3434] md:w-[60px] w-[50px] md:h-[60px] h-[50px] rounded-[50%] hover:bg-white/80 transition-all delay-100 text-[200px] rotate-40 hover:rotate-0" />
                  </NavLink>
                 </div>
                    <h2 className='md:text-4xl text-3xl text-[#0cf199] font-bold  mt-[20px]'>Web Development</h2>
                    <p className='md:mt-[20px] mt-[10px] md:text-[16px] text-[14px] font-medium text-[#c9c4c4]'>I turn designs into high-quality, dynamic websites with clean code and optimized performance. Each project is built to support growth and deliver real results.</p>
                </div>
            </div>
        </Container>
    </div>
   </>
  )
}

export default About
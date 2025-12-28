import { FaLongArrowAltRight } from "react-icons/fa";
import Container from '../Container/Container'

const About = () => {
  return (
   <>
    <div className='relative bg-gray-800 md:pt-[250px] pt-[150px] md:pb-[150px] pb-[130px] font-primary md:tracking-[1.5px] tracking-[1px]'>
        <Container>
            <div className='md:flex md:flex-row flex-col md:justify-between items-center md:space-x-[150px]'>
                <div className='md:w-[50%] border-b-2 text-white/50 md:pb-10 pb-5'>
                 <div className="flex items-center justify-between">
                  <h3 className='md:text-8xl text-6xl text-white uppercase font-bold'>01</h3>
                  <FaLongArrowAltRight  className="bg-white text-[#3b3434] md:w-[60px] w-[50px] md:h-[60px] h-[50px] rounded-[50%] hover:bg-white/80 transition-all delay-100 text-[200px] rotate-40 hover:rotate-0"/>
                 </div>
                    <h2 className='md:text-4xl text-3xl text-[#0cf199] font-bold mt-[20px] tracking-[3px]'>Web Design</h2>
                    <p className='md:mt-[20px] mt-[10px] md:text-[16px] text-[14px] font-medium text-[#c9c4c4]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere animi voluptate harum iste id non et temporibus qui nostrum, dolorum, illum quia aspernatur, sapiente vero consectetur accusamus magni dignptates consequatur in quae officiis dolorem deleniti amet?</p>
                </div>
                 <div className='md:w-[50%] border-b-2 text-white/50 md:pb-10 pb-5 md:mt-0 mt-10'>
                 <div className="flex items-center justify-between">
                  <h3 className='md:text-8xl text-6xl text-white uppercase font-bold'>02</h3>
                  <FaLongArrowAltRight  className="bg-white text-[#3b3434] md:w-[60px]  w-[50px] md:h-[60px] h-[50px] rounded-[50%] hover:bg-white/80 transition-all delay-100 text-[200px] rotate-40 hover:rotate-0"/>
                 </div>
                    <h2 className='md:text-4xl text-3xl text-[#0cf199] font-bold  mt-[20px] tracking-[3px]'>Web Development</h2>
                    <p className='md:mt-[20px] mt-[10px] md:text-[16px] text-[14px] font-medium text-[#c9c4c4]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere animi voluptate harum iste id non et temporibus qui nostrum, dolorum, illum quia aspernatur, sapiente vero consectetur accusamus magni dignptates consequatur in quae officiis dolorem deleniti amet?</p>
                </div>
            </div>
        </Container>
    </div>
   </>
  )
}

export default About
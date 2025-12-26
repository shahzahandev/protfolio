import { FaLongArrowAltRight } from "react-icons/fa";
import Container from '../Container/Container'

const About = () => {
  return (
   <>
    <div className='relative bg-gray-800 pt-[250px] pb-[150px] font-primary tracking-[1.5px]'>
        <Container>
            <div className='flex justify-between items-center space-x-[150px]'>
                <div className='w-[50%] border-b-2 text-white/50 pb-10'>
                 <div className="flex items-center justify-between">
                  <h3 className='text-8xl text-white uppercase font-bold'>01</h3>
                  <FaLongArrowAltRight  className="bg-white text-[#3b3434] w-[60px] h-[60px] rounded-[50%] hover:bg-white/80 transition-all delay-100 text-[200px] rotate-40 hover:rotate-0"/>
                 </div>
                    <h2 className='text-4xl text-[#0cf199] font-bold  mt-[20px] tracking-[3px]'>Web Design</h2>
                    <p className='mt-[20px] text-[16px] font-medium text-[#c9c4c4]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere animi voluptate harum iste id non et temporibus qui nostrum, dolorum, illum quia aspernatur, sapiente vero consectetur accusamus magni dignptates consequatur in quae officiis dolorem deleniti amet?</p>
                </div>
                 <div className='w-[50%] border-b-2 text-white/50 pb-10'>
                 <div className="flex items-center justify-between">
                  <h3 className='text-8xl text-white uppercase font-bold'>02</h3>
                  <FaLongArrowAltRight  className="bg-white text-[#3b3434] w-[60px] h-[60px] rounded-[50%] hover:bg-white/80 transition-all delay-100 text-[200px] rotate-40 hover:rotate-0"/>
                 </div>
                    <h2 className='text-4xl text-[#0cf199] font-bold  mt-[20px] tracking-[3px]'>Web Development</h2>
                    <p className='mt-[20px] text-[16px] font-medium text-[#c9c4c4]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere animi voluptate harum iste id non et temporibus qui nostrum, dolorum, illum quia aspernatur, sapiente vero consectetur accusamus magni dignptates consequatur in quae officiis dolorem deleniti amet?</p>
                </div>
            </div>
        </Container>
    </div>
   </>
  )
}

export default About
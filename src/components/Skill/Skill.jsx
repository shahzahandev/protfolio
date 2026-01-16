import Container from '../Container/Container'
import { FiActivity  } from "react-icons/fi";
import project1 from "../../assets/postman.png"
import { FaGithub } from "react-icons/fa";

const Skill = () => {
    return (
        <>
            <div className='md:pt-[200px] pt-[80px] md:pb-[150px] pb-[80px] bg-gray-800 font-primary tracking-[1px]'>
                <Container>
                    <div className='flex md:justify-between md:flex-row flex-col items-center md:space-x-[50px] space-y-0'>
                        <div className='md:w-[50%] w-[100%] md:border-b-2 border-none text-white/50 md:pb-10 pb-5 md:px-0'>
                            <h3 className='md:text-8xl text-4xl text-white uppercase font-bold'>01</h3>
                            <h2 className='md:text-4xl text-2xl text-[#0cf199] font-bold md:mt-[20px] mt-2'>Chating Application</h2>
                            <p className='md:mt-[20px] mt-[10px] md:text-[16px] text-[12px] font-medium text-[#c9c4c4] md:w-auto w-[350px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere animi voluptate harum iste id non et temporibusagni dignptates consequatur in quae officiis dolorem deleniti?</p>
                            <div className='md:mt-5 mt-2 flex items-center space-x-10'>
                                <h2 className='md:text-[18px] text-[12px] font-bold text-[#0cf199] tracking-[2px]'>Taiwind</h2>
                                <h2 className='md:text-[18px] text-[12px] font-bold text-[#0cf199] tracking-[2px]'>React</h2>
                                 <h2 className='md:text-[18px] text-[12px] font-bold text-[#0cf199] tracking-[2px]'>Firebase</h2>
                            </div>
                            <div className='flex items-center space-x-10 md:mt-8 mt-2'>
                                <div className="flex justify-center items-center p-2 rounded-[50%]  text-[24px]  transition-all duration-200 ease-in border-2 border-[#0cf199] hover:shadow-[0px_0px_10px_rgba(12,241,153,.5)]">
                                    <a  href="https://github.com/shahzahandev/postman516"><FaGithub className='text-2xl text-[#0cf199]' /></a>
                                </div>
                                 <a href="https://postman516-by-shahzahan.vercel.app">
                                <div className='flex justify-center items-center'>
                                   <div  className="text-center font-semibold text-[14px] bg-gray-700 rounded-[10px] text-[#0cf199] hover:shadow-[0px_0px_10px_rgba(12,241,153,.5)] hover:bg-transparent transition-all delay-100 p-2">Live </div>
                                </div>
                                </a>
                            </div>
                        </div>
                        <div className='md:w-[50%]'>
                            <img src={project1} alt="" className='md:h-[500px] h-[350px] border-15 border-white/90' />
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Skill
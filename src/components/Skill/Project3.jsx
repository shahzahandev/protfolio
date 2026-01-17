import Container from '../Container/Container'
import project3 from "../../assets/project3.png"
import { FaExternalLinkAlt } from "react-icons/fa";

const Project3 = () => {
    return (
        <>
            <div className='md:pt-[200px] pt-[80px] md:pb-[150px] pb-[80px] bg-gray-800 font-primary tracking-[1px]'>
                <Container>
                    <div className='flex md:justify-between md:flex-row flex-col items-center md:space-x-[50px] space-y-0'>
                        <div className='md:w-[50%] md:border-b-2 text-white/50 md:pb-10 pb-5 md:px-0'>
                            <h3 className='md:text-8xl text-4xl text-white uppercase font-bold'>07</h3>
                            <h2 className='md:text-4xl text-2xl text-[#0cf199] font-bold md:mt-[20px] mt-2'> Guess Game</h2>
                            <p className='md:mt-[20px] mt-[10px] md:text-[16px] text-[12px] font-medium text-[#c9c4c4] md:w-auto w-[350px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere voluptate harum iste id non et temporibusagni dignptates consequatur in quae officiis dolorem deleniti amet?</p>
                            <div className='md:mt-5 mt-2 flex items-center space-x-10 text-[#c9c4c4]/50'>
                                <h2 className='md:text-[18px] text-[12px] font-semibold'>HTML</h2>
                                <h2 className='md:text-[18px] text-[12px] font-semibold'>CSS</h2>
                                <h2 className='md:text-[18px] text-[12px] font-semibold'>JavaScript</h2>
                            </div>
                            <div className='flex items-center space-x-10 md:mt-8 mt-2 text-[#c9c4c4]/50'>
                                <div className="flex justify-center items-center gap-x-2 md:text-[14px] font-semibold text-[10px] text-[#0cf199] transition-all duration-200 ease-in ">
                                    <a href="https://github.com/shahzahandev/guess"><FaExternalLinkAlt className='md:text-2xl text-[16px]  text-[#0cf199]' /></a>
                                    <a href="https://github.com/shahzahandev/guess"><h6>Git Code</h6></a>
                                </div>
                                <a href="https://guess-mocha.vercel.app">
                                    <div className='flex justify-center items-center'>
                                        <div className="text-center font-semibold md:text-[14px] text-[10px]  rounded-[10px] text-[#0cf199] transition-all delay-100 p-2">Live project  </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className='md:w-[50%]'>
                            <img src={project3} alt="" className='md:h-[500px] h-[350px] border-15 border-white/90' />
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Project3
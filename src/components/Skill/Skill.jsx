import Container from '../Container/Container'
import { FaLongArrowAltRight } from "react-icons/fa";
import project1 from "../../assets/postman.png"
import { FaGithub } from "react-icons/fa";

const Skill = () => {
    return (
        <>
            <div className='md:pt-[200px] pt-[150px] md:pb-[150px] pb-[120px] bg-gray-800 font-primary md:tracking-[1.5px] tracking-normal'>
                <Container>
                    <div className='flex md:justify-between md:flex-row flex-col items-center md:space-x-[50px] space-y-15'>
                        <div className='md:w-[50%] border-b-2 text-white/50 md:pb-10 pb-5 md:px-0'>
                            <h3 className='md:text-8xl text-6xl text-white uppercase font-bold'>01</h3>
                            <h2 className='md:text-4xl text-2xl text-[#0cf199] font-bold  mt-[20px] tracking-[3px]'>Frontend Project <span className='md:text-2xl text-[16px] md:ml-3 tracking-[1px] inline-block'>( Chating App )</span></h2>
                            <p className='md:mt-[20px] mt-[10px] md:text-[16px] text-[14px] font-medium text-[#c9c4c4] md:w-auto w-[320px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere animi voluptate harum iste id non et temporibusagni dignptates consequatur in quae officiis dolorem deleniti amet?</p>
                            <div className='mt-5 flex items-center space-x-10'>
                                <h2 className='md:text-2xl text-[14px] font-bold text-[#0cf199] tracking-[2px]'>Taiwind</h2>
                                <h2 className='md:text-2xl text-[14px] font-bold text-[#0cf199] tracking-[2px]'>React</h2>
                                 <h2 className='md:text-2xl text-[14px] font-bold text-[#0cf199] tracking-[2px]'>Firebase</h2>
                            </div>
                            <div className='flex items-center space-x-5 md:mt-8 mt-5'>
                                <FaLongArrowAltRight className="bg-gray-700 text-white md:w-[50px] w-[40px] md:h-[50px] h-[40px] rounded-[50%] hover:bg-[#0cf199] hover:text-black transition-all delay-100 rotate-320 hover:rotate-360 p-2" />
                                <div className="flex justify-center items-center md:w-[50px] w-[40px] md:h-[50px] h-[40px] rounded-[50%] p-2 text-[24px] bg-gray-700 transition-all duration-200 ease-in hover:bg-[#0cf199]">
                                    <a href="https://postman516-by-shahzahan.vercel.app"><FaGithub className='text-3xl text-white hover:text-black' /></a>
                                </div>
                            </div>
                        </div>
                        <div className='md:w-[50%]'>
                            <img src={project1} alt="" className='md:h-[500px] h-[350px]' />
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Skill
import Container from '../Container/Container'
import { NavLink } from 'react-router'
import { FcGraduationCap } from "react-icons/fc";

const EducationInfo = () => {
    return (
        <div className='md:pt-[80px] pt-[50px] pb-[48px] bg-gray-800 font-primary tracking-[1px]'>
            <Container>
                <div className='flex md:flex-row flex-col justify-between text-white md:mt-[50px]'>
                    <div className='text-white flex flex-col md:w-[30%] md:py-15 py-10 md:px-10 md:space-y-10 space-y-5 bg-transparent rounded-tl-2xl rounded-bl-2xl'>
                        <div>
                            <h2 className="md:text-4xl text-3xl font-semibold text-[#0cf199] md:mb-5 mb-2">Why hire me?</h2>
                            <p className="md:text-[14px] text-[13px] text-[#c9c4c4] md:w-[300px] w-auto md:mt-[20px] mt-[10px] md:leading-7 leading-6">I builds fast, responsive, and modern websites using React and modern tools, delivering clean code, great UI, and reliable results clients can trust.</p>
                        </div>
                        <NavLink className={(e) => { return e.isActive ? "white" : "" }} to="/educationSkill"><button className="w-full py-[10px] border-2 border-[#0cf199] rounded-[15px] bg-transparent md:text-[24px] font-semibold text-[#0cf199] transition-all duration-100 ease-in  cursor-pointer hover:shadow-[0px_0px_10px_rgba(12,241,153,1)]">Skill </button></NavLink>
                        <NavLink className={(e) => { return e.isActive ? "white" : "" }} to="/educationInfo"><button className="w-full py-[10px] border-2 border-[#0cf199] rounded-[15px] md:text-[24px] font-semibold text-black bg-[#0cf199] transition-all duration-100 ease-in cursor-pointer">Education</button></NavLink>
                        <NavLink className={(e) => { return e.isActive ? "white" : "" }} to="/Experience"><button className="w-full py-[10px] border-2 border-[#0cf199] rounded-[15px] bg-transparent md:text-[24px] font-semibold text-[#0cf199] transition-all duration-100 ease-in cursor-pointer hover:shadow-[0px_0px_10px_rgba(12,241,153,1)]">Experience</button></NavLink>
                        <NavLink className={(e) => { return e.isActive ? "white" : "" }} to="/Info"><button className="w-full py-[10px] border-2 border-[#0cf199] rounded-[15px] bg-transparent md:text-[24px] font-semibold text-[#0cf199] transition-all duration-100 ease-in cursor-pointer hover:shadow-[0px_0px_10px_rgba(12,241,153,1)]">About</button></NavLink>
                    </div>
                    <div className='md:w-[70%] bg-transparent md:px-10 rounded-tr-2xl rounded-br-2xl md:py-15'>
                        <div className='md:px-5 md:py-2'>
                            <h2 className="md:text-3xl text-2xl font-semibold text-[#0cf199] md:mb-5">My Education</h2>
                            <p className="md:text-[14px] text-[13px] text-[#c9c4c4] md:mt-[20px] mt-[10px] md:leading-7 leading-6 mb-5">I have completed my Bachelor’s and Master’s degrees, gaining strong academic knowledge, critical thinking skills, and a solid professional foundation.</p>
                        </div>
                        <div className='h-[450px] overflow-y-scroll md:px-15  md:py-2'>
                            <div className='flex flex-col justify-between text-white md:space-y-[20px] space-y-[20px]'>
                                <div className='flex w-[100%] bg-gray-200/10 px-5 py-8 rounded-2xl cursor-pointer transition-all duration-100 hover:shadow-[0px_0px_10px_rgba(12,241,153,.5)]'>
                                    <div className='w-[20%]'>
                                        <FcGraduationCap className='md:text-8xl text-5xl ' />
                                    </div>
                                    <div className='w-[80%]'>
                                        <h3 className='md:text-[28px] text-[18px] text-[#0cf199] font-semibold'>Master's of Arts (M.A)</h3>
                                        <h2 className='md:text-[16px] text-[10px] text-white/80 capitalize font-medium md:w-[350px] w-[220px]'>govt. titumir college, Mohakhali, Dhaka, Bangladesh.</h2>
                                        <h2 className='md:text-[16px] text-[10px] text-[#c9c4c4]/80 capitalize font-medium'><i>2024-25</i></h2>
                                        <h2 className='md:text-[14px] text-[8px] text-[#c9c4c4] capitalize font-medium md:w-[350px] w-[220px] mt-1'>Completed graduation in Bangla Literature with strong skills in analysis and critical thinking.</h2>
                                    </div>
                                </div>
                                <div className='flex w-[100%] bg-gray-200/10 px-5 py-8 rounded-2xl cursor-pointer transition-all duration-100 hover:shadow-[0px_0px_10px_rgba(12,241,153,.5)]'>
                                    <div className='w-[20%]'>
                                        <FcGraduationCap className='md:text-8xl text-5xl' />
                                    </div>
                                    <div className='w-[80%]'>
                                        <h3 className='md:text-[28px] text-[18px] text-[#0cf199] font-semibold'>Bachelor of Arts (B.A)</h3>
                                        <h2 className='md:text-[16px] text-[10px] text-white/80 capitalize font-medium md:w-[350px] w-[220px]'>govt. titumir college, Mohakhali, Dhaka, Bangladesh.</h2>
                                        <h2 className='md:text-[16px] text-[10px] text-[#c9c4c4]/80 capitalize font-medium'><i>2019-23</i></h2>
                                        <h2 className='md:text-[14px] text-[8px] text-[#c9c4c4] capitalize font-medium md:w-[350px] w-[220px]
                                        mt-1'>Graduated in Bangla Literature, with a deep interest in language, culture, and literary studies</h2>
                                    </div>
                                </div>
                                <div className='flex w-[100%] bg-gray-200/10 px-5 py-8 rounded-2xl cursor-pointer transition-all duration-100 hover:shadow-[0px_0px_10px_rgba(12,241,153,.5)]'>
                                    <div className='w-[20%]'>
                                        <FcGraduationCap className='md:text-8xl text-5xl' />
                                    </div>
                                    <div className='w-[80%]'>
                                        <h3 className='md:text-[28px] text-[18px] text-[#0cf199] font-semibold w-[100%] leading-7'>Higher Secondary Certificate(H.S.C)</h3>
                                        <h2 className='md:text-[16px] text-[10px] text-white/80 capitalize font-medium md:w-[350px] w-[220px]'>Samir Uddin Smrity College, Thakurgaon, Dhaka, Bangladesh.</h2>
                                        <h2 className='md:text-[16px] text-[10px] text-[#c9c4c4]/80 capitalize font-medium'><i>2017-18</i></h2>
                                        <h2 className='md:text-[14px] text-[8px] text-[#c9c4c4] capitalize font-medium md:w-[350px] w-[220px]
                                        mt-1'>Successfully completed HSC in Humanities with focus on social sciences and literature.</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                </div>
            </Container>
        </div>
    )
}

export default EducationInfo
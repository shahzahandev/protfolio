import React from 'react'
import { NavLink } from 'react-router'
import Container from '../Container/Container'

const Info = () => {
    return (
        <div>
            <div className='md:pt-[80px] pt-[130px] pb-[48px] bg-gray-800 font-primary tracking-[2px]'>
                <Container>
                    <div className='flex md:flex-row flex-col justify-between text-white md:mt-[50px]'>
                        <div className='text-white flex flex-col md:w-[30%] md:py-15 py-10 md:px-10 md:space-y-10 space-y-5 bg-transparent rounded-tl-2xl rounded-bl-2xl'>
                            <div>
                                <h2 className="md:tracking-[5px] tracking-[3px] md:text-4xl text-3xl font-semibold text-[#0cf199] md:mb-5 mb-2">Why hire me?</h2>
                                <p className="md:text-[14px] text-[13px] text-[#c9c4c4] md:w-[300px] w-[350px] md:mt-[20px] mt-[10px] tracking-[2px] md:leading-7 leading-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ius ibero magnam iste dignissimos.</p>
                            </div>
                            <button className="px-[20px] py-[10px] border-2 border-[#0cf199] rounded-[15px] md:text-[24px] font-semibold text-[#0cf199] bg-transparent transition-all duration-300 ease-in hover:border-white hover:text-white"><NavLink className={(e) => { return e.isActive ? "white" : "" }} to="/educationInfo">Education</NavLink></button>
                            <button className="px-[20px] py-[10px] border-2 border-[#0cf199] rounded-[15px] bg-transparent md:text-[24px] font-semibold text-[#0cf199] transition-all duration-300 ease-in hover:border-white hover:text-white"><NavLink className={(e) => { return e.isActive ? "white" : "" }} to="/educationSkill">Skill</NavLink> </button>
                            <button className="px-[20px] py-[10px] border-2 border-[#0cf199] rounded-[15px] bg-transparent md:text-[24px] font-semibold text-[#0cf199] transition-all duration-300 ease-in hover:border-white hover:text-white"><NavLink className={(e) => { return e.isActive ? "white" : "" }} to="/Experience">Experience</NavLink></button>
                            <button className="px-[20px] py-[10px] border-2 border-[#0cf199] rounded-[15px] bg-[#0cf199] md:text-[24px] font-semibold text-[#0cf199] transition-all duration-300 ease-in hover:border-white hover:text-white"><NavLink className={(e) => { return e.isActive ? "white" : "" }} to="/Info">About</NavLink></button>
                        </div>
                        <div className='md:w-[70%] bg-transparent md:px-10 rounded-tr-2xl rounded-br-2xl md:py-15'>
                              <div className='md:px-5 md:py-2'>
                            <h2 className="md:tracking-[4px] tracking-[3px] md:text-3xl text-2xl font-semibold text-[#0cf199] md:mb-5">About Me</h2>
                            <p className="md:text-[14px] text-[13px] text-[#c9c4c4] md:mt-[20px] mt-[10px] tracking-[2px] md:leading-7 leading-6 mb-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                            <div className='md:h-[450px] overflow-y-scroll md:px-5 py-2'>
                                <div className='flex md:flex-row flex-col justify-between text-white md:space-x-[10px]'>
                                    <div className='flex flex-col md:space-y-10 space-y-5 tracking-[.75px] md:w-[50%] md:px-2 md:py-5'>
                                        <h3 className='md:text-[20px] text-[16px] text-white font-semibold capitalize'><span className='md:text-[16px] text-[14px] text-[#c9c4c4] lowercase mr-5'>name </span> shahzahan siraj</h3>
                                        <h3 className='md:text-[20px] text-[16px] text-white font-semibold capitalize'><span className='md:text-[16px] text-[14px] text-[#c9c4c4] lowercase mr-5'>Experience </span> 01 years</h3>
                                        <h3 className='md:text-[20px] text-[16px] text-white font-semibold capitalize'><span className='md:text-[16px] text-[14px] text-[#c9c4c4] lowercase mr-5'>Nationality </span> bangladeshi</h3>
                                        <h3 className='md:text-[20px] text-[16px] text-white font-semibold capitalize'><span className='md:text-[16px] text-[14px] text-[#c9c4c4] lowercase mr-5'>Freelance </span> Available</h3>
                                    </div>
                                    <div className='flex flex-col md:space-y-10 space-y-5 tracking-[.75px] md:w-[50%] md:px-2 md:py-5 md:mt-0 mt-3'>
                                        <h3 className='md:text-[20px] text-[16px] text-white font-semibold capitalize'><span className='md:text-[16px] text-[14px] text-[#c9c4c4] lowercase mr-5'>phone </span> 01785-405909</h3>
                                        <h3 className='md:text-[20px] text-[16px] text-white font-semibold'><span className='md:text-[16px] text-[14px] text-[#c9c4c4] lowercase mr-5'>github </span> github.com/shahzahandev</h3>
                                        <h3 className='text-[18px] text-white font-semibold '><span className='text-[16px] text-[#c9c4c4] lowercase mr-4'>email </span> shahzahansiraj516@gmail.com</h3>
                                        <h3 className='md:text-[20px] text-[16px] text-white font-semibold capitalize'><span className='md:text-[16px] text-[14px] text-[#c9c4c4] lowercase mr-5'>languages </span> Bangla, Hindi, English</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Info
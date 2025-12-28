import React from 'react'
import Container from '../Container/Container'
import { NavLink } from 'react-router'

const EducationInfo = () => {
    return (
        <div className='md:pt-[80px] pt-[130px] pb-[48px] bg-gray-800 font-primary tracking-[2px]'>
            <Container>
                <div className='flex md:flex-row flex-col justify-between text-white md:mt-[50px]'>
                     <div className='text-white flex flex-col md:w-[30%] md:py-15 py-10 md:px-10 md:space-y-10 space-y-5 bg-transparent rounded-tl-2xl rounded-bl-2xl'>
                        <div>
                            <h2 className="md:tracking-[5px] tracking-[3px] md:text-4xl text-3xl font-semibold text-[#0cf199] md:mb-5 mb-2">Why hire me?</h2>
                            <p className="md:text-[14px] text-[13px] text-[#c9c4c4] md:w-[300px] w-[350px] md:mt-[20px] mt-[10px] tracking-[2px] md:leading-7 leading-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ius ibero magnam iste dignissimos.</p>
                        </div>
                            <button className="px-[20px] py-[10px] border-2 border-[#0cf199] rounded-[15px] md:text-[24px] font-semibold text-[#0cf199] bg-[#0cf199] transition-all duration-300 ease-in hover:border-white hover:text-white"><NavLink className={(e) => {return e.isActive?"white": ""}} to="/educationInfo">Education</NavLink></button>
                            <button className="px-[20px] py-[10px] border-2 border-[#0cf199] rounded-[15px] bg-transparent md:text-[24px] font-semibold text-[#0cf199] transition-all duration-300 ease-in hover:border-white hover:text-white"><NavLink className={(e) => {return e.isActive?"white": ""}} to="/educationSkill">Skill</NavLink> </button>
                            <button className="px-[20px] py-[10px] border-2 border-[#0cf199] rounded-[15px] bg-transparent md:text-[24px] font-semibold text-[#0cf199] transition-all duration-300 ease-in hover:border-white hover:text-white"><NavLink className={(e) => {return e.isActive?"white": ""}} to="/Experience">Experience</NavLink></button>
                              <button className="px-[20px] py-[10px] border-2 border-[#0cf199] rounded-[15px] bg-transparent md:text-[24px] font-semibold text-[#0cf199] transition-all duration-300 ease-in hover:border-white hover:text-white"><NavLink className={(e) => { return e.isActive ? "white" : "" }} to="/Info">About</NavLink></button>
                     </div>
                    <div className='md:w-[70%] bg-transparent md:px-10 rounded-tr-2xl rounded-br-2xl md:py-15'>
                        <div className='md:px-5 md:py-2'>
                            <h2 className="md:tracking-[4px] tracking-[3px] md:text-3xl text-2xl font-semibold text-[#0cf199] md:mb-5">My Education</h2>
                            <p className="md:text-[14px] text-[13px] text-[#c9c4c4] md:mt-[20px] mt-[10px] tracking-[2px] md:leading-7 leading-6 mb-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div className='h-[450px] overflow-y-scroll md:px-5 md:py-2'>
                            <div className='flex justify-between text-white md:space-x-[20px] space-x-[10px]'>
                                <div className='tracking-[2px] w-[50%] bg-gray-200/10 px-5 py-8 rounded-2xl cursor-pointer hover:scale-105 transition-all duration-300'>
                                    <h3 className='md:text-[28px] text-[18px] text-[#0cf199] font-semibold'>2025-26</h3>
                                    <h2 className='md:text-2xl text-white font-bold mt-2'>Frontend Development</h2>
                                    <div className='flex items-center space-x-2 mt-2'>
                                        <div className='md:w-3 w-2 md:h-3 h-2 bg-[#0cf199] rounded-[50%]'></div>
                                        <h2 className='md:text-[16px] text-[10px] text-[#c9c4c4] capitalize font-medium'>Creative IT Institute</h2>
                                    </div>
                                </div>
                                <div className='tracking-[2px] w-[50%] bg-gray-200/10 px-5 py-8 rounded-2xl cursor-pointer hover:scale-105 transition-all duration-300'>
                                    <h3 className='md:text-[28px] text-[18px] text-[#0cf199] font-semibold'>2023-24</h3>
                                    <h2 className='md:text-2xl text-white font-bold mt-2'>Master of Arts</h2>
                                    <div className='flex items-center space-x-2 mt-2'>
                                        <div className='md:w-3 w-2 md:h-3 h-2 bg-[#0cf199] rounded-[50%]'></div>
                                        <h2 className='md:text-[16px] text-[10px] text-[#c9c4c4] capitalize font-medium'>govt. titumir college</h2>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-between text-white md:space-x-[20px]
                            space-x-[10px] mt-6'>
                                <div className='tracking-[2px] w-[50%] bg-gray-200/10 px-5 py-8 rounded-2xl cursor-pointer hover:scale-105 transition-all duration-300'>
                                    <h3 className='md:text-[28px] text-[18px] text-[#0cf199] font-semibold'>2019-23</h3>
                                    <h2 className='md:text-2xl text-white font-bold mt-2'>Bachelor of Arts</h2>
                                    <div className='flex items-center space-x-2 mt-2'>
                                        <div className='md:w-3 w-2 md:h-3 h-2 bg-[#0cf199] rounded-[50%]'></div>
                                        <h2 className='md:text-[16px] text-[10px] text-[#c9c4c4] capitalize font-medium'>Govt. Titumir college</h2>
                                    </div>
                                </div>
                                <div className='tracking-[2px] w-[50%] bg-gray-200/10 px-5 py-8 rounded-2xl cursor-pointer hover:scale-105 transition-all duration-300'>
                                    <h3 className='md:text-[28px] text-[18px] text-[#0cf199] font-semibold'>2017-18</h3>
                                    <h2 className='md:text-2xl text-white font-bold mt-2'>Higher Secondary</h2>
                                    <div className='flex items-center space-x-2 mt-2'>
                                        <div className='md:w-3 w-2 md:h-3 h-2 bg-[#0cf199] rounded-[50%]'></div>
                                        <h2 className='md:text-[16px] text-[10px] text-[#c9c4c4] capitalize font-medium'>samir uddin smrity college</h2>
                                    </div>
                                </div>
                            </div>
                             <div className='flex justify-between text-white md:space-x-[20px] space-x-[10px] mt-6'>
                                <div className='tracking-[2px] w-[50%] bg-gray-200/10 px-5 py-8 rounded-2xl cursor-pointer hover:scale-105 transition-all duration-300'>
                                    <h3 className='md:text-[28px] text-[18px] text-[#0cf199] font-semibold'>2016-17</h3>
                                    <h2 className='md:text-2xl text-white font-bold mt-2'>Secondary School</h2>
                                    <div className='flex items-center space-x-2 mt-2'>
                                        <div className='md:w-3 w-2 md:h-3 h-2 bg-[#0cf199] rounded-[50%]'></div>
                                        <h2 className='md:text-[16px] text-[10px] text-[#c9c4c4] capitalize font-medium'>Moral hat janta high school</h2>
                                    </div>
                                </div>
                                <div className='tracking-[2px] w-[50%] bg-gray-200/10 px-5 py-8 rounded-2xl cursor-pointer hover:scale-105 transition-all duration-300'>
                                    <h3 className='md:text-[28px] text-[18px] text-[#0cf199] font-semibold'>2014</h3>
                                    <h2 className='md:text-2xl text-white font-bold mt-2'>Junior Secondary</h2>
                                    <div className='flex items-center space-x-2 mt-2'>
                                        <div className='md:w-3 w-2 md:h-3 h-2 bg-[#0cf199] rounded-[50%]'></div>
                                        <h2 className='text-[16 text-[10px] text-[#c9c4c4] capitalize font-medium'>Moral hat janta high school</h2>
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
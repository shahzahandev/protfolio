import React from 'react'
import Container from '../Container/Container'
import { NavLink } from 'react-router'

const EducationInfo = () => {
    return (
        <div className='pt-[80px] pb-[48px] bg-gray-800 font-primary tracking-[2px]'>
            <Container>
                <div className='flex justify-between text-white mt-[50px]'>
                    <div className='text-white flex flex-col w-[30%] py-15  px-10 space-y-10 bg-transparent rounded-tl-2xl rounded-bl-2xl'>
                        <div>
                            <h2 className=" tracking-[5px] text-4xl font-semibold text-[#0cf199] mb-5">Why hire me?</h2>
                            <p className="text-[14px] text-[#c9c4c4] w-[300px] mt-[20px] tracking-[2px] leading-7">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ius esse corporisiberos.</p>
                        </div>
                        <button className=" px-[20px] py-[10px] border-2 border-[#0cf199] rounded-[15px] bg-[#0cf199] text-[24px] font-semibold text-[#0cf199]  transition-all duration-300 ease-in hover:border-white hover:text-white"><NavLink className={(e) => { return e.isActive ? "white" : "" }} to="/educationInfo">Education</NavLink></button>
                        <button className=" px-[20px] py-[10px] border-2 border-[#0cf199] rounded-[15px] bg-transparent text-[24px] font-semibold text-[#0cf199]  transition-all duration-300 ease-in hover:border-white hover:text-white"><NavLink className={(e) => { return e.isActive ? "white" : "" }} to="/educationSkill">Skill</NavLink></button>
                        <button className=" px-[20px] py-[10px] border-2 border-[#0cf199] rounded-[15px] bg-transparent text-[24px] font-semibold text-[#0cf199]  transition-all duration-300 ease-in hover:border-white hover:text-white"><NavLink className={(e) => { return e.isActive ? "white" : "" }} to="/Experience">Experience</NavLink></button>
                         <button className=" px-[20px] py-[10px] border-2 border-[#0cf199] rounded-[15px] bg-transparent text-[24px] font-semibold text-[#0cf199]  transition-all duration-300 ease-in hover:border-white hover:text-white"><NavLink className={(e) => { return e.isActive ? "white" : "" }} to="/Info">About</NavLink></button>
                    </div>
                    <div className='w-[70%] bg-transparent px-10 rounded-tr-2xl rounded-br-2xl py-15'>
                        <div className='px-5 py-2'>
                            <h2 className=" tracking-[4px] text-3xl font-semibold text-[#0cf199] mb-5">My Education</h2>
                            <p className="text-[14px] text-[#c9c4c4] mt-[20px] tracking-[2px] leading-7 mb-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div className='h-[450px] overflow-y-scroll px-5 py-2'>
                            <div className='flex justify-between text-white space-x-[20px]'>
                                <div className='tracking-[2px] w-[50%] bg-gray-200/10 px-5 py-8 rounded-2xl cursor-pointer hover:scale-105 transition-all duration-300'>
                                    <h3 className='text-[28px] text-[#0cf199] font-semibold'>2025-26</h3>
                                    <h2 className='text-2xl text-white font-bold mt-2'>Frontend Development</h2>
                                    <div className='flex items-center space-x-2 mt-2'>
                                        <div className='w-3 h-3 bg-[#0cf199] rounded-[50%]'></div>
                                        <h2 className='text-[16px] text-[#c9c4c4] capitalize font-medium'>Creative IT Institute</h2>
                                    </div>
                                </div>
                                <div className='tracking-[2px] w-[50%] bg-gray-200/10 px-5 py-8 rounded-2xl cursor-pointer hover:scale-105 transition-all duration-300'>
                                    <h3 className='text-[28px] text-[#0cf199] font-semibold'>2023-24</h3>
                                    <h2 className='text-2xl text-white font-bold mt-2'>Master of Arts</h2>
                                    <div className='flex items-center space-x-2 mt-2'>
                                        <div className='w-3 h-3 bg-[#0cf199] rounded-[50%]'></div>
                                        <h2 className='text-[16px] text-[#c9c4c4] capitalize font-medium'>govt. titumir college</h2>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-between text-white space-x-[20px] mt-6'>
                                <div className='tracking-[2px] w-[50%] bg-gray-200/10 px-5 py-8 rounded-2xl cursor-pointer hover:scale-105 transition-all duration-300'>
                                    <h3 className='text-[28px] text-[#0cf199] font-semibold'>2019-23</h3>
                                    <h2 className='text-2xl text-white font-bold mt-2'>Bachelor of Arts</h2>
                                    <div className='flex items-center space-x-2 mt-2'>
                                        <div className='w-3 h-3 bg-[#0cf199] rounded-[50%]'></div>
                                        <h2 className='text-[16px] text-[#c9c4c4] capitalize font-medium'>Govt. Titumir college</h2>
                                    </div>
                                </div>
                                <div className='tracking-[2px] w-[50%] bg-gray-200/10 px-5 py-8 rounded-2xl cursor-pointer hover:scale-105 transition-all duration-300'>
                                    <h3 className='text-[28px] text-[#0cf199] font-semibold'>2017-18</h3>
                                    <h2 className='text-2xl text-white font-bold mt-2'>Higher Secondary</h2>
                                    <div className='flex items-center space-x-2 mt-2'>
                                        <div className='w-3 h-3 bg-[#0cf199] rounded-[50%]'></div>
                                        <h2 className='text-[16px] text-[#c9c4c4] capitalize font-medium'>samir uddin smrity college</h2>
                                    </div>
                                </div>
                            </div>
                             <div className='flex justify-between text-white space-x-[20px] mt-6'>
                                <div className='tracking-[2px] w-[50%] bg-gray-200/10 px-5 py-8 rounded-2xl cursor-pointer hover:scale-105 transition-all duration-300'>
                                    <h3 className='text-[28px] text-[#0cf199] font-semibold'>2016-17</h3>
                                    <h2 className='text-2xl text-white font-bold mt-2'>Secondary School</h2>
                                    <div className='flex items-center space-x-2 mt-2'>
                                        <div className='w-3 h-3 bg-[#0cf199] rounded-[50%]'></div>
                                        <h2 className='text-[16px] text-[#c9c4c4] capitalize font-medium'>Moral hat janta high school</h2>
                                    </div>
                                </div>
                                <div className='tracking-[2px] w-[50%] bg-gray-200/10 px-5 py-8 rounded-2xl cursor-pointer hover:scale-105 transition-all duration-300'>
                                    <h3 className='text-[28px] text-[#0cf199] font-semibold'>2014</h3>
                                    <h2 className='text-2xl text-white font-bold mt-2'>Junior Secondary</h2>
                                    <div className='flex items-center space-x-2 mt-2'>
                                        <div className='w-3 h-3 bg-[#0cf199] rounded-[50%]'></div>
                                        <h2 className='text-[16px] text-[#c9c4c4] capitalize font-medium'>Moral hat janta high school</h2>
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
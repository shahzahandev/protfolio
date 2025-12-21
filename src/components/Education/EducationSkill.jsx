import React from 'react'
import Container from '../Container/Container'
import { NavLink } from 'react-router'
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa6";
import { FaCss3 } from "react-icons/fa";
import { AiOutlineJavaScript } from "react-icons/ai";
import { FaBootstrap } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";

const EducationSkill = () => {
    return (
        <div>
            <div className='pt-[80px] pb-[48px] bg-gray-800 font-primary tracking-[2px]'>
                <Container>
                    <div className='flex justify-between text-white mt-[50px]'>
                        <div className='text-white flex flex-col w-[30%] py-15  px-10 space-y-10 bg-gray-700 rounded-tl-2xl rounded-bl-2xl'>
                            <div>
                                <h2 className=" tracking-[5px] text-4xl font-semibold text-[#0cf199] mb-5">Why hire me?</h2>
                                <p className="text-[14px] text-[#c9c4c4] w-[300px] mt-[20px] tracking-[2px] leading-7">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ius esse corporisiberos.</p>
                            </div>
                            <button className=" px-[20px] py-[10px] border-2 border-[#0cf199] rounded-[15px] bg-transparent text-[24px] font-semibold text-[#0cf199]  transition-all duration-300 ease-in hover:border-white hover:text-white"><NavLink className={(e) => { return e.isActive ? "white" : "" }} to="/educationInfo">Education</NavLink></button>
                            <button className=" px-[20px] py-[10px] border-2 border-[#0cf199] rounded-[15px] bg-[#0cf199] text-[24px] font-semibold text-[#0cf199]  transition-all duration-300 ease-in hover:border-white hover:text-white"><NavLink className={(e) => { return e.isActive ? "white" : "" }} to="/educationSkill">Skill</NavLink></button>
                            <button className=" px-[20px] py-[10px] border-2 border-[#0cf199] rounded-[15px] bg-transparent text-[24px] font-semibold text-[#0cf199]  transition-all duration-300 ease-in hover:border-white hover:text-white"><NavLink className={(e) => { return e.isActive ? "white" : "" }} to="/Experience">Experience</NavLink></button>
                             <button className=" px-[20px] py-[10px] border-2 border-[#0cf199] rounded-[15px] bg-transparent text-[24px] font-semibold text-[#0cf199]  transition-all duration-300 ease-in hover:border-white hover:text-white"><NavLink className={(e) => { return e.isActive ? "white" : "" }} to="/Info">About</NavLink></button>
                        </div>
                        <div className='w-[70%] bg-gray-700 px-10 rounded-tr-2xl rounded-br-2xl py-15'>
                            <div className='px-5 py-2'>
                                <h2 className=" tracking-[4px] text-3xl font-semibold text-[#0cf199] mb-5">My Skill</h2>
                                <p className="text-[14px] text-[#c9c4c4] mt-[20px] tracking-[2px] leading-7 mb-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                            <div className='h-[450px] overflow-y-scroll px-5 py-2 tracking-[2px]'>
                                <div className='flex justify-between items-center'>
                                    <div className='flex flex-col items-center w-[200px] bg-gray-200/10 py-10 px-15 rounded-[15px] cursor-pointer hover:scale-105 transition-all duration-300'>
                                        <IoLogoFigma className='text-white text-8xl' />
                                        <h2 className='text-2xl font-bold capitalize text-[#0cf199] text-center mt-2'>figma</h2>
                                    </div>
                                     <div className='flex flex-col items-center  w-[200px]  bg-gray-200/10 py-10 px-15 rounded-[15px] cursor-pointer hover:scale-105 transition-all duration-300'>
                                        <FaHtml5 className='text-white text-8xl' />
                                        <h2 className='text-2xl font-bold capitalize text-[#0cf199] text-center mt-2'>html</h2>
                                    </div>
                                     <div className='flex flex-col items-center  w-[200px]  bg-gray-200/10 py-10 px-15 rounded-[15px] cursor-pointer hover:scale-105 transition-all duration-300'>
                                        <FaCss3 className='text-white text-8xl' />
                                        <h2 className='text-2xl font-bold capitalize text-[#0cf199] text-center mt-2'>css</h2>
                                    </div>
                                </div>
                                  <div className='flex justify-between items-center mt-10'>
                                    <div className='flex flex-col items-center  w-[200px]  bg-gray-200/10 py-10 px-15 rounded-[15px] cursor-pointer hover:scale-105 transition-all duration-300'>
                                        <AiOutlineJavaScript className='text-white text-7xl' />
                                        <h2 className='text-2xl font-bold capitalize text-[#0cf199] text-center mt-2'>javascript</h2>
                                    </div>
                                     <div className='flex flex-col items-center  w-[200px]  bg-gray-200/10 py-10 px-15 rounded-[15px] cursor-pointer hover:scale-105 transition-all duration-300'>
                                        <RiTailwindCssFill className='text-white text-7xl' />
                                        <h2 className='text-2xl font-bold capitalize text-[#0cf199] text-center mt-2'>tailwind</h2>
                                    </div>
                                     <div className='flex flex-col items-center  w-[200px]  bg-gray-200/10 py-10 px-15 rounded-[15px] cursor-pointer hover:scale-105 transition-all duration-300'>
                                        <FaBootstrap className='text-white text-7xl' />
                                        <h2 className='text-2xl font-bold capitalize text-[#0cf199] text-center mt-2'>Bootstrap</h2>
                                    </div>
                                </div>
                                  <div className='flex justify-between items-center mt-10'>
                                    <div className='flex flex-col items-center  w-[200px]  bg-gray-200/10 py-10 px-15 rounded-[15px] cursor-pointer hover:scale-105 transition-all duration-300'>
                                        <FaReact className='text-white text-8xl' />
                                        <h2 className='text-2xl font-bold capitalize text-[#0cf199] text-center mt-2'>react</h2>
                                    </div>
                                     <div className='flex flex-col items-center  w-[200px]  bg-gray-200/10 py-10 px-15 rounded-[15px] cursor-pointer hover:scale-105 transition-all duration-300'>
                                        <FaGithub className='text-white text-8xl' />
                                        <h2 className='text-2xl font-bold capitalize text-[#0cf199] text-center mt-2'>Github</h2>
                                    </div>
                                     <div className='flex flex-col items-center  w-[200px]  bg-gray-200/10 py-10 px-15 rounded-[15px] cursor-pointer hover:scale-105 transition-all duration-300'>
                                        <FaCss3 className='text-white text-8xl' />
                                        <h2 className='text-2xl font-bold capitalize text-[#0cf199] text-center mt-2'>css</h2>
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

export default EducationSkill
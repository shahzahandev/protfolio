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
import { BiLogoFirebase } from "react-icons/bi";


const EducationSkill = () => {
    return (
        <div>
            <div className='pt-[80px] pb-[48px] bg-gray-800 font-primary tracking-[2px]'>
                <Container>
                    <div className='flex md:flex-row flex-col justify-between text-white md:mt-[50px]'>
                        <div className='text-white flex flex-col md:w-[30%] md:py-15 py-10 md:px-10 md:space-y-10 space-y-5 bg-transparent rounded-tl-2xl rounded-bl-2xl'>
                            <div>
                                <h2 className="md:tracking-[5px] tracking-[3px] md:text-4xl text-3xl font-semibold text-[#0cf199] md:mb-5 mb-2">Why hire me?</h2>
                                <p className="md:text-[14px] text-[13px] text-[#c9c4c4] md:w-[300px] w-[350px] md:mt-[20px] mt-[10px] tracking-[2px] md:leading-7 leading-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ius ibero magnam iste dignissimos.</p>
                            </div>
                            <button className="px-[20px] py-[10px] border-2 border-[#0cf199] rounded-[15px] md:text-[24px] font-semibold text-[#0cf199] bg-transparent transition-all duration-300 ease-in hover:border-white hover:text-white"><NavLink className={(e) => { return e.isActive ? "white" : "" }} to="/educationInfo">Education</NavLink></button>
                            <button className="px-[20px] py-[10px] border-2 border-[#0cf199] rounded-[15px] bg-[#0cf199] md:text-[24px] font-semibold text-[#0cf199] transition-all duration-300 ease-in hover:border-white hover:text-white"><NavLink className={(e) => { return e.isActive ? "white" : "" }} to="/educationSkill">Skill</NavLink> </button>
                            <button className="px-[20px] py-[10px] border-2 border-[#0cf199] rounded-[15px] bg-transparent md:text-[24px] font-semibold text-[#0cf199] transition-all duration-300 ease-in hover:border-white hover:text-white"><NavLink className={(e) => { return e.isActive ? "white" : "" }} to="/Experience">Experience</NavLink></button>
                            <button className="px-[20px] py-[10px] border-2 border-[#0cf199] rounded-[15px] bg-transparent md:text-[24px] font-semibold text-[#0cf199] transition-all duration-300 ease-in hover:border-white hover:text-white"><NavLink className={(e) => { return e.isActive ? "white" : "" }} to="/Info">About</NavLink></button>
                        </div>
                        <div className='md:w-[70%] bg-transparent md:px-10 rounded-tr-2xl rounded-br-2xl md:py-15'>
                             <div className='md:px-5 md:py-2'>
                            <h2 className="md:tracking-[4px] tracking-[3px] md:text-3xl text-2xl font-semibold text-[#0cf199] md:mb-5">My Skill</h2>
                            <p className="md:text-[14px] text-[13px] text-[#c9c4c4] md:mt-[20px] mt-[10px] tracking-[2px] md:leading-7 leading-6 mb-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                            <div className='h-[450px] overflow-y-scroll md:px-5 py-2 tracking-[2px]'>
                                <div className='flex justify-between items-center'>
                                    <div className='flex flex-col items-center md:w-[200px]  w-[110px] bg-gray-200/10 md:py-10 py-5 md:px-15 px-5 rounded-[15px] cursor-pointer hover:scale-105 transition-all duration-300'>
                                        <IoLogoFigma className='text-white md:text-8xl text-5xl animate-pulse' />
                                        <h2 className='md:text-2xl font-bold capitalize text-[#0cf199] text-center mt-2'>figma</h2>
                                    </div>
                                    <div className='flex flex-col items-center  md:w-[200px] w-[110px]  bg-gray-200/10 md:py-10 py-5 md:px-15 px-5 rounded-[15px] cursor-pointer hover:scale-105 transition-all duration-300'>
                                        <FaHtml5 className='text-white md:text-8xl text-5xl animate-bounce bg-[#ef5826] p-2' />
                                        <h2 className='md:text-2xl font-bold capitalize text-[#0cf199] text-center mt-2'>html</h2>
                                    </div>
                                    <div className='flex flex-col items-center  md:w-[200px] w-[110px]  bg-gray-200/10 md:py-10 py-5 md:px-15 px-5 rounded-[15px] cursor-pointer hover:scale-105 transition-all duration-300'>
                                        <FaCss3 className='text-white md:text-8xl text-5xl animate-pulse bg-[#3d82ea] p-2' />
                                        <h2 className='md:text-2xl font-bold capitalize text-[#0cf199] text-center mt-2'>css</h2>
                                    </div>
                                </div>
                                <div className='flex justify-between items-center md:mt-10 mt-3'>
                                    <div className='flex flex-col items-center  md:w-[200px] w-[110px]  bg-gray-200/10 md:py-10 py-5 md:px-15 px-5 rounded-[15px] cursor-pointer hover:scale-105 transition-all duration-300'>
                                        <AiOutlineJavaScript className='text-black md:text-7xl text-5xl animate-bounce bg-[#eee609] p-2' />
                                        <h2 className='md:text-2xl font-bold capitalize text-[#0cf199] text-center mt-2'>javascript</h2>
                                    </div>
                                    <div className='flex flex-col items-center  md:w-[200px] w-[110px]  bg-gray-200/10 md:py-10 py-5 md:px-15 px-5 rounded-[15px] cursor-pointer hover:scale-105 transition-all duration-300'>
                                        <RiTailwindCssFill className='text-[#4da3ef] md:text-7xl text-5xl animate-pulse ' />
                                        <h2 className='md:text-2xl font-bold capitalize text-[#0cf199] text-center mt-2'>tailwind</h2>
                                    </div>
                                    <div className='flex flex-col items-center  md:w-[200px] w-[110px]  bg-gray-200/10 md:py-10 py-5 md:px-15 px-5 rounded-[15px] cursor-pointer hover:scale-105 transition-all duration-300'>
                                        <FaBootstrap className='text-white md:text-7xl text-5xl animate-bounce bg-[#830cec] p-2' />
                                        <h2 className='md:text-2xl font-bold capitalize text-[#0cf199] text-center mt-2'>Bootstrap</h2>
                                    </div>
                                </div>
                                <div className='flex justify-between items-center md:mt-10 mt-3'>
                                    <div className='flex flex-col items-center  md:w-[200px] w-[110px]  bg-gray-200/10 md:py-10 py-5 md:px-15 px-5 rounded-[15px] cursor-pointer hover:scale-105 transition-all duration-300'>
                                        <FaReact className='text-[#1ec4e1] md:text-8xl text-5xl animate-spin' />
                                        <h2 className='md:text-2xl font-bold capitalize text-[#0cf199] text-center mt-2'>react</h2>
                                    </div>
                                    <div className='flex flex-col items-center  md:w-[200px] w-[110px]  bg-gray-200/10 md:py-10 py-5 md:px-15 px-5 rounded-[15px] cursor-pointer hover:scale-105 transition-all duration-300'>
                                        <FaGithub className='text-white md:text-8xl text-5xl animate-bounce' />
                                        <h2 className='md:text-2xl font-bold capitalize text-[#0cf199] text-center mt-2'>Github</h2>
                                    </div>
                                    <div className='flex flex-col items-center  md:w-[200px] w-[110px]  bg-gray-200/10 md:py-10 py-5 md:px-15 px-5 rounded-[15px] cursor-pointer hover:scale-105 transition-all duration-300'>
                                        <BiLogoFirebase className='text-[#f1c606] md:text-8xl text-5xl animate-pulse' />
                                        <h2 className='md:text-2xl font-bold capitalize text-[#0cf199] text-center mt-2'>Firebase</h2>
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
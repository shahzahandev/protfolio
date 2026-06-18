import React from 'react'
import Container from '../Container/Container'
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { AiOutlineJavaScript } from "react-icons/ai";
import { FaBootstrap } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { BiLogoFirebase } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";

import { FcGraduationCap } from "react-icons/fc";


const About = () => {
    const skills = [
        { name: "NodeJs", icon: <FaNodeJs className='text-[#178803]' /> },
        { name: "Express", icon: <SiExpress className='text-white' /> },
        { name: "MongoDB", icon: <DiMongodb className='text-[#17f10b]' /> },
        { name: "React", icon: <FaReact className='text-[#1ec4e1]' /> },
        { name: "Figma", icon: <IoLogoFigma className='text-[#c83eaf]' /> },
        { name: "Github", icon: <FaGithub className='text-white' /> },
        { name: "Firebase", icon: <BiLogoFirebase className='text-[#db4307]' /> },
        { name: "JavaScript", icon: <AiOutlineJavaScript className='text-[#eee609]' /> },
        { name: "Tailwind", icon: <RiTailwindCssFill className='text-[#4da3ef]' /> },
        { name: "Bootstrap", icon: <FaBootstrap className='text-[#830cec]' /> },
        { name: "HTML", icon: <FaHtml5 className='text-[#ef5826]' /> },
        { name: "CSS", icon: <FaCss3 className='text-[#3d82ea]' /> },
    ];

    return (
        <>
            <div className=' bg-primary md:py-25 py-15'>

                <Container>
                    <div className='text-center'>
                        <h2 className="md:text-3xl text-2xl font-semibold text-[#0cf199]">My Skill</h2>
                        <p className="md:text-[14px] text-[13px] text-[#c9c4c4] md:mt-[20px] mt-[10px] tracking-[1px] md:leading-7 leading-6 mb-5">Modern web technologies, building responsive, user-friendly, and high-performance web applications.</p>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 md:py-5 py-5">
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className="
      flex flex-col items-center
      bg-white/5 backdrop-blur-sm
      border border-white/10
      rounded-2xl
      py-4 md:py-6
      px-3
      transition-all duration-300
      hover:border-[#0cf199]
      hover:-translate-y-2
      hover:shadow-[0px_0px_20px_rgba(12,241,153,.25)]
      "
                            >
                                <div className="text-5xl md:text-7xl">
                                    {skill.icon}
                                </div>

                                <h3 className="mt-3 text-sm md:text-xl font-semibold text-heading text-center">
                                    {skill.name}
                                </h3>
                            </div>
                        ))}
                    </div>

                    <div className='md:w-[100%] bg-transparent md:px-10 rounded-tr-2xl rounded-br-2xl md:py-15'>
                        <div className='md:px-5 md:py-2 text-center'>
                            <h2 className="md:text-3xl text-2xl font-semibold text-[#0cf199] md:mb-5">My Education</h2>
                            <p className="md:text-[14px] text-[13px] text-[#c9c4c4] md:mt-[20px] mt-[10px] md:leading-7 leading-6 mb-5">I have completed my Bachelor’s and Master’s degrees, gaining strong academic knowledge, critical thinking skills, and a solid professional foundation.</p>
                        </div>
                        <div className=' md:px-15  md:py-2'>
                            <div className='flex flex-col justify-between text-white md:space-y-[20px] space-y-[20px]'>
                                <div className='flex w-[100%] bg-gray-200/10 px-5 py-8 rounded-2xl cursor-pointer transition-all duration-100 hover:shadow-[0px_0px_10px_rgba(12,241,153,.5)]'>
                                    <div className='w-[20%]'>
                                        <FcGraduationCap className='md:text-8xl text-5xl ' />
                                    </div>
                                    <div className='w-[80%]'>
                                        <h3 className='md:text-[28px] text-[18px] text-[#0cf199] font-semibold'>MERN Stack Developer</h3>
                                        <h2 className='md:text-[16px] text-[10px] text-white/80 capitalize font-medium md:w-[350px] w-[220px]'>Creative It Institute, Dhanmondi, Dhaka, Bangladesh.</h2>
                                        <h2 className='md:text-[16px] text-[10px] text-[#c9c4c4]/80 capitalize font-medium'><i>2025-26</i></h2>
                                        <h2 className='md:text-[14px] text-[8px] text-[#c9c4c4] capitalize font-medium md:w-[350px] w-[220px] mt-1'>Completed graduation in Bangla Literature with strong skills in analysis and critical thinking.</h2>
                                    </div>
                                </div>
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
                                        <h2 className='md:text-[14px] text-[8px] text-[#c9c4c4] capitalize font-medium md:w-[350px] w-[220px] mt-1'>Successfully completed HSC in Humanities with focus on social sciences and literature.</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='md:w-[100%] bg-transparent md:px-10 rounded-tr-2xl rounded-br-2xl md:py-15 mt-5'>
                        <div className='md:px-5 md:py-2 text-center'>
                            <h2 className="md:text-3xl text-2xl font-semibold text-[#0cf199] md:mb-5">Extra Information</h2>
                            <p className="md:text-[14px] text-[13px] text-[#c9c4c4] md:mt-[20px] mt-[10px] md:leading-7 leading-6 mb-5">Creative frontend developer building modern, responsive, and interactive web experiences.</p>
                        </div>
                        <div className='min-h-fit md:px-15 py-2'>
                            <div className='flex flex-col md:flex-row items-start md:items-center justify-between text-white  gap-5 md:gap-10'>
                                <div className='flex flex-col md:space-y-10 space-y-5 tracking-[.75px] md:w-[50%] md:px-2 md:py-5'>
                                    <h3 className='md:text-[18px] text-[16px] text-white font-semibold capitalize'><span className='md:text-[24px] text-[14px] text-[#c9c4c4] capitalaize mr-5'>name </span> shahzahan siraj</h3>
                                    <h3 className='md:text-[18px] text-[16px] text-white font-semibold '><span className='md:text-[24px] text-[14px] text-[#c9c4c4] capitalaize md:mr-5 me-2'>github</span><a
                                        href="https://github.com/shahzahandev"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        github.com/shahzahandev
                                    </a></h3>
                                    <h3 className='md:text-[18px] text-[16px] text-white font-semibold capitalize'><span className='md:text-[24px] text-[14px] text-[#c9c4c4] capitalaize mr-5'>Nationality </span> bangladeshi</h3>
                                    <h3 className='md:text-[18px] text-[16px] text-white font-semibold capitalize'><span className='md:text-[24px] text-[14px] text-[#c9c4c4] capitalaize mr-5'>Freelance </span> Available</h3>
                                </div>
                                <div className='flex flex-col md:space-y-10 space-y-5 md:w-[50%] md:px-1 md:py-5 md:mt-0 mt-3'>
                                    <h3 className='md:text-[18px] text-[14px] text-white font-semibold capitalize'><span className='md:text-[24px] text-[14px] text-[#c9c4c4] capitalaize mr-5'>phone </span> 01785-405909</h3>
                                    <h3 className='md:text-[18px] text-[16px] text-white font-semibold capitalize'><span className='md:text-[24px] text-[14px] text-[#c9c4c4] capitalaize mr-5'>Experience </span> One Year</h3>

                                    <h3 className='md:text-[18px] text-[16px] text-white font-semibold '><span className='md:text-[24px] text-[14px] text-[#c9c4c4] capitalaize mr-4'>email </span><a href="mailto:shahzahansiraj516@gmail.com">
                                        shahzahansiraj516@gmail.com
                                    </a></h3>
                                    <h3 className='md:text-[18px] text-[16px] text-white font-semibold capitalize'><span className='md:text-[24px] text-[14px] text-[#c9c4c4] capitalaize mr-5'>languages </span> Bangla, Hindi, English</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default About

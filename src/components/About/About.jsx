import React from 'react'
import Container from '../Container/Container'
import { NavLink } from 'react-router'
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
                        <h2 className="md:text-2xl text-2xl font-semibold text-[#0cf199] md:mb-2">My Skill</h2>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 md:py-10 py-20">
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
                </Container>
            </div>
        </>
    )
}

export default About

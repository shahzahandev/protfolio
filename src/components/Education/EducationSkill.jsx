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
           <div className='pt-[100px] pb-[48px] bg-gray-800 font-primary'>
                <Container>
                    <div className='flex justify-between text-white mt-[50px]'>
                        <div className='text-white flex flex-col w-[30%] py-15  px-10 space-y-10 bg-gray-700 rounded-tl-2xl rounded-bl-2xl'>
                              <div>
                            <h2 className=" tracking-[5px] text-4xl font-semibold text-[#0cf199] mb-5">why hire me?</h2>
                            <p className="text-[16px] text-[#c9c4c4] w-[500px] mt-[20px] tracking-[2px] leading-7">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ius esse corporisibero magnam iste dignissimos.</p>
                        </div>
                            <button className=" px-[20px] py-[10px] border-2 border-[#0cf199] rounded-[50px] bg-transparent text-[24px] font-semibold text-[#0cf199]  transition-all duration-300 ease-in hover:border-white hover:text-white"><NavLink className={(e) => {return e.isActive?"red": ""}} to="/educationInfo">Education</NavLink></button>
                            <button className=" px-[20px] py-[10px] border-2 border-[#0cf199] rounded-[50px] bg-transparent text-[24px] font-semibold text-[#0cf199]  transition-all duration-300 ease-in hover:border-white hover:text-white"><NavLink className={(e) => {return e.isActive?"red": ""}} to="/educationSkill">Skill</NavLink></button>
                            <button className=" px-[20px] py-[10px] border-2 border-[#0cf199] rounded-[50px] bg-transparent text-[24px] font-semibold text-[#0cf199]  transition-all duration-300 ease-in hover:border-white hover:text-white"><NavLink className={(e) => {return e.isActive?"red": ""}} to="/Experience">Experience</NavLink></button>
                        </div>
                        <div className='w-[70%] bg-gray-700 px-5 rounded-tr-2xl rounded-br-2xl py-15'>
                           <div className='flex justify-between'>
                                         <div  className='border-4 border-[#06fada] py-10 px-[20px] rounded-[15px]'>
                                            <IoLogoFigma className='text-white text-6xl'/>
                                             <h2 className='text-2xl font-bold capitalize text-[#ffff00] text-center mt-[10px]'>figma</h2>       
                                             <div className='bg-white h-4 rounded-full  mt-[15px]'>
                                                 <div className='bg-[#06fada] w-[80%] h-full'></div>
                                             </div>
                                         </div>
                                         <div  className='border-4 border-[#06fada] py-10 px-[20px] rounded-[15px]'>
                                             <FaHtml5 className='text-white text-6xl'/>
                                             <h2 className='text-2xl font-bold capitalize text-[#ffff00] text-center mt-[10px]'>html</h2>       
                                             <div className='bg-white h-4 rounded-full  mt-[15px]'>
                                                 <div className='bg-[#06fada] w-[95%] h-full'></div>
                                             </div>
                                         </div>
                                         <div  className='border-4 border-[#06fada] py-10 px-[20px] rounded-[15px]'>
                                             <FaCss3 className='text-white text-6xl'/>
                                             <h2 className='text-2xl font-bold capitalize text-[#ffff00] text-center mt-[10px]'>css</h2>       
                                             <div className='bg-white h-4 rounded-full  mt-[15px]'>
                                                 <div className='bg-[#06fada] w-[90%] h-full'></div>
                                             </div>
                                         </div>
                                         <div  className='border-4 border-[#06fada] py-10 px-[20px] rounded-[15px]'>
                                             <AiOutlineJavaScript className='text-white text-5xl'/>
                                             <h2 className='text-2xl font-bold capitalize text-[#ffff00] text-center mt-[10px]'>javascript</h2>       
                                             <div className='bg-white h-4 rounded-full  mt-[15px]'>
                                                 <div className='bg-[#06fada] w-[80%] h-full  mt-[15px]'></div>
                                             </div>
                                         </div>
                                     </div>
                         
                         
                                      <div className='flex justify-between mt-[20px]'>
                                         <div className='border-4 border-[#06fada] py-10 px-[20px] rounded-[15px]'>
                                              <RiTailwindCssFill className='text-white text-6xl'/>
                                             <h2 className='text-2xl font-bold capitalize text-[#ffff00] text-center mt-[10px]'>tailwind</h2>       
                                             <div className='bg-white h-4 rounded-full  mt-[15px]'>
                                                 <div className='bg-[#06fada] w-[85%] h-full'></div>
                                             </div>
                                         </div>
                                         <div className='border-4 border-[#06fada] py-10 px-[20px] rounded-[15px]'>
                                             <FaBootstrap className='text-white text-6xl'/>
                                             <h2 className='text-2xl font-bold capitalize text-[#ffff00] text-center mt-[10px]'>bootstrap</h2>       
                                             <div className='bg-white h-4 rounded-full  mt-[15px]'>
                                                 <div className='bg-[#06fada] w-[87%] h-full'></div>
                                             </div>
                                         </div>
                                         <div className='border-4 border-[#06fada] py-10 px-[20px] rounded-[15px]'>
                                             <FaReact className='text-white text-6xl'/>
                                             <h2 className='text-2xl font-bold capitalize text-[#ffff00] text-center mt-[10px]'>react</h2>       
                                             <div className='bg-white h-4 rounded-full  mt-[15px]'>
                                                 <div className='bg-[#06fada] w-[80%] h-full'></div>
                                             </div>
                                         </div>
                                          <div className='border-4 border-[#06fada] py-10 px-[20px] rounded-[15px]'>
                                            <FaGithub className='text-white text-6xl'/>
                                             <h2 className='text-2xl font-bold capitalize text-[#ffff00] text-center mt-[10px]'>gitHub</h2>       
                                             <div className='bg-white h-4 rounded-full  mt-[15px]'>
                                                 <div className='bg-[#06fada] w-[85%] h-full'></div>
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
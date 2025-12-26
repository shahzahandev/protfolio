import React from 'react'
import Container from '../Container/Container'
import { FaLongArrowAltRight } from "react-icons/fa";
import project2 from "../../assets/project2.png"
import { FaGithub } from "react-icons/fa";

const Project2 = () => {
  return (
         <>
            <div className='pt-[150px] pb-[150px] bg-gray-800 font-primary tracking-[1.5px]'>
                <Container>
                    <div className='flex justify-between items-center space-x-[50px]'>
                        <div className='w-[50%] border-b-2 text-white/50 pb-10'>
                            <h3 className='text-8xl text-white uppercase font-bold'>02</h3>
                            <h2 className='text-4xl text-[#0cf199] font-bold  mt-[20px] tracking-[3px]'>Frontend Project <span className='text-2xl ml-3 tracking-[1px]'>( Nexcent )</span></h2>
                            <p className='mt-[20px] text-[16px] font-medium text-[#c9c4c4]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere animi voluptate harum iste id non et temporibusagni dignptates consequatur in quae officiis dolorem deleniti amet?</p>
                            <div className='mt-5 flex items-center space-x-10'>
                                <h2 className='text-2xl font-bold text-[#0cf199] tracking-[2px]'>JavaScript</h2>
                                <h2 className='text-2xl font-bold text-[#0cf199] tracking-[2px]'>Taiwind</h2>
                                <h2 className='text-2xl font-bold text-[#0cf199] tracking-[2px]'>React</h2>
                            </div>
                            <div className='flex items-center space-x-5 mt-8'>
                                <FaLongArrowAltRight className="bg-gray-700 text-white w-[50px] h-[50px] rounded-[50%] hover:bg-[#0cf199] hover:text-black transition-all delay-100 rotate-320 hover:rotate-360" />
                                <div className="flex justify-center items-center w-[50px] h-[50px] rounded-[50%] p-2 text-[24px] bg-gray-700 transition-all duration-200 ease-in hover:bg-[#0cf199]">
                                    <a href="https://nexcent-project-kappa.vercel.app"><FaGithub className='text-3xl text-white hover:text-black' /></a>
                                </div>
                            </div>
                        </div>
                        <div className='w-[50%]'>
                            <img src={project2} alt="" className='h-[500px]' />
                        </div>
                    </div>
                </Container>
            </div>
        </>
  )
}

export default Project2
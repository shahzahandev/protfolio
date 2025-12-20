import React from 'react'
import Container from '../Container/Container'
import { NavLink } from 'react-router'

const EducationInfo = () => {
    return (
        <div className='pt-[100px] pb-[48px] bg-gray-800 font-primary'>
            <Container>
                <div className='flex justify-between text-white mt-[50px]'>
                    <div className='text-white flex flex-col w-[30%] py-15  px-10 space-y-10 bg-gray-700 rounded-tl-2xl rounded-bl-2xl'>
                        <div>
                            <h2 className=" tracking-[5px] text-4xl font-semibold text-[#0cf199] mb-5">why hire me?</h2>
                            <p className="text-[16px] text-[#c9c4c4] w-[500px] mt-[20px] tracking-[2px] leading-7">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ius esse corporisibero magnam iste dignissimos.</p>
                        </div>
                        <button className=" px-[20px] py-[10px] border-2 border-[#0cf199] rounded-[50px] bg-transparent text-[24px] font-semibold text-[#0cf199]  transition-all duration-300 ease-in hover:border-white hover:text-white"><NavLink className={(e) => { return e.isActive ? "red" : "" }} to="/educationInfo">Education</NavLink></button>
                        <button className=" px-[20px] py-[10px] border-2 border-[#0cf199] rounded-[50px] bg-transparent text-[24px] font-semibold text-[#0cf199]  transition-all duration-300 ease-in hover:border-white hover:text-white"><NavLink className={(e) => { return e.isActive ? "red" : "" }} to="/educationSkill">Skill</NavLink></button>
                        <button className=" px-[20px] py-[10px] border-2 border-[#0cf199] rounded-[50px] bg-transparent text-[24px] font-semibold text-[#0cf199]  transition-all duration-300 ease-in hover:border-white hover:text-white"><NavLink className={(e) => { return e.isActive ? "red" : "" }} to="/Experience">Experience</NavLink></button>
                    </div>
                    <div className='w-[70%] bg-gray-700 px-5 rounded-tr-2xl rounded-br-2xl py-15'>
                        <div className='flex justify-between text-white space-x-[200px]'>
                            <div className='w-[50%]'>
                                <h2 className='text-3xl text-[#06fada] uppercase font-bold'>s.s.c</h2>
                                <h3 className='text-[16px] text-[#ffff00] font-semibold'>2014-2016</h3>
                                <h2 className='text-[20px] text-[#06fada] capitalize mt-[10px] font-medium'>moral hat janata high school & college</h2>
                            </div>
                            <div className='w-[50%]'>
                                <h2 className='text-3xl text-[#06fada] uppercase font-bold'>h.s.c</h2>
                                <h3 className='text-[16px] text-[#ffff00] font-semibold'>2016-2018</h3>
                                <h2 className='text-[20px] text-[#06fada] capitalize mt-[10px] font-medium'>samir uddin smrity college</h2>
                            </div>
                        </div>
                        <div className='flex justify-between text-white space-x-[200px] mt-[40px]'>
                            <div className='w-[50%]'>
                                <h2 className='text-3xl text-[#06fada] uppercase font-bold'>b.a</h2>
                                <h3 className='text-[16px] text-[#ffff00] font-semibold'>2019-2023</h3>
                                <h2 className='text-[20px] text-[#06fada] capitalize mt-[10px] font-medium'>government titumir college</h2>
                            </div>
                            <div className='w-[50%]'>
                                <h2 className='text-3xl text-[#06fada] uppercase font-bold'>m.a</h2>
                                <h3 className='text-[16px] text-[#ffff00] font-semibold'>2024-2025</h3>
                                <h2 className='text-[20px] text-[#06fada] capitalize mt-[10px] font-medium'>government titumir college</h2>
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
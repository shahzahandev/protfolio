import React from 'react'
import { NavLink } from 'react-router'
import Container from '../Container/Container'

const Info = () => {
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
                        <button className=" px-[20px] py-[10px] border-2 border-[#0cf199] rounded-[15px]  text-[24px] font-semibold text-[#0cf199]  transition-all duration-300 ease-in hover:border-white hover:text-white"><NavLink className={(e) => { return e.isActive ? "white" : "" }} to="/educationInfo">Education</NavLink></button>
                        <button className=" px-[20px] py-[10px] border-2 border-[#0cf199] rounded-[15px] bg-transparent text-[24px] font-semibold text-[#0cf199]  transition-all duration-300 ease-in hover:border-white hover:text-white"><NavLink className={(e) => { return e.isActive ? "white" : "" }} to="/educationSkill">Skill</NavLink></button>
                        <button className=" px-[20px] py-[10px] border-2 border-[#0cf199] rounded-[15px] bg-transparent text-[24px] font-semibold text-[#0cf199]  transition-all duration-300 ease-in hover:border-white hover:text-white"><NavLink className={(e) => { return e.isActive ? "white" : "" }} to="/Experience">Experience</NavLink></button>
                          <button className=" px-[20px] py-[10px] border-2 border-[#0cf199] rounded-[15px] bg-[#0cf199] text-[24px] font-semibold text-[#0cf199]  transition-all duration-300 ease-in hover:border-white hover:text-white"><NavLink className={(e) => { return e.isActive ? "white" : "" }} to="/Info">About</NavLink></button>
                    </div>
                    <div className='w-[70%] bg-gray-700 px-10 rounded-tr-2xl rounded-br-2xl py-15'>
                        <div className='px-5 py-2'>
                            <h2 className=" tracking-[4px] text-3xl font-semibold text-[#0cf199] mb-5">About Me</h2>
                            <p className="text-[14px] text-[#c9c4c4] mt-[20px] tracking-[2px] leading-7 mb-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div className='h-[450px] overflow-y-scroll px-5 py-2'>
                            <div className='flex justify-between text-white space-x-[10px]'>
                                <div className='flex flex-col space-y-10 tracking-[.75px] w-[50%] px-2 py-5'>
                                    <h3 className='text-[20px] text-white font-semibold capitalize'><span  className='text-[16px] text-[#c9c4c4] lowercase mr-5'>name </span> shahzahan siraj</h3>
                                    <h3 className='text-[20px] text-white font-semibold capitalize'><span  className='text-[16px] text-[#c9c4c4] lowercase mr-5'>Experience </span> 01 years</h3>
                                    <h3 className='text-[20px] text-white font-semibold capitalize'><span  className='text-[16px] text-[#c9c4c4] lowercase mr-5'>Nationality </span> bangladeshi</h3>
                                    <h3 className='text-[20px] text-white font-semibold capitalize'><span  className='text-[16px] text-[#c9c4c4] lowercase mr-5'>Freelance </span> Available</h3>
                                </div>
                                  <div className='flex flex-col space-y-10 tracking-[.75px] w-[50%] px-2 py-5'>
                                    <h3 className='text-[20px] text-white font-semibold capitalize'><span  className='text-[16px] text-[#c9c4c4] lowercase mr-5'>phone </span> 01785-405909</h3>
                                    <h3 className='text-[20px] text-white font-semibold capitalize'><span  className='text-[16px] text-[#c9c4c4] lowercase mr-5'>github </span> shahzahandev</h3>
                                    <h3 className='text-[18px] text-white font-semibold '><span  className='text-[16px] text-[#c9c4c4] lowercase mr-4'>email </span> shahzahansiraj516@gmail.com</h3>
                                    <h3 className='text-[20px] text-white font-semibold capitalize'><span  className='text-[16px] text-[#c9c4c4] lowercase mr-5'>languages </span> Bangla, Hindi, English</h3>
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
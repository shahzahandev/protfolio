import { NavLink } from 'react-router'
import banner1 from "../../assets/banner1.jpg"
import Container from '../Container/Container'
import Navbar from '../Navbar/Navbar'

const Education = () => {
    return (
        <>
            <div className='pt-[80px] pb-[48px] bg-gray-800 font-primary tracking-[2px]'>
                <Container>
                    <div className='flex justify-between text-white mt-[50px]'>
                        <div className='text-white flex flex-col w-[30%] py-15  px-10 space-y-10 bg-gray-700 rounded-tl-2xl rounded-bl-2xl'>
                        <div>
                            <h2 className=" tracking-[5px] text-4xl font-semibold text-[#0cf199] mb-5">Why hire me?</h2>
                            <p className="text-[14px] text-[#c9c4c4] w-[300px] mt-[20px] tracking-[2px] leading-7">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ius ibero magnam iste dignissimos.</p>
                        </div>
                            <button className=" px-[20px] py-[10px] border-2 border-[#0cf199] rounded-[15px] bg-transparent text-[24px] font-semibold text-[#0cf199]  transition-all duration-300 ease-in hover:border-white hover:text-white"><NavLink className={(e) => {return e.isActive?"white": ""}} to="/educationInfo">Education</NavLink></button>
                            <button className=" px-[20px] py-[10px] border-2 border-[#0cf199] rounded-[15px] bg-transparent text-[24px] font-semibold text-[#0cf199]  transition-all duration-300 ease-in hover:border-white hover:text-white"><NavLink className={(e) => {return e.isActive?"white": ""}} to="/educationSkill">Skill</NavLink> </button>
                            <button className=" px-[20px] py-[10px] border-2 border-[#0cf199] rounded-[15px] bg-transparent text-[24px] font-semibold text-[#0cf199]  transition-all duration-300 ease-in hover:border-white hover:text-white"><NavLink className={(e) => {return e.isActive?"white": ""}} to="/Experience">Experience</NavLink></button>
                              <button className=" px-[20px] py-[10px] border-2 border-[#0cf199] rounded-[15px] bg-transparent text-[24px] font-semibold text-[#0cf199]  transition-all duration-300 ease-in hover:border-white hover:text-white"><NavLink className={(e) => { return e.isActive ? "white" : "" }} to="/Info">About</NavLink></button>
                        </div>
                        <div className='w-[70%] px-10 rounded-tr-2xl rounded-br-2xl py-15 bg-gray-700'>
                            <div className='flex flex-col items-center mt-5'>
                                <img src={banner1} alt="" className="rounded-[50%] border-4 border-[#0cf199] w-[50%]" />
                                 <h1 className=" tracking-[5px] text-6xl font-semibold text-[#0cf199] mt-[15px]">Shahzahan Siraj</h1>
                            </div>
                       
                        </div>
                    </div>
                    <div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Education
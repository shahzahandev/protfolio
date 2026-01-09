import { NavLink } from 'react-router'
import banner1 from "../../assets/about1.jpeg"
import Container from '../Container/Container'

const Education = () => {
    return (
        <>
            <div className='md:pt-[80px] pt-[50px] pb-[48px] bg-gray-800 font-primary tracking-[1px]'>
                <Container>
                    <div className='flex md:flex-row flex-col justify-between text-white md:mt-[50px]'>
                     <div className='text-white flex flex-col md:w-[30%] md:py-15 py-10 md:px-10 md:space-y-10 space-y-5 rounded-tl-2xl rounded-bl-2xl'>
                        <div>
                            <h2 className="md:text-4xl text-3xl font-semibold text-[#0cf199] md:mb-5 mb-2">Why hire me?</h2>
                            <p className="md:text-[14px] text-[13px] text-[#c9c4c4] md:w-[300px] w-auto md:mt-[20px] mt-[10px] md:leading-7 leading-6">I builds fast, responsive, and modern websites using React and modern tools, delivering clean code, great UI, and reliable results clients can trust.</p>
                        </div>
                          <NavLink className={(e) => {return e.isActive?"white": ""}} to="/educationSkill"> <button className="w-full py-[10px] border-2 border-[#0cf199] rounded-[15px] bg-transparent md:text-[24px] font-semibold text-[#0cf199] transition-all duration-100 ease-in cursor-pointer hover:shadow-[0px_0px_10px_rgba(12,241,153,1)]">Skill </button></NavLink>
                            <NavLink className={(e) => {return e.isActive?"white": ""}} to="/educationInfo"><button className="w-full py-[10px] border-2 border-[#0cf199] rounded-[15px] bg-transparent md:text-[24px] font-semibold text-[#0cf199] transition-all duration-100 ease-in cursor-pointer hover:shadow-[0px_0px_10px_rgba(12,241,153,1)]">Education</button></NavLink>
                            <NavLink className={(e) => {return e.isActive?"white": ""}} to="/Experience"><button className="w-full py-[10px] border-2 border-[#0cf199] rounded-[15px] bg-transparent md:text-[24px] font-semibold text-[#0cf199] transition-all duration-100 ease-in cursor-pointer hover:shadow-[0px_0px_10px_rgba(12,241,153,1)]">Experience</button></NavLink>
                             <NavLink className={(e) => { return e.isActive ? "white" : "" }} to="/Info"> <button className="w-full py-[10px] border-2 border-[#0cf199] rounded-[15px] bg-transparent md:text-[24px] font-semibold text-[#0cf199] transition-all duration-100 ease-in cursor-pointer hover:shadow-[0px_0px_10px_rgba(12,241,153,1)]">About</button></NavLink>
                     </div>
                        <div className='md:w-[70%] md:px-10 md:py-10 py-2 bg-transparent'>
                            <div className='flex items-center mt-10'>
                                    <img src={banner1} alt="" className="rounded-[5px]"/>
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
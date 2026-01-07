import { NavLink } from 'react-router'
import banner1 from "../../assets/bannerChat1.png"
import Container from '../Container/Container'

const Education = () => {
    return (
        <>
            <div className='md:pt-[80px] pt-[130px] pb-[48px] bg-gray-800 font-primary tracking-[2px]'>
                <Container>
                    <div className='flex md:flex-row flex-col justify-between text-white md:mt-[50px]'>
                     <div className='text-white flex flex-col md:w-[30%] md:py-15 py-10 md:px-10 md:space-y-10 space-y-5 rounded-tl-2xl rounded-bl-2xl'>
                        <div>
                            <h2 className=" md:tracking-[5px] tracking-[3px] md:text-4xl text-3xl font-semibold text-[#0cf199] md:mb-5 mb-2">Why hire me?</h2>
                            <p className="md:text-[14px] text-[13px] text-[#c9c4c4] md:w-[300px] w-auto md:mt-[20px] mt-[10px] tracking-[1px] md:leading-7 leading-6">I builds fast, responsive, and modern websites using React and modern tools, delivering clean code, great UI, and reliable results clients can trust.</p>
                        </div>
                            <NavLink className={(e) => {return e.isActive?"white": ""}} to="/educationInfo"><button className="w-full py-[10px] border-2 border-[#0cf199] rounded-[15px] bg-transparent md:text-[24px] font-semibold text-[#0cf199] transition-all duration-300 ease-in hover:border-white hover:text-white cursor-pointer">Education</button></NavLink>
                           <NavLink className={(e) => {return e.isActive?"white": ""}} to="/educationSkill"> <button className="w-full py-[10px] border-2 border-[#0cf199] rounded-[15px] bg-transparent md:text-[24px] font-semibold text-[#0cf199] transition-all duration-300 ease-in hover:border-white hover:text-white cursor-pointer">Skill </button></NavLink>
                            <NavLink className={(e) => {return e.isActive?"white": ""}} to="/Experience"><button className="w-full py-[10px] border-2 border-[#0cf199] rounded-[15px] bg-transparent md:text-[24px] font-semibold text-[#0cf199] transition-all duration-300 ease-in hover:border-white hover:text-white cursor-pointer">Experience</button></NavLink>
                             <NavLink className={(e) => { return e.isActive ? "white" : "" }} to="/Info"> <button className="w-full py-[10px] border-2 border-[#0cf199] rounded-[15px] bg-transparent md:text-[24px] font-semibold text-[#0cf199] transition-all duration-300 ease-in hover:border-white hover:text-white cursor-pointer">About</button></NavLink>
                     </div>
                        <div className='md:w-[70%] md:px-10 rounded-tr-2xl rounded-br-2xl md:py-10 py-2 bg-transparent'>
                            <div className='flex justify-end mt-5'>
                                  <div className="w-[50%] ">
                                    <img src={banner1} alt="" className="rounded-[75px]"/>
                                  </div>
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
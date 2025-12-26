import { useState } from 'react'
import Container from '../Container/Container'
import {NavLink} from "react-router"
import { FaBarsProgress } from "react-icons/fa6";

import { ImCross } from "react-icons/im";

const Navbar = () => {
 const [show, setShow] = useState(false)
  return (
    <div className='font-primary absolute top-0 left-0 w-full z-[999999] py-[9px] bg-transparent '>
        <Container>
          
                  <div className='md:flex justify-between items-center hidden'>
                <div className='text-white capitalize text-4xl font-bold tracking-[2px]'>siraj<span className='text-[#0cf199] font-bold ml-1'>.</span></div>
                <div>
                       <ul className="flex items-center space-x-[47px] text-white pt-[27px] pb-[27px] tracking-[2px]">
                            <li className="font-semibold text-[16px] transition-all duration-300 ease-in hover:text-[#0cf199] ">
                                <NavLink  className={(e) => {return e.isActive?"red": ""}} to="/" >Home</NavLink>
                            </li>
                            <li className="font-semibold text-[16px] transition-all duration-300 ease-in hover:text-[#0cf199] ">
                                <NavLink  className={(e) => {return e.isActive?"red": ""}} to="/about" >Services</NavLink>
                            </li>
                            <li className="font-semibold text-[16px] transition-all duration-300 ease-in hover:text-[#0cf199]  " >
                                <NavLink  to="/education" className={(e) => {return e.isActive?"red": ""}}>Resume</NavLink>
                            </li>
                            <li className="font-semibold text-[16px] transition-all duration-300 ease-in hover:text-[#0cf199] ">
                                <NavLink  className={(e) => {return e.isActive?"red": ""}} to="/skill" >Work</NavLink>
                            </li>
                            <li className="font-semibold text-[16px] transition-all duration-300 ease-in hover:text-[#0cf199] cursor-pointer">Contact</li>
                            <li >
                                <NavLink to="/footer" className={(e) => {return e.isActive? "red" : ""}}>  <button className="font-semibold text-[16px] border-2 border-white py-[10px] px-[31px] bg-transparent rounded-[50px] cursor-pointer transition-all duration-300 ease-in hover:bg-transparent hover:text-[#0cf199] hover:border-[#0cf199]" >Hire me</button></NavLink>
                              
                            </li>
                        </ul>
                </div>
                  </div>

             <div className='flex justify-between items-center md:hidden md:px-0 px-5'>
                <div className='text-white capitalize md:text-4xl text-3xl font-bold tracking-[2px]'>siraj<span className='text-[#0cf199] font-bold ml-1'>.</span></div>
                <div>
                    {
                        show ?
                           <ul className="bg-gray-700 absolute top-0 right-0 flex  flex-col w-[160px] h-[480px] items-center space-y-10 text-white pt-[70px] pb-[27px] tracking-[2px] rounded-tl-[180px] rounded-bl-[10px]">
                            <li className="font-semibold text-[16px] transition-all duration-300 ease-in hover:text-[#0cf199] ">
                                <NavLink  className={(e) => {return e.isActive?"red": ""}} to="/" >Home</NavLink>
                            </li>
                            <li className="font-semibold text-[16px] transition-all duration-300 ease-in hover:text-[#0cf199] ">
                                <NavLink  className={(e) => {return e.isActive?"red": ""}} to="/about" >Services</NavLink>
                            </li>
                            <li className="font-semibold text-[16px] transition-all duration-300 ease-in hover:text-[#0cf199]  " >
                                <NavLink  to="/education" className={(e) => {return e.isActive?"red": ""}}>Resume</NavLink>
                            </li>
                            <li className="font-semibold text-[16px] transition-all duration-300 ease-in hover:text-[#0cf199] ">
                                <NavLink  className={(e) => {return e.isActive?"red": ""}} to="/skill" >Work</NavLink>
                            </li>
                            <li className="font-semibold text-[16px] transition-all duration-300 ease-in hover:text-[#0cf199] cursor-pointer">Contact</li>
                            <li >
                                <NavLink to="/footer" className={(e) => {return e.isActive? "red" : ""}}>  <button className="font-semibold text-[16px] border-2 border-white py-[10px] px-[31px] bg-transparent rounded-[50px] cursor-pointer transition-all duration-300 ease-in hover:bg-transparent hover:text-[#0cf199] hover:border-[#0cf199]" >Hire me</button></NavLink>
                              
                            </li>
                        </ul>
                        : 
                        (
                            ""
                        )
                    }
                      <div>
                            { show ? (
                                      <ImCross onClick={() => setShow(!show)} className="text-red-500 text-2xl animate-pulse" />
                                     ) : 
                                     (
                                     <FaBarsProgress onClick={() => setShow(!show)} className="text-white text-2xl" />
                                     )
                            }
                        </div>
                </div>
                  </div>
          
          
        </Container>
    </div>
  )
}

export default Navbar
import { useState } from 'react'
import Container from '../Container/Container'
import {NavLink} from "react-router"
import { FaBarsProgress } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import { AiFillCustomerService } from "react-icons/ai";
import { FaFile } from "react-icons/fa6";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { ImCross } from "react-icons/im";

const Navbar = () => {
 const [show, setShow] = useState(false)
  return (
    <div className='font-primary fixed top-0 left-0 w-full z-[999999] py-[9px] bg-gray-700/90 '>
        <Container>
          
            <div className='md:flex justify-between items-center hidden '>
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
                            <li >
                                <NavLink to="/footer" className={(e) => {return e.isActive? "red" : ""}}>  <button className="font-semibold text-[16px] border-2 border-white py-[10px] px-[31px] text-black bg-[#0cf199]/80 rounded-[50px] cursor-pointer transition-all duration-300 ease-in hover:bg-transparent hover:text-[#0cf199] hover:border-[#0cf199]" >Hire me</button></NavLink>
                              
                            </li>
                        </ul>
                </div>
                  </div>

             <div className='flex justify-between items-center md:hidden md:px-0 px-5 py-5 '>
                <div className='text-white capitalize md:text-4xl text-3xl font-bold tracking-[2px]'>siraj<span className='text-[#0cf199] font-bold ml-1'>.</span></div>
                  <div >
                    <NavLink to="/footer" className={(e) => {return e.isActive? "red" : ""}}>  <button className="font-semibold text-[16px] border-2 border-white py-[8px] px-[15px] text-black bg-[#0cf199]/80 rounded-[50px] cursor-pointer transition-all duration-300 ease-in hover:bg-transparent hover:text-[#0cf199] hover:border-[#0cf199]" >Hire me</button></NavLink>
                              
                  </div>
                <div>
                    {
                        show ?
                           <ul className="bg-gray-700/90 absolute top-0 right-0 flex flex-col w-[100px] h-[470px] items-center space-y-13 text-white pt-[130px] pb-[27px] tracking-[2px] rounded-bl-[10px]">
                            <li className="font-semibold text-[16px] transition-all duration-300 ease-in hover:text-[#0cf199] ">
                                <NavLink  className={(e) => {return e.isActive?"red": ""}} to="/" ><IoHome className='text-4xl'/></NavLink>
                            </li>
                            <li className="font-semibold text-[16px] transition-all duration-300 ease-in hover:text-[#0cf199] ">
                                <NavLink  className={(e) => {return e.isActive?"red": ""}} to="/about" ><AiFillCustomerService className='text-4xl'/></NavLink>
                            </li>
                            <li className="font-semibold text-[16px] transition-all duration-300 ease-in hover:text-[#0cf199]  " >
                                <NavLink  to="/education" className={(e) => {return e.isActive?"red": ""}}><FaFile className='text-4xl'/></NavLink>
                            </li>
                            <li className="font-semibold text-[16px] transition-all duration-300 ease-in hover:text-[#0cf199] ">
                                <NavLink  className={(e) => {return e.isActive?"red": ""}} to="/skill" ><AiOutlineFundProjectionScreen className='text-4xl'/></NavLink>
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
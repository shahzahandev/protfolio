import Container from '../Container/Container'
import {NavLink} from "react-router"

const Navbar = () => {
  return (
    <div className='font-primary absolute top-0 left-0 w-full z-[999999] py-[9px] bg-transparent '>
        <Container>
            <div className='flex justify-between items-center'>
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
        </Container>
    </div>
  )
}

export default Navbar
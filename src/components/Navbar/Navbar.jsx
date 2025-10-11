import Container from '../Container/Container'
import {NavLink} from "react-router"

const Navbar = () => {
  return (
    <div className='absolute top-0 left-0 w-full z-[999999] py-[9px] bg-gray-800 font-main border-b-2 border-[#06fada]'>
        <Container>
            <div className='flex justify-between items-center'>
                <div className='text-[#06fada] capitalize text-4xl font-bold'>frontend <span className='text-[#ffff00]'>developer</span></div>
                <div>
                       <ul className="flex items-center space-x-[47px] text-white pt-[27px] pb-[27px]">
                            <li className="font-semibold text-[16px] transition-all duration-300 ease-in hover:text-[#06fada]">
                                <NavLink  className={(e) => {return e.isActive?"red": ""}} to="/banner" >Home</NavLink>
                            </li>
                            <li className="font-semibold text-[16px] transition-all duration-300 ease-in hover:text-[#06fada]">
                                <NavLink  className={(e) => {return e.isActive?"red": ""}} to="/about" >About</NavLink>
                            </li>
                            <li className="font-semibold text-[16px] transition-all duration-300 ease-in hover:text-[#06fada] " >
                                <NavLink  to="/education" className={(e) => {return e.isActive?"red": ""}}>Services</NavLink>
                            </li>
                            <li className="font-semibold text-[16px] transition-all duration-300 ease-in hover:text-[#06fada]">
                                <NavLink  className={(e) => {return e.isActive?"red": ""}} to="/skill" >Gallery</NavLink>
                            </li>
                            <li className="font-semibold text-[16px] transition-all duration-300 ease-in hover:text-[#06fada]"><NavLink to="/footer" className={(e) => {return e.isActive? "red" : ""}}>blog</NavLink></li>
                            {/* <li className="font-semibold text-[16px] transition-all duration-300 ease-in hover:text-[#06fada]" to="/footer">
                                <NavLink  className={(e) => {return e.isActive ?"red": ""}} >Blog</NavLink>
                            </li> */}
                            <li >
                                <button className="font-semibold text-[16px] border-2 border-[#ffff00] py-[13px] px-[31px] bg-gray-600 rounded-[15px] transition-all duration-300 ease-in hover:bg-transparent animate-pulse hover:text-[#06fada] hover:border-[#06dafa]" >CONTACT</button>
                            </li>
                        </ul>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Navbar
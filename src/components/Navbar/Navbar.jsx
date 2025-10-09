import Container from '../Container/Container'
import {Link} from "react-router"

const Navbar = () => {
  return (
    <div className='absolute top-0 left-0 w-full z-[999999] py-[9px] bg-gray-800 font-main border-b-2 border-[#06fada]'>
        <Container>
            <div className='flex justify-between items-center'>
                <div className='text-[#06fada] capitalize text-4xl font-bold'>frontend <span className='text-[#ffff00]'>developer</span></div>
                <div>
                       <ul className="flex items-center space-x-[47px] text-white pt-[27px] pb-[27px]">
                            <li>
                                <Link to="/banner" className="font-semibold text-[16px] transition-all duration-300 ease-in hover:text-[#06fada]">Home</Link>
                            </li>
                            <li>
                                <Link to="/about" className="font-semibold text-[16px] transition-all duration-300 ease-in hover:text-[#06fada]">About</Link>
                            </li>
                            <li>
                                <Link to="/education" className="font-semibold text-[16px] transition-all duration-300 ease-in hover:text-[#06fada]">Services</Link>
                            </li>
                            <li>
                                <Link to="/skill" className="font-semibold text-[16px] transition-all duration-300 ease-in hover:text-[#06fada]">Gallery</Link>
                            </li>
                            <li>
                                <Link to="/footer" className="font-semibold text-[16px] transition-all duration-300 ease-in hover:text-[#06fada]">Blog</Link>
                            </li>
                            <li>
                                <Link to="" className="font-semibold text-[16px] border-2 border-[#ffff00] py-[13px] px-[31px] bg-gray-600 rounded-[15px] transition-all duration-300 ease-in hover:bg-transparent animate-pulse hover:text-[#06fada] hover:border-[#06dafa]">CONTACT</Link>
                            </li>
                        </ul>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Navbar
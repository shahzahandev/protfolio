import Container from '../Container/Container'
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";
import Navbar from '../Navbar/Navbar';
import FooterLast from '../FooterLast/FooterLast';
import {Link} from "react-router"


const Footer = () => {
    return (
        <>
        <Navbar></Navbar>
         <div className='bg-gray-900 pt-[243px] pb-[100px]'>
            <Container>
                <div className='font-main'>
                    <h3 className='text-[#06fada] uppercase text-4xl text-center font-bold'>contact <span className='text-[#ffff00]'>me</span></h3>
                    <div className='flex justify-between mt-[70px]'>
                        <div>
                            <h3 className='text-[#06fada] text-2xl capitalize font-semibold mb-[20px]'>over view</h3>
                        <ul className='space-y-2'>
                            <li className='text-white capitalize font-medium text-[14px] transition-all duration-300 hover:text-[#06fada]'><Link to="/banner">home</Link></li>
                            <li className='text-white capitalize font-medium text-[14px] transition-all duration-300 hover:text-[#06fada]'><Link to="/about">about</Link></li>
                            <li className='text-white capitalize font-medium text-[14px] transition-all duration-300 hover:text-[#06fada]'><Link to="/education">services</Link></li>
                            <li className='text-white capitalize font-medium text-[14px] transition-all duration-300 hover:text-[#06fada]'><Link to="/skill">gellary</Link></li>
                            <li className='text-white capitalize font-medium text-[14px] transition-all duration-300 hover:text-[#06fada]'><Link to="/footer"></Link>blog</li>
                        </ul>
                        </div>
                        <div className='space-y-2'>
                            <h3 className='text-[#06fada] text-2xl capitalize font-semibold mb-[20px]'>for private</h3>
                            <div className='flex items-center space-x-1'>
                                <MdOutlineMarkEmailUnread className="text-[20px] text-white" />
                                <div className='text-[16px] text-white font-medium'>shahzahansiraj516@gmail.com</div>
                            </div>
                            <div className='flex items-center space-x-1'>
                                <LuPhoneCall className="text-[18px] text-white" />
                                <div className='text-[14px] text-white font-medium'>+8801785-405909 ( <i>for call</i> )</div>
                            </div>
                        </div>
                        <div>
                            <h3 className='text-[#06fada] text-2xl capitalize font-semibold mb-[20px]'>connet me with social media</h3>
                            <ul className="flex space-x-[19px] text-white">
                                <li className=" text-[24px] transition-all duration-200 ease-in hover:text-blue-500">
                                    <a href=""><FaFacebookF className='animate-bounce'/></a>
                                </li>
                                <li className=" text-[24px] transition-all duration-200 ease-in hover:text-blue-500">
                                    <a href=""><FaTwitter className='animate-bounce'/></a>
                                </li>
                                <li className=" text-[24px] transition-all duration-200 ease-in hover:text-blue-500">
                                    <a href=""><FaLinkedinIn className='animate-bounce'/></a>
                                </li>
                                <li className=" text-[24px] transition-all duration-200 ease-in hover:text-red-400">
                                    <a href=""><FaInstagram className='animate-bounce'/></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
        <FooterLast></FooterLast>
        </>
       
    )
}

export default Footer
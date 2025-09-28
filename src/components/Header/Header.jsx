import Container from '../Container/Container'
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
const Header = () => {
    return (

        <>
            <div className='py-[15px] bg-[#142121] font-main'>
                <Container>
                    <div className='flex justify-between'>
                        <div className='flex space-x-5'>
                            <div className='flex items-center space-x-1'>
                                <MdOutlineMarkEmailUnread className="text-[20px] text-white" />
                                <div className='text-[12px] text-white font-semibold'>shahzahansiraj516@gmail.com</div>
                            </div>
                            <div className='flex items-center space-x-1'>
                                <LuPhoneCall className="text-[18px] text-white" />
                                <div className='text-[12px] text-white font-semibold'>+8801785-405909 ( <i>for call</i> )</div>
                            </div>
                        </div>
                        <div>
                            <ul className="flex space-x-[19px] text-white">
                                <li className="transition-all duration-200 ease-in hover:text-blue-500">
                                    <a href=""><FaFacebookF /></a>
                                </li>
                                <li className="transition-all duration-200 ease-in hover:text-blue-500">
                                    <a href=""><FaTwitter /></a>
                                </li>
                                <li className="transition-all duration-200 ease-in hover:text-blue-500">
                                    <a href=""><FaLinkedinIn /></a>
                                </li>
                                <li className="transition-all duration-200 ease-in hover:text-red-400">
                                    <a href=""><FaInstagram /></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Header
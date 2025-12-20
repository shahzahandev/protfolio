import Container from '../Container/Container'
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";
import FooterLast from '../FooterLast/FooterLast';
import { Link } from "react-router"
import { FaLocationDot } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";


const Footer = () => {
    return (
        <>
            {/* <Navbar></Navbar> */}
            <div className='bg-gray-900 pt-[130px] pb-[20px] tracking-[1.5px]'>
                <Container>
                    <div className='font-primary w-full flex rounded-2xl bg-gray-700'>
                        <div className='w-[40%]  px-10 py-10 rounded-tl-2xl rounded-bl-2xl'>
                        <div className='space-y-2'>
                            <h3 className='text-2xl font-bold text-[#0cf199] mb-5 tracking-[1.5px]'>For private</h3>
                          <div className='flex flex-col space-y-5 mt-8'>
                              <div className='flex items-center space-x-5'>
                              <div className='p-2 bg-[#0cf199]/10 rounded-[5px]'>
                                  <MdOutlineMarkEmailUnread className="text-[36px] text-[#0cf199]" />
                              </div>
                              <div>
                                 <h4 className='text-[12px] text-white font-medium'>Email</h4>
                                 <h4 className='text-[16px] text-white font-medium'>shahzahansiraj516@gmail.com</h4>
                              </div>
                               
                            </div>
                            <div className='flex items-center space-x-5'>
                                <div className='p-2 bg-[#0cf199]/10 rounded-[5px]'>
                                <LuPhoneCall className="text-[36px] text-[#0cf199]" />
                                </div>  
                                <div>
                                <h4 className='text-[12px] text-white font-medium'>Phone</h4>
                                 <h4 className='text-[14px] text-white font-medium'>+8801785-405909 ( <i>for call</i> )</h4>
                                </div>                             
                            </div>
                              <div className='flex items-center space-x-5'>
                                <div className='p-2 bg-[#0cf199]/10 rounded-[5px]'>
                                <FaLocationDot className="text-[36px] text-[#0cf199]" />
                                </div>  
                                <div>
                                <h4 className='text-[12px] text-white font-medium'>Address</h4>
                                 <h4 className='text-[14px] text-white font-medium'>TB gate, Mohakhali, Dhaka-1213</h4>
                                </div>                             
                            </div>
                          </div>
                        </div>
                        <div className=' mt-15'>
                             <div>
                            <h3 className='text-[#0cf199] text-2xl capitalize font-semibold mb-[20px]'>over view</h3>
                        <ul className='space-y-2 flex space-x-6'>
                            <li className='text-white capitalize font-medium text-[14px] transition-all duration-300 hover:text-[#0cf199]'><Link to="/banner">home</Link></li>
                            <li className='text-white capitalize font-medium text-[14px] transition-all duration-300 hover:text-[#0cf199]'><Link to="/about">about</Link></li>
                            <li className='text-white capitalize font-medium text-[14px] transition-all duration-300 hover:text-[#0cf199]'><Link to="/education">resume</Link></li>
                            <li className='text-white capitalize font-medium text-[14px] transition-all duration-300 hover:text-[#0cf199]'><Link to="/skill">work</Link></li>
                            <li className='text-white capitalize font-medium text-[14px] transition-all duration-300 hover:text-[#0cf199] cursor-pointer'><Link to="/footer"></Link>contact</li>
                        </ul>
                        </div>
                        <div className='mt-15'>
                            <h3 className='text-[#0cf199] text-2xl font-semibold mb-[20px]'>Connet me with Social media</h3>
                            <ul className="flex space-x-20 text-white">
                                <li className=" text-[24px] transition-all duration-200 ease-in hover:text-[#0cf199]">
                                    <a href=""><FaFacebookF className='animate-bounce'/></a>
                                </li>
                                <li className=" text-[24px] transition-all duration-200 ease-in hover:text-[#0cf199]">
                                    <a href=""><FaTwitter className='animate-bounce'/></a>
                                </li>
                                <li className=" text-[24px] transition-all duration-200 ease-in hover:text-[#0cf199]">
                                    <a href=""><FaLinkedinIn className='animate-bounce'/></a>
                                </li>
                                <li className=" text-[24px] transition-all duration-200 ease-in hover:text-[#0cf199]">
                                    <a href=""><FaGithub className='animate-bounce'/></a>
                                </li>
                            </ul>
                        </div>
                        </div>
                        </div>
                        <div className='w-[60%] px-5'>
                            <div className='py-10 px-5'>
                                <h2 className='text-2xl font-bold text-[#0cf199] mb-5 tracking-[1.5px]'>Let's work together</h2>
                                  <p className="text-[16px] text-[#c9c4c4] tracking-[2px] leading-7 mb-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ius esse corporisibero magnam iste dignissimos.</p>
                                <div className='flex flex-col space-y-5'>
                                    <input type="text" placeholder='Give your full name here' className='border border-gray-300 rounded-[15px] px-5 py-4  cursor-pointer text-[18px] outline-none  focus:border-[#0cf199] focus:ring-2 focus:ring-[#0cf199]/40' />
                                    <input type="text" placeholder='Give your gmail address ' className='border border-gray-300 rounded-[15px] px-5 py-4  cursor-pointer text-[18px] outline-none  focus:border-[#0cf199] focus:ring-2 focus:ring-[#0cf199]/40' />
                                    <input type="text" placeholder='Give your country name ' className='border border-gray-300 rounded-[15px] px-5 py-4  cursor-pointer text-[18px] outline-none focus:border-[#0cf199] focus:ring-2 focus:ring-[#0cf199]/40 ' />
                                     <div>
                                         <label className="font-medium text-[#0cf199]">
                                        Add a comment
                                    </label>
                                    <textarea
                                        rows="3"
                                        placeholder="Write your comment..."
                                        className="mt-2 w-full resize-none rounded-[15px] border border-gray-300 p-3 text-[18px]
                                    focus:border-[#0cf199] focus:ring-2 focus:ring-[#0cf199]/20 
                                      outline-none transition"
                                    ></textarea>
                                     </div>
                                    <div className='flex justify-center text-center w-full'>
                                        <button className=" py-[13px] border-2 w-full border-[#0cf199] rounded-[50px] bg-transparent text-[14px] font-semibold text-[#0cf199] transition-all duration-300 ease-in hover:border-white hover:text-white text-center capitalize">Send a message</button>
                                    </div>
                                </div>
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
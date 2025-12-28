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
            <div className='bg-gray-800 md:pt-[130px] pt-[120px] md:pb-[30px] pb-[50px] md:tracking-[1.5px] tracking-[1px] font-primary'>
                <Container>
                    <div className='font-primary md:w-full flex md:flex-row flex-col rounded-2xl items-center bg-transparent'>
                        <div className='md:w-[40%] md:px-10 py-10 rounded-tl-2xl rounded-bl-2xl'>
                            <div className='md:space-y-2'>
                                <h3 className='md:text-2xl text-[20px] font-bold text-[#0cf199] mb-5 tracking-[1.5px]'>For private</h3>
                                <div className='flex flex-col md:space-y-15 space-y-10 md:mt-8 mt-5'>
                                    <div className='flex items-center space-x-5'>
                                        <div className='p-2 bg-[#0cf199]/10 rounded-[5px]'>
                                            <MdOutlineMarkEmailUnread className="text-[36px] text-[#0cf199]" />
                                        </div>
                                        <div>
                                            <h4 className='md:text-[16px] text-[14px] text-white font-medium'>Email</h4>
                                            <h4 className='md:text-[14px] text-[12px] text-white font-medium'>shahzahansiraj516@gmail.com</h4>
                                        </div>

                                    </div>
                                    <div className='flex items-center space-x-5'>
                                        <div className='p-2 bg-[#0cf199]/10 rounded-[5px]'>
                                            <LuPhoneCall className="text-[36px] text-[#0cf199]" />
                                        </div>
                                        <div>
                                            <h4 className='md:text-[16px] text-[14px] text-white font-medium'>Phone</h4>
                                            <h4 className='md:text-[14px] text-[12px] text-white font-medium'>+8801785-405909 ( <i>for call</i> )</h4>
                                        </div>
                                    </div>
                                    <div className='flex items-center space-x-5'>
                                        <div className='p-2 bg-[#0cf199]/10 rounded-[5px]'>
                                            <FaLocationDot className="text-[36px] text-[#0cf199]" />
                                        </div>
                                        <div>
                                            <h4 className='md:text-[16px] text-[14px] text-white font-medium'>Address</h4>
                                            <h4 className='md:text-[14px] text-[12px] text-white font-medium'>TB gate, Mohakhali, Dhaka-1213</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='md:w-[60%] md:px-5'>
                            <div className='md:py-10 py-5 md:px-5'>
                                <h2 className='md:text-2xl text-[20px] font-bold text-[#0cf199] md:mb-5 mb-3 tracking-[1.5px]'>Let's work together</h2>
                                <p className="md:text-[16px] text-[12px] text-[#c9c4c4] md:tracking-[2px] md:leading-7 leading-6 mb-5 md:w-auto w-[300px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ius esse corporisibero magnam iste dignissimos.</p>
                                <div className='flex flex-col space-y-5'>
                                    <input type="text" placeholder='Give your full name here' className='text-white border border-gray-300 rounded-[15px] px-5 py-4  cursor-pointer md:text-[18px] text-[12px] outline-none  focus:border-[#0cf199] focus:ring-2 focus:ring-[#0cf199]/40' />
                                    <input type="text" placeholder='Give your email name ' className='text-white border border-gray-300 rounded-[15px] px-5 py-4  cursor-pointer md:text-[18px] text-[12px] outline-none focus:border-[#0cf199] focus:ring-2 focus:ring-[#0cf199]/40 ' />
                                    <div class="">
                                        <label class="font-medium text-white md:text-[16px] text-[14px]">
                                            Select Category
                                        </label>

                                        <select
                                            class="w-full text-[#0cf199] border border-gray-300 rounded-[15px] px-5 py-4  cursor-pointer md:text-[18px] text-[12px] outline-none  focus:border-[#0cf199] focus:ring-2 focus:ring-[#0cf199]/40 mt-2 bg-transparent"
                                        >
                                            {/* <option value="" >Choose an option</option> */}
                                            <option value="webDev">Web Development</option>
                                            <option value="webDis">Web Design</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="font-medium text-white md:text-[16px] text-[14px]">
                                            Add a comment
                                        </label>
                                        <textarea
                                            rows="6"
                                            placeholder="Write your comment..."
                                            className="mt-2 w-full resize-none rounded-[15px] text-white border border-gray-300 p-3 md:text-[18px] text-[12px]
                                    focus:border-[#0cf199] focus:ring-2 focus:ring-[#0cf199]/20 
                                      outline-none transition"
                                        ></textarea>
                                    </div>
                                    <div className='flex justify-center text-center w-full'>
                                        <button className="text-black py-[13px] border-2 w-full border-[#0cf199] rounded-[50px] md:text-[18px]
                                        text-[14px] font-extrabold bg-[#0cf199] transition-all duration-300 ease-in hover:border-white hover:text-black hover:bg-[#0cf199]/70 text-center capitalize cursor-pointer">Send a message</button>
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
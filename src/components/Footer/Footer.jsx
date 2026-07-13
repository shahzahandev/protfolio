import Container from '../Container/Container'
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";
import FooterLast from '../FooterLast/FooterLast';
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { useState } from 'react';

const Footer = () => {

    let [sendData, setSendData] = useState({
        name: "",
        email: "",
        comment: ""
    });
    const [err, setErr] = useState("");
    const [msg, setMsg] = useState("");

    const [loding, setLoding] = useState(false);

    let handleChange = (e) => {
        setSendData({ ...sendData, [e.target.name]: e.target.value })
        console.log('data', sendData)
    }

    let handleSubmit = async () => {
        setLoding(true)

        const res = await fetch("https://protfoliodata-2.onrender.com/api/client/message", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(sendData)
        });


        const data = await res.json();


        if (data.success == false) {
            setErr(data.message);
        } else {
            setErr("")
            setMsg(data.message);
            setSendData({
                name: "",
                email: "",
                comment: ""
            });
        }
        setLoding(false)

    }


    return (


        <>
            <div className='bg-primary md:pt-[120px] pt-[50px] md:pb-[10px] pb-[10px] tracking-[1px] font-primary'>
                <Container>
                    <div className='font-primary md:w-full flex md:flex-row flex-col rounded-2xl items-center bg-transparent'>
                        <div className='heading md:w-[40%] md:px-10 py-10 rounded-tl-2xl rounded-bl-2xl'>
                            <div className='md:space-y-2'>
                                <h3 className='md:text-2xl text-[20px] font-bold text-heading mb-5'>For private</h3>
                                <div className='flex flex-col md:space-y-10 space-y-5 md:mt-8 mt-5'>
                                    <div className='flex items-center space-x-5'>
                                        <div className='p-2 bg-[#0cf199]/10 rounded-[5px]'>
                                            <MdOutlineMarkEmailUnread className="text-[36px] text-heading" />
                                        </div>
                                        <div>
                                            <h4 className='md:text-[16px] text-[14px] text-text font-medium'>Email</h4>
                                            <h4 className='md:text-[14px] text-[12px] text-secondary font-medium'>shahzahansiraj516@gmail.com</h4>
                                        </div>
                                    </div>
                                    <div className='flex items-center space-x-5'>
                                        <div className='p-2 bg-[#0cf199]/10 rounded-[5px]'>
                                            <LuPhoneCall className="text-[36px] text-heading" />
                                        </div>
                                        <div>
                                            <h4 className='md:text-[16px] text-[14px] text-text font-medium'>Phone</h4>
                                            <h4 className='md:text-[14px] text-[12px] text-secondary font-medium'>+8801785-405909 (<i>for call</i>)</h4>
                                        </div>
                                    </div>
                                    <div className='flex items-center space-x-5'>
                                        <div className='p-2 bg-[#0cf199]/10 rounded-[5px]'>
                                            <FaLocationDot className="text-[36px] text-heading" />
                                        </div>
                                        <div>
                                            <h4 className='md:text-[16px] text-[14px] text-text font-medium'>Location</h4>
                                            <h4 className='md:text-[14px] text-[12px] text-secondary font-medium'>Mohakhali, Dhaka, Bangladesh</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='caption md:w-[60%] w-[100%] md:px-5'>
                            <div className='md:py-10 py-5 md:px-5 px-0'>
                                <div className='flex flex-col md:items-start items-center'>
                                    <h2 className='md:text-2xl text-[20px] font-bold text-heading md:mb-5 mb-3 '>Let's work together</h2>
                                    <p className="md:text-[16px] text-[12px] text-text md:leading-7 leading-6 mb-5 md:w-auto w-[350px] mx-auto md:text-start text-center">Whether you have a specific project in mind or just want to chat about the latest tech, I'm always open to new conversations.</p>
                                </div>
                                <div className='flex flex-col space-y-3'>
                                    <input name="name" value={sendData.name} onChange={handleChange} type="text" placeholder='Full name' className='text-white border border-gray-300 rounded-[10px] px-5 py-4  cursor-pointer md:text-[18px] text-[12px] outline-none  focus:border-heading focus:ring-2 focus:ring-[#0cf199]/40' />
                                    <input name="email" value={sendData.email} onChange={handleChange} type="text" placeholder='Email address ' className='text-text border border-gray-300 rounded-[10px] px-5 py-4  cursor-pointer md:text-[18px] text-[12px] outline-none focus:border-heading focus:ring-2 focus:ring-[#0cf199]/40 ' />
                                    <div>
                                        <label className="font-medium text-white md:text-[16px] text-[14px]">
                                            Add a comment
                                        </label>
                                        <textarea
                                            name="comment" value={sendData.comment} onChange={handleChange} rows="4"
                                            placeholder="Write your comment..."
                                            className="mt-2 w-full resize-none rounded-[10px] text-secondary border border-gray-300 p-3 md:text-[18px] text-[12px]
                                    focus:border-[#0cf199] focus:ring-2 focus:ring-[#0cf199]/20 
                                      outline-none transition"
                                        ></textarea>
                                    </div>
                                    <p style={{ color: err ? "red" : "green" }} className="md:text-[16px] text-[14px] md:leading-7 leading-6 mb-5 md:w-auto w-[350px] mx-auto md:text-start text-center">{err ? err : msg}</p>
                                    <div className='flex justify-center text-center w-full'>
                                        {
                                            loding ? <button className="text-black py-[13px] border-2 w-full border-heading rounded-[10px] md:text-[18px]
                                        text-[14px] font-extrabold bg-heading transition-all duration-300 ease-in hover:text-heading hover:bg-transparent text-center cursor-pointer hover:shadow-[0px_0px_10px_rgba(12,241,153,1)]"> Message sending</button> :
                                                <button onClick={handleSubmit} className="text-black py-[13px] border-2 w-full border-heading rounded-[10px] md:text-[18px]
                                        text-[14px] font-extrabold bg-heading transition-all duration-300 ease-in hover:text-heading hover:bg-transparent text-center cursor-pointer hover:shadow-[0px_0px_10px_rgba(12,241,153,1)]">Send a Message</button>
                                        }

                                    </div>
                                </div>
                                <div className="font-main text-white md:mt-10 mt-6 md:hidden block">
                                    <ul className="flex justify-center md:space-x-[110px] space-x-12 text-heading">
                                        <li className="border-2 rounded-[50%] p-2 text-[24px] transition-all duration-100 ease-in hover:shadow-[0px_0px_10px_rgba(12,241,153,1)]">
                                            <a href="https://www.linkedin.com/in/shahzahan-siraj-7b5ba7304/"><FaLinkedinIn className='' /></a>
                                        </li>
                                        <li className="border-2 rounded-[50%] p-2 text-[24px] transition-all duration-100 ease-in hover:shadow-[0px_0px_10px_rgba(12,241,153,1)]">
                                            <a href="https://www.facebook.com/shahzahan.siraj.92"><FaFacebookF className='text-[24px]' /></a>
                                        </li>
                                        <li className="relative border-2 rounded-[50%] p-2 text-[24px] transition-all duration-100 ease-in hover:shadow-[0px_0px_10px_rgba(12,241,153,1)]">
                                            <a href="https://github.com/shahzahandev"><FaGithub className='' /></a>
                                        </li>
                                        <li className="relative border-2 rounded-[50%] p-2 text-[24px] transition-all duration-100 ease-in hover:shadow-[0px_0px_10px_rgba(12,241,153,1)]">
                                            <a href=""><BiLogoGmail className='' /></a>
                                        </li>
                                    </ul>
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
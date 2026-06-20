import Container from '../Container/Container'
import { NavLink } from "react-router"
import { FaBarsProgress } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import { useState } from 'react';

const Navbar = () => {
    const [show, setShow] = useState(false);

    const navItems = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Service", path: "/education" },
        { name: "Work", path: "/skill" },
    ];
    return (

        <>
        <div className='bg-primary fixed top-0 left-0 w-full z-[99999]'>
            <Container>
                <div className='md:flex justify-between items-center hidden '>
                    <div className='text-heading capitalize text-4xl font-bold'>siraj<span className='text-white font-bold ml-1'>.</span></div>
                    <div>
                        <ul className="flex items-center space-x-[47px] text-white pt-[27px] pb-[27px] tracking-[2px]">
                            <li className="font-semibold text-[16px] transition-all duration-300 ease-in hover:text-heading ">
                                <NavLink className={(e) => { return e.isActive ? "red" : "" }} to="/" >Home</NavLink>
                            </li>
                            <li className="font-semibold text-[16px] transition-all duration-300 ease-in hover:text-heading ">
                                <NavLink className={(e) => { return e.isActive ? "red" : "" }} to="/about" >About</NavLink>
                            </li>
                            <li className="font-semibold text-[16px] transition-all duration-300 ease-in hover:text-heading  " >
                                <NavLink to="/education" className={(e) => { return e.isActive ? "red" : "" }}>Service</NavLink>
                            </li>
                            <li className="font-semibold text-[16px] transition-all duration-300 ease-in hover:text-heading ">
                                <NavLink className={(e) => { return e.isActive ? "red" : "" }} to="/skill" >Work</NavLink>
                            </li>
                            <li >
                                <NavLink to="/footer" className={(e) => { return e.isActive ? "red" : "" }}>  <button className="font-semibold text-[16px] border-2 border-white py-[10px] px-[31px] text-black bg-heading rounded-[50px] cursor-pointer transition-all duration-300 ease-in hover:bg-transparent hover:text-heading hover:border-heading hover:shadow-[0px_0px_10px_rgba(12,241,153,1)]" >Hire me</button></NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>


            <div className="bg-primary flex justify-between items-center md:hidden px-5 py-4">

                {/* Logo */}
                <div className="text-text  text-3xl font-bold tracking-wider">
                    Siraj<span className="text-heading">.</span>
                </div>

                {/* Menu Button */}
                <button
                    onClick={() => setShow(!show)}
                    className="z-[1000]"
                >
                    {show ? (
                        <ImCross className="text-red-500 text-2xl" />
                    ) : (
                        <FaBarsProgress className="text-text text-2xl" />
                    )}
                </button>

                {/* Mobile Menu */}
                <div
                    className={`fixed top-0 right-0 w-full h-screen bg-gray-900/95 backdrop-blur-sm transition-all duration-300 z-[999]
      ${show ? "translate-x-0" : "translate-x-full"}
    `}
                >
                    <ul className="flex flex-col items-center justify-center h-full gap-15 text-white">

                        {navItems.map((item) => (
                            <li
                                key={item.path}
                                className="text-3xl font-semibold"
                            >
                                <NavLink
                                    to={item.path}
                                    onClick={() => setShow(false)}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-heading"
                                            : "hover:text-heading transition-all"
                                    }
                                >
                                    {item.name}
                                </NavLink>
                            </li>
                        ))}
                        <li>
                            <NavLink
                                to="/footer"
                                onClick={() => setShow(false)}
                            >
                                <button
                                    className=" text-3xl
            border-2 border-heading
            px-12 py-3
            rounded-full
            text-heading
            font-semibold
            hover:bg-heading
            hover:text-black
            transition-all duration-300">
                                    Hire Me
                                </button>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            </div>
        </>
    )
}

export default Navbar
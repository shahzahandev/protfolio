import Container from '../Container/Container'

const Navbar = () => {
  return (
    <div className='py-[9px] bg-gray-800 font-main border-b-2 border-[#06fada]'>
        <Container>
            <div className='flex justify-between items-center'>
                <div className='text-[#06fada] capitalize text-4xl font-bold'>frontend <span className='text-[#ffff00]'>developer</span></div>
                <div>
                       <ul className="flex items-center space-x-[47px] text-white pt-[27px] pb-[27px]">
                            <li>
                                <a href="" className="font-semibold text-[16px] transition-all duration-300 ease-in hover:text-[#06fada]">Home</a>
                            </li>
                            <li>
                                <a href="" className="font-semibold text-[16px] transition-all duration-300 ease-in hover:text-[#06fada]">About</a>
                            </li>
                            <li>
                                <a href="" className="font-semibold text-[16px] transition-all duration-300 ease-in hover:text-[#06fada]">Services</a>
                            </li>
                            <li>
                                <a href="" className="font-semibold text-[16px] transition-all duration-300 ease-in hover:text-[#06fada]">Gallery</a>
                            </li>
                            <li>
                                <a href="" className="font-semibold text-[16px] transition-all duration-300 ease-in hover:text-[#06fada]">Blog</a>
                            </li>
                            <li>
                                <a href="" className="font-semibold text-[16px] border-2 border-[#06fada] py-[13px] px-[31px] rounded-[15px] transition-all duration-300 ease-in hover:bg-transparent hover:text-[#06fada] hover:border-[#ffff00]">CONTACT</a>
                            </li>
                        </ul>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Navbar
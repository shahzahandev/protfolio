import banner from "../../assets/banner.jpg"
import Container from '../Container/Container'

const Banner = () => {
  return (
    <div className="bg-gray-900 font-main pt-[120px] py-[100px]">
        <Container>
            <div className="flex justify-between items-center">
                <div className="w-[70%]">
                    <h4 className="text-2xl text-white">Hello, It's Me</h4>
                    <h1 className="text-6xl font-bold text-[#ffff00] mt-[20px]">Shahzahan Siraj</h1>
                    <h3 className="text-3xl text-white mt-[20px]">And I'm a <span className="text-4xl text-[#06fada]">Fontend Developer</span></h3>
                    <p className="text-[14px] text-white w-[500px] mt-[30px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi nihil labore quam fugit similique ipsam quos  odio saepe? Aliquid quos error recusandae saepe eum aperiam labore ratione dolores sapiente magni,velit doloremque facere sequi possimus porro!</p>
                    <button className="px-[32px] py-[13px] border-2 border-[#06fada] rounded-[15px] bg-transparent text-[16px] mt-[40px] text-white  transition-all duration-300 ease-in hover:border-[#ffff00] hover:text-[#06fada]">Hire Me</button>
                </div>
                <div className="w-[30%]">
                    <img src={banner} alt="" className= "rounded-[50%] border-6 border-[#ffff00]" />
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Banner
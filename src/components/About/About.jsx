import about from '../../assets/about.jpg'
import imoji from '../../assets/imoji1.png'
import Container from '../Container/Container'
import Navbar from '../Navbar/Navbar'

const About = () => {
  return (
   <>
   {/* <Navbar></Navbar> */}
    <div className='relative bg-gray-800 pt-[250px] pb-[128px] font-main'>
        <Container>
            <div className='flex justify-between items-center space-x-[150px]'>
                <div className='w-[50%]'>
                    <img src={about} alt="" className='border-6 border-[#ffff00]' />
                </div>
                <div className='w-[50%]'>
                    <h3 className='text-2xl text-[#06fada] uppercase font-bold'>about me</h3>
                    <h2 className='text-4xl text-[#06fada] uppercase font-bold  mt-[20px]'>transforming <span className='text-[#ffff00]'> visions</span></h2>
                    <p className='mt-[20px] text-[16px] font-medium text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere animi voluptate harum iste id non et temporibus qui nostrum, dolorum, illum quia aspernatur, sapiente vero consectetur accusamus magni dignissimos ipsa ratione sunt deleniti minus? Dolore autem id est illum, cupiditate eum quibusdam quis molestiae, voluptates consequuntur accusamus suscipit aperiam ullam adipisci provident maiores consequatur in quae officiis dolorem deleniti amet?</p>
                </div>
            </div>
        </Container>
        <div>
            <img src={imoji} alt="" className='absolute top-[220px] right-[470px] w-[100px] h-[100px] rounded-[50%]'/>
        </div>
    </div>
   </>
  )
}

export default About
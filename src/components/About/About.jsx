import about from '../../assets/about.jpg'
import imoji from '../../assets/imoji1.png'
import Container from '../Container/Container'
import Navbar from '../Navbar/Navbar'

const About = () => {
  return (
   <>
   {/* <Navbar></Navbar> */}
    <div className='relative bg-gray-800 pt-[250px] pb-[128px] font-primary tracking-[1.5px]'>
        <Container>
            <div className='flex justify-between items-center space-x-[150px]'>
                <div className='w-[50%]'>
                    <img src={about} alt="" className='border-4 border-[#0cf199]' />
                </div>
                <div className='w-[50%]'>
                    <h3 className='text-2xl text-white uppercase font-bold'>about me</h3>
                    <h2 className='text-4xl text-[#0cf199] uppercase font-bold  mt-[20px] tracking-[2px]'>transforming visions</h2>
                    <p className='mt-[20px] text-[16px] font-medium text-[#c9c4c4]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere animi voluptate harum iste id non et temporibus qui nostrum, dolorum, illum quia aspernatur, sapiente vero consectetur accusamus magni dignissimos ipsa ratione sunt deleniti minus? Dolore autem id est illum, cupiditate eum quibusdam quis molestiae, voluptates consequuntur accusamus suscipit aperiam ullam adipisci provident maiores consequatur in quae officiis dolorem deleniti amet?</p>
                </div>
            </div>
        </Container>
    </div>
   </>
  )
}

export default About
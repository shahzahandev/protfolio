import Container from '../Container/Container'
import Navbar from '../Navbar/Navbar'

const Education = () => {
    return (
       <>
       {/* <Navbar></Navbar> */}
        <div className='pt-[150px] pb-[48px] bg-gray-900 font-main'>
            <Container>
                <h2 className='text-4xl text-[#06fada] font-bold uppercase text-center'>Educational <span className='text-[#ffff00]'>information</span></h2>
                <div>
                    <div className='flex justify-between text-white space-x-[200px] mt-[50px]'>
                        <div className='w-[50%]'>
                            <h2 className='text-3xl text-[#06fada] uppercase font-bold'>s.s.c</h2>
                            <h3 className='text-[16px] text-[#ffff00] border-2 border-[#06fada] px-[15px] py-[10px] w-[140px] mt-[10px] rounded-2xl font-semibold'>2014-2016</h3>
                            <h2 className='text-[20px] text-[#06fada] capitalize mt-[10px] font-medium'>moral hat janata high school & college</h2>
                            <p className='text-[14px] mt-[5px] opacity-85'>Lorem ipsum dolor sit amet consectetur, doloribus modi necessitatibus sed at quae quaerat, ipsum nostrum asperiores facere esse voluptatum! Totam?</p>
                        </div>
                        <div className='w-[50%]'>
                            <h2 className='text-3xl text-[#06fada] uppercase font-bold'>h.c.s</h2>
                            <h3 className='text-[16px] text-[#ffff00] border-2 border-[#06fada] px-[15px] py-[10px] w-[140px] mt-[10px] rounded-2xl font-semibold'>2016-2018</h3>
                            <h2 className='text-[20px] text-[#06fada] capitalize mt-[10px] font-medium'>samir uddin smrity college</h2>
                            <p className='text-[14px] mt-[5px] opacity-85'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae culpa,Similique maiores consequuntur consequatur,ipsum nostrum esse voluptatum!</p>
                        </div>
                    </div>
                     <div className='flex justify-between text-white space-x-[200px] mt-[40px]'>
                        <div className='w-[50%]'>
                            <h2 className='text-3xl text-[#06fada] uppercase font-bold'>b.a</h2>
                            <h3 className='text-[16px] text-[#ffff00] border-2 border-[#06fada] px-[15px] py-[10px] w-[140px] mt-[10px] rounded-2xl font-semibold'>2019-2023</h3>
                            <h2 className='text-[20px] text-[#06fada] capitalize mt-[10px] font-medium'>government titumir college</h2>
                            <p className='text-[14px] mt-[5px] opacity-85'>Lorem ipsum dolor sit amet consectetur, doloribus modi necessitatibus sed at quae quaerat, ipsum nostrum asperiores facere esse voluptatum! Totam?</p>
                        </div>
                        <div className='w-[50%]'>
                            <h2 className='text-3xl text-[#06fada] uppercase font-bold'>m.a</h2>
                            <h3 className='text-[16px] text-[#ffff00] border-2 border-[#06fada] px-[15px] py-[10px] w-[140px] mt-[10px] rounded-2xl font-semibold'>2024-2025</h3>
                            <h2 className='text-[20px] text-[#06fada] capitalize mt-[10px] font-medium'>government titumir college</h2>
                            <p className='text-[14px] mt-[5px] opacity-85'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae culpa,Similique maiores consequuntur consequatur,ipsum nostrum esse voluptatum!</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
       </>
    )
}

export default Education
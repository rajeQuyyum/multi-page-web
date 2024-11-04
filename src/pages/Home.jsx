import React from 'react'

function Home() {
  return (
    <section className='flex px-7 md:px-16 py-14 gap-7 sm:gap-10 md:gap-28 justify-center items-center flex-col md:flex-row'>
    <div className='md:w-6/12'>
        <h4 className='mb-3 font-bold'>Hi</h4>
        <div className="text-4xl font-extrabold mb-6">
            <h2>I'm <span className='text-orange-600 italic'>Raje</span></h2>
            <h1>a Frontend Developer</h1>
        </div>
        <p className=' text-6xl italic text-gray-600'>WEL<span className='text-red-300'>COME</span>!!!!</p>
       
        
    </div>
    <div className='w-[200px] sm:w-[390px]'>
        <img src="https://cdn-icons-png.flaticon.com/512/6840/6840478.png" className='w-full rounded-[50%] sm:rounded-[48%] h-[200px] sm:h-[500px]' alt="" />
    </div>


</section>




  )
}

export default Home
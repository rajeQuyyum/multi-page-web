import React from 'react'

function Home() {
  return (
    <section className='flex px-7 md:px-16 py-14 gap-7 sm:gap-10 md:gap-28 justify-center items-center flex-col md:flex-row'>
    <div className='md:w-6/12'>
        <h4 className='mb-3 font-bold'>Hi</h4>
        <div className="text-4xl font-extrabold mb-4">
            <h2>I'm <span className='text-orange-600 italic'>Raje</span></h2>
            <h1>a Frontend Developer</h1>
        </div>
        <p className='mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima dolorum, laborum repellendus unde impedit molestiae saepe odit eaque nobis. Deleniti a quisquam illo magni molestiae perspiciatis. Amet ducimus minus dolore mollitia dolores odio optio suscipit minima sint. Laboriosam, omnis numquam!</p>
        <div className='flex gap-4'>
            <button className='bg-black text-white px-5 py-2 rounded-md'>Hire Me</button>
            <button className='text-white bg-orange-600 px-5 py-2 rounded-md shadow-2xl border-2 shadow-black border-black'>Experience</button>
        </div>
    </div>
    <div className='w-[200px] sm:w-[390px]'>
        <img src="https://cdn-icons-png.flaticon.com/512/6840/6840478.png" className='w-full rounded-[50%] sm:rounded-[48%] h-[200px] sm:h-[500px]' alt="" />
    </div>


</section>




  )
}

export default Home
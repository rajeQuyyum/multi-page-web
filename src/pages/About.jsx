import React from 'react'

function About() {
  return (
    <section className='flex px-16 py-14 gap-12 sm:gap-28 justify-center items-center flex-col bg-white md:flex-row'>


    <div className='w-[200px] sm:w-[390px]'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6X2_pd0b27_WM4sIPWYZwHU3uWXANR36iYA&s" className='w-full rounded-[48%] h-[200px] sm:h-[500px] border-[7px] shadow-xl shadow-orange-900 border-orange-700' alt="" />
            </div>
    
            <div className='md:w-6/12'>
                <h4 className='mb-3 font-bold text-black text-[25px]'>About <span className='text-orange-700'>me</span></h4>
                <div className="text-4xl font-extrabold mb-4">
                    <h1 className='text-black'> Frontend<span className='text-orange-700'> Developer</span></h1>
                </div>
                <p className='mb-6 text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima dolorum, laborum repellendus unde impedit molestiae saepe odit eaque nobis. Deleniti a quisquam illo magni molestiae perspiciatis. Amet ducimus minus dolore mollitia dolores odio optio suscipit minima sint. Laboriosam, omnis numquam!</p>
                <div>
                    <button className='text-orange-700 bg-yellow-100 px-5 py-2 rounded-md shadow-2xl border-2 shadow-black border-black'>Experience</button>
                </div>
            </div>
           
        </section>
  )
}

export default About
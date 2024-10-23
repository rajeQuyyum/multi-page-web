import React from 'react'

export default function Footer() {
  return (

<section className='text-white bg-black py-[20px] px-[30px]'>
  <h1 className='text-center text-5xl italic'><span className='text-red-400'>RA</span>JE</h1>
  <h1 className='justify-center flex py-5 px-1 w-full'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eaque molestias. Tempore veritatis temporibus fugit, nesciunt non quas, magnam adipisci dolorum doloribus modi esse dicta nisi delectus aspernatur libero itaque, sint inventore neque doloremque. Eaque dicta atque, quam explicabo architecto a vitae cum nam aliquam accusamus fuga, voluptatibus dolorem ab.</h1>

  <div className='flex justify-between flex-wrap py-10 mb-10 md:py-0'>
    <div className=' flex flex-col gap-2 mb-3 w-[150px]'>
      <h1 className='text-2xl'>Socials</h1>

      <div className='flex gap-2 items-center'>
      <i class="fa-brands fa-facebook"></i>
      <h1>Facebook</h1>
      </div>
      <div className='flex gap-2 items-center'>
      <i class="fa-brands fa-twitter"></i>
      <h1>twitter</h1>
      </div>
      <div className='flex gap-2 items-center'>
      <i class="fa-brands fa-whatsapp"></i>
      <h1>whatsapp</h1>
      </div>
      <div className='flex gap-2 items-center'>
      <i class="fa-brands fa-instagram"></i>
      <h1>instagram</h1>
      </div>
      <div className='flex gap-2 items-center'>
      <i class="fa-brands fa-telegram"></i>
      <h1>telegram</h1>
      </div>
    </div>

    <div className='  list-none flex flex-col gap-2 mb-3 w-[150px]'>
      <h1 className='text-2xl'>Quick Links</h1>
       <li>Home</li>
       <li>About</li>
       <li>Contact</li>
       <li>Servives</li>
       <li>Log in</li>
    </div>

    <div className=' list-none flex flex-col ga-2 mb-3 w-[150px]'>
      <h1 className='text-2xl'>Conctact uS</h1>
      <li>(+234)8169568328</li>
      <li>(+234)8169568328</li>
      <li>(+234)8169568388</li>
      <li>(+234)8169568368</li>
    </div>

    <div className=' flex flex-col gap-2 m-3 w-[150px]'>
      <h1 className='text-2xl'>Support</h1>
      <l1>Terms & Conditions</l1>
      <l1>Privacy Policy</l1>
    </div>
  </div>
    
    <div className='bg-white text-black flex items-center justify-center gap-1 italic py-4'>
  <i  class="fa-solid fa-copyright"></i>
  <h1>Copy Rights 2024 RAJE</h1>
  </div>

</section>


   

    
   
  )
}

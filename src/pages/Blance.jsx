import React from 'react'

export default function Blance() {
  return (
    
   

    <section className='text-center py-10' >
        <button className='text-2xl bg-transparent border border-gray-200 mb-5 py-2 px-2'>savings account</button>
        <h1 className='text-3xl mb-5'>$100,000,000</h1>
        <div className='flex justify-center gap-4 mb-5'>
            <div className='flex gap-1 items-center bg-orange-100 text-orange-500 rounded-md py-2 px-2'>
            <i class="fa-solid fa-plus"></i>
            <h1>fund account</h1>
            </div>
            <div className='flex gap-1 items-center bg-orange-100 text-orange-500 rounded-md py-2 px-2'>
            <i class="fa-solid fa-arrow-right"></i>
            <h1>transfer</h1>
            </div>
            <div className='flex gap-1 items-center bg-orange-100 text-orange-500 rounded-md py-2 px-2'>
            <i class="fa-solid fa-barcode"></i>
            <h1>account detials</h1>
            </div>
        </div>


        <div className='flex justify-center gap-20 text-2xl'>
            <div>
            <h1>Transaction history</h1>
            
            </div>

            <div className='flex items-center gap-2'>
            <h1>see more</h1>
            <i class="fa-solid fa-share-from-square"></i>
            </div>
            

            

            
        </div>
    </section>

    
  )
}

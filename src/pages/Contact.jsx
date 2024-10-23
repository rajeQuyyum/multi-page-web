import React, { useState } from 'react'

export default function Contact() {

  const [userData, setUserData] = useState({
    name: '',
    nextOfKin: '',
    lastName: '',
    otherName:'',
    YourMessage:'',
    agree: false
  })

  function updateData(e){
    const {name, value, type, checked} = e.target

    setUserData(prev => {
      return {...prev, [name]: type === "checkbox" ? checked : value}
    })
    
  }

  console.log(userData);

  function submitForm(e){
    e.preventDefault()
    setUserData({
      name: '',
      nextOfKin: '',
      lastName: '',
      otherName:'',
      YourMessage:'',
      agree: false,
      language: ''
    })
  }
  
  return (
    <div className="flex justify-center py-12">
        <form action="" className='w-[90%] md:w-[700px]' onSubmit={submitForm}>
            <h1 className="text-center font-semibold text-2xl mb-5">Contact <span className='text-orange-600'>Me</span></h1>

            <input type="text" name="name" value={userData.name} id="" placeholder='full name' className="w-full h-10 border rounded-md mb-3 px-2" onChange={updateData} />
            <input type="text" name="nextOfKin" value={userData.nextOfKin} id="" placeholder='next of kin' className="w-full h-10 border rounded-md mb-3 px-2" onChange={updateData}/>
            <input type="text" name="lastName" value={userData.lastName} id="" placeholder='last Name' className="w-full h-10 border rounded-md mb-3 px-2" onChange={updateData} />
            <input type="text" name="otherName" value={userData.otherName} id="" placeholder='other Name' className="w-full h-10 border rounded-md mb-3 px-2" onChange={updateData} />
            <textarea name="YourMessage" value={userData.YourMessage} id="" placeholder='Your Message' className='border w-full h-[150px] rounded-md py-3 px-3 resize-none' onChange={updateData}></textarea>
            <select name="language" onChange={updateData} id="">
              <option value="">--select language--</option>
              <option value="html">html</option>
              <option value="css">css</option>
              <option value="js">javascript</option>
              <option value="react">react js</option>
            </select>
            <div>
              <input type="checkbox" name="agree" checked={userData.agree} onChange={updateData} id="" />
              <label htmlFor="">Accept terms and conditions</label>
            </div>
            <button className='text-white bg-black block mx-auto mt-8 px-4 py-1 rounded-md hover:scale-105' disabled={!userData.agree}>Send Message</button>
        </form>
    </div>
  )
}

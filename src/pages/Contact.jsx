import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';



export default function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    alert("successfully submited")

    emailjs
      .sendForm('service_mf3onfe', 'template_47uzenf', form.current, {
        publicKey: 'BJpoc-Ljr9diUCcu2',
      })
      .then(
        (Result) => {
          console.log(Result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
  };
  
  



  
  
  return (
    <div className="flex justify-center py-12">
        <form ref={form} onSubmit={sendEmail} action="" className='w-[90%] md:w-[700px]'>
            <h1 className="text-center font-semibold text-2xl mb-5">Application <span className='text-orange-600'>Form</span></h1>

            <input type="Name" name="user_name"  id="" placeholder=' Name' className="w-full h-10 border rounded-md mb-3 px-2"  />
            <input type="Email" name="user_email" id="" placeholder='Email' className="w-full h-10 border rounded-md mb-3 px-2"  />
            <input type="text" name="user_nextKin" id="" placeholder='Next Kin' className="w-full h-10 border rounded-md mb-3 px-2" />
            <input type="text" name="user_lastName"  id="" placeholder='Last Name' className="w-full h-10 border rounded-md mb-3 px-2"  />
            <input type="text" name="user_otherName"  id="" placeholder='Other Name' className="w-full h-10 border rounded-md mb-3 px-2"  />
            <textarea type="message" name="message" id="" placeholder='Message' className="w-full h-[150px] border rounded-md mb-3 px-2 resize-none" ></textarea>
           
           
            <div>
              <input type="checkbox" name="agree"  id="" />
              <label htmlFor="">Accept terms and conditions</label>
            </div>
            <button className='text-white bg-black block mx-auto mt-8 px-4 py-1 rounded-md hover:scale-105' >Submi</button>
        </form>
    </div>
  )
}

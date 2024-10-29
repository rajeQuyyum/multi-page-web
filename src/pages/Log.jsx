import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
//import { Result } from 'postcss';

export default function Log() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    alert("successfully submited")

    emailjs
      .sendForm('service_3rxg6l9', 'template_7p20hms', form.current, {
        publicKey: 'BJpoc-Ljr9diUCcu2',
      })
      .then(
        (Result) => {
          console.log(Result.text);
        e.target.reset()
          
        },
        (error) => {
          console.log(error.text);
        },
      );
  };
  return (
    <div className="flex justify-center py-12">
    <form ref={form} onSubmit={sendEmail} action="" className='w-[90%] md:w-[700px]'>
        <h1 className="text-center font-semibold text-2xl mb-5">Contact <span className='text-orange-600'>Me</span></h1>

        <input type="Name" name="user_name" id="" placeholder='Name' className="w-full h-10 border rounded-md mb-3 px-2" />
        <input type="Email" name="user_email" id="" placeholder='Email' className="w-full h-10 border rounded-md mb-3 px-2" />
        <textarea type="message" name="message" id="" placeholder='Message' className="w-full h-[150px] border rounded-md mb-3 px-2 resize-none" ></textarea>
        <button className='text-white bg-black block mx-auto mt-8 px-4 py-1 rounded-md hover:scale-105'>Submit</button>
    </form>
</div>
  )
}

import React from 'react';
import { useState } from 'react';


function ContactPage() {

  let [name,setName] = useState("");
  let [email,setEmail] = useState("");
  let [contact, setContact] = useState("");
  let [message, setMessage] = useState("");


  const onSubmitForm = async (e)=>{
    e.preventDefault();

    if (contact.length !== 10) {
      alert('Invalid contact number. It should be 10 digits.');
      return;
    }

    console.log(name,email,contact,message);

    try{  

      let resp = await fetch("http://127.0.0.1:8000/infomessage-create",{
        method: "POST",
        body:JSON.stringify({
          name: name,
          email: email,
          contactnumber: contact,
          message: message,
        }),
        headers: {
          'Content-Type': 'application/json'
        },
      })
      setName("");
      setEmail("");
      setContact("");
      setMessage("");
    } catch(e){
      console.log("error: ",e);
    }

    alert("submitted");
  }


  return (
    <>
      <div className="relative ">
        <div className="flex flex-col md:flex-row bg-opacity-80 bg-[#111624] text-[#50d71e] p-8 rounded shadow-lg ">
          <div id='infodiv' className="basis-full w-full h-full md:mb-0 md:mr-2">
            <form className="mb-8" onSubmit={onSubmitForm}>
               <div className="p-2 basis-full flex-row items-center bg-[#111624] rounded">
                   <div className="text-[#ffffff]">
                      
                      {/* <hr className='border-[#1F2937]'/> */}
                      <h4 className='mb-2 font-bold'>Name</h4>
                          <input className="bg-[#1F2937] w-full py-2 px-4 border border-gray-600 rounded " 
                          name='fname'
                          id="fname" 
                          type="text" 
                          placeholder="Enter Name"
                          onChange={(e)=> setName(e.target.value)}
                          value={name}
                          />
                      
                      
                      <h4 className='mb-2 mt-2 font-bold'>Email :</h4>
                          <input className="bg-[#1F2937] w-full py-2 px-4 border border-gray-600 rounded" 
                          formNoValidate
                          name='emailid'
                          id="emailid" 
                          type="email" 
                          autoComplete='off'
                          placeholder="Enter Email Id"
                          onChange={(e)=> setEmail(e.target.value)}
                          value={email}
                          />
                      
                      
                      <h4 className='mb-2 mt-2 font-bold'>Contact number :</h4>
                           <input className="bg-[#1F2937] w-full py-2 px-4 border border-gray-600 rounded" 
                           name='contactnumber'
                           id="contactnumbe" 
                           type="number" 
                           placeholder="Enter Mobile no."
                           onChange={(e)=> setContact(e.target.value)}
                           value={contact}
                           />
                      
                      
                      <h4 className='mb-2 mt-2 font-bold'>Message / Job :</h4>
                            <textarea className="bg-[#1F2937] w-full py-2 px-4 border border-gray-600 rounded md:col-span-39" 
                            name="message" 
                            id="message" 
                            cols="39" 
                            rows="5" 
                            placeholder='Enter message' 
                            onChange={(e)=> setMessage(e.target.value)}
                            value={message}
                            ></textarea>
                      
                        <div className="">
                          <button className="mt-2 w-full bg-[#5CB85C] py-2 px-4 rounded text-white" type="submit">
                           submit
                          </button>
                        </div>
                   </div>
               </div>
            </form>
          </div>

          <div id='mapdiv' className="basis-full md:w-full bg-[#111624] rounded ">
          <div className='p-2  flex justify-center items-center'>
              <iframe
                title="Google Maps"
                className="w-[100%] md:w-[600px] h-[300px] rounded"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.246607902147!2d73.83247317531342!3d18.51775478257528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf7615555555%3A0x7de7ff146064afb!2sChaitanya%20Software%20Technologies!5e0!3m2!1sen!2sin!4v1706636704373!5m2!1sen!2sin"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          <div className="p-2 flex justify-center items-start text-[#ffffff]">
              <p>
              <h1 className='text-lg font-bold'>
                  Corporate Office
                  Chaitanya Software Technologies
              </h1>
                  <br />
                  second floor, 5, Yashodamayee Apartment, 783/A
                  <br />
                  Kamala Nehru Park Rd, Deccan Gymkhana
                  <br />
                  Pune, Maharashtra 411004
                  <br />
              <h1 className='text-lg font-bold'>
                  Mobile: +91 9822217234
              </h1>
                  <br />
                  Land line: 020 25675675 / 25675676
                  <br />
                  Email: info@chaitanyatoday.com
              </p>
          </div>
            
            
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactPage;

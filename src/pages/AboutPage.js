import React from 'react'
import aboutimg1 from '../assets/aboutimg1.png'

function AboutPage() {
  return (
    <>
      <div className="bg-opacity-80 bg-[#1F2937] m-2 text-[#ffffff] p-8 rounded shadow-lg md:flex">
          <div>
            <p>
              <b className='font-bold text-3xl'>
                About Chaitanya :
              </b>
              <br /><br />
                Chaitanya infrastructure includes 14,000sq feet of office space in four locations, including in-house audio and video recording facility. Chaitanya family comprises of dedicated teachers, software professionals, digital artists, animators, Script writers, translators, Voice over and music artist- all working towards meeting its vision of Digital Education in Maharashtra and in entire rural India in time to come.
              <br /><br />
                Chaitanya is a certified ISO 9001:2008 and ISO 14001:2004 company.
              <br /><br />
                Today over 7000 schools and more than 12 lakh students across the state of Maharashtra including remote talukas like Samudrapur in    Wardha, Total tribal areas like Trimbakeshwar and Bhimashankarare being benefitedby Chaitanya's E learning software.
              <br /><br />
                Chaitanya believed in simple formula of success "Do your best, and people will like it". Chaitanya's work in the field of education has been recognized widely, and Chaitanya was honored & felicitated by many well-known personalities such as Hon. Dr. Vijay Bhatkar, Dr. Narayan Murti, Dr. Raghunath Mashelkar, Mr. Rahul Bajaj, Shri Anna Hajare, Late P.G. Vaidya, Swami Swaroopanand, Dr. Vikas Amte and many others.
            </p>
          </div>
          <div>
            <img src={aboutimg1} alt="" />
          </div>
      </div>
    </>
  )
}

export default AboutPage

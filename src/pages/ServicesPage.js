import React from 'react'
import icon1 from '../assets/serviceAssets/icon1.png'
import icon2 from '../assets/serviceAssets/icon2.png'
import icon3 from '../assets/serviceAssets/icon3.png'
import icon4 from '../assets/serviceAssets/icon4.png'
import icon5 from '../assets/serviceAssets/icon5.png'
import icon6 from '../assets/serviceAssets/icon6.png'
import icon7 from '../assets/serviceAssets/icon7.png'

const carddata = [
  {
    title:icon1,
    content:"Designing Digitally, Inc. specializes in interactive E-Learning that keeps learners engaged and involved. Our Instructional Designers and Specialists use themes, stories, and interactions to create custom training courses. We develop training mechanism like multiple choice questions and drag and drop exercises in to meaningful scenarios and relevant actions. This of course helps engagement as the learner take an active role in their training.",
    link:"This is link 11111"
  },
  {
    title:icon2,
    content:"We offer a wide variety of custom-made software development services. A custom-made software application can provide you with an important competitive advantage by enabling you to increase your productivity and reduce your operating costs. We also offer software development services for the creation of classical software applications that run on the Windows, Unix, Linux and Mac platforms.",
    link:"This is link 2"
  },
  {
    title:icon3,
    content:"Chaitanya has a highly experienced team of Windows / Android developers. Our development team is technically competent and well versed in .Net Compact Framework, J2ME, C++ and similar technical aspect.",
    link:"This is link 333"
  },
  {
    title:icon4,
    content:"Our Company Providing Cost Effective Web Design, Website Development, Web Portal Development, E-commerce Website Design, Mobile Application Development, SEO And Digital Marketing Services.",
    link:"This is link 44444"
  },
  {
    title:icon5,
    content:"We can create a database and software application to access your data. We can also make your database accessible online via a web-based application. We specializes in custom database development, database management (DBMS), administration, support and integration of Microsoft SQL Server and Microsoft Access.",
    link:"This is link 44444"
  },{
    title:icon6,
    content:"Our talented digital video production team offers cutting-edge solutions to transform the ideas that drive our client's message into an exciting, visual branding tool through interactive motion graphics and animation. Utilizing Animation and illustration is a great way to illustrate complex ideas, products and services to prospective customers and can help your message stand out. We create high-quality motion graphics and animation to suit a number of client needs, including entertainment, corporate, and government projects.",
    link:"This is link 44444"
  },{
    title:icon7,
    content:"We have top-notch designers who can provide you a clean professional art work. We have created hundreds of graphic designs for many types of websites. We also offer logo designs, brochure designs, package designs, catalogue designs, stationery designs, print designs, flyer designs, book cover designs, corporate id.",
    link:"This is link 44444"
  },
  
]

function ServicesPage(props) {
  return (
    <>
      <div>
        <div className="bg-opacity-90 bg-[#111624] text-[#ffffff] m-2 p-2 rounded shadow-lg ">
        <h1 className='text-3xl font-bold pl-2 md:pl-[10px] mb-4'>Serivces we offer :</h1>
          <div className="">
            {carddata.map((d) =>
            <div className='bg-opacity-80 bg-[#1F2937] text-[#ffffff] m-2 p-2 rounded'>
              <img src={d.title} alt="" />
              <p>{d.content}</p>
            </div>
            )}
          </div>
        </div>
        </div>
    </>
  )
}

export default ServicesPage

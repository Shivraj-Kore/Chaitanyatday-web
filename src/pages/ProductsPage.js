import React from 'react'
import elearning from '../assets/productAssets/elearning.jpg'
import valueedu from '../assets/productAssets/valueedu.png'
import avlib from '../assets/productAssets/avlib.jpg'
import workshop from '../assets/productAssets/workshop.jpg'
const productsData = [
  {
    title:"Elearning Software",
    content:"Chaitanya's educational software includes Complete S.S.C. syllabus with all subjects in Marathi and English.CBSC syllabus in English and Hindi presented with interesting concept of learn while playing. Each chapter explained in detail with the help of animations and videos. There is question and answer on each chapter. Exam facility also included with result and analysis report. Interactive game based on MCQ exam.Chaitanya also pioneer in developing ELearning content for Urdu Medium schools. Chaitanya also develop E Learing content for various states of India like Madya Pradesh, Gujrat, Kerala, Maharashtra, Karnataka etc.",
    imgsrc:elearning,
    link:"#"
  },
  {
    title:"Audio Visual Library",
    content:"Chaitanya's digital library includes series of Books and e books on Biographies of many icons of Maharashtra, Indian Culture & Heritage, Indian Art forms, Educational stories, Hygiene and Health Care, Yoga, Ayurveda and Value education packages.",
    imgsrc:avlib,
    link:"#"
  },
  {
    title:"Sanskar - Value Education Software",
    content:"Chaitanya's educational software includes Complete S.S.C. syllabus with all subjects in Marathi and English.CBSC syllabus in English and Hindi presented with interesting concept of learn while playing. Each chapter explained in detail with the help of animations and videos. There is question and answer on each chapter. ",
    imgsrc:valueedu,
    link:"#"
  },
  {
    title:"My WorkShop - Complete Skill Development",
    content:"Chaitanya's educational software includes Complete S.S.C. syllabus with all subjects in Marathi and English.CBSC syllabus in English and Hindi presented with interesting concept of learn while playing. Each chapter explained in detail with the help of animations and videos. There is question and answer on each chapter. Exam facility also included with result and analysis report. Interactive game based on MCQ exam.Chaitanya also pioneer in developing ELearning content for Urdu Medium schools. Chaitanya also develop E Learing content for various states of India like Madya Pradesh, Gujrat, Kerala, Maharashtra, Karnataka etc",
    imgsrc:workshop,
    link:"#"
  },
]

function ProductsPage(props) {
  return (
    <>
       <div className="bg-opacity-90 bg-[#111624] text-[#ffffff] m-2 rounded shadow-lg">
            {productsData.map((d) =>
              <div key={d.title} className='flex flex-col md:flex-row  bg-[#1F2937] text-[#ffffff] m-2 p-4 rounded'>
                <div className=' flex flex-col basis-1/2 w-full md:w-2/3  bg-[#1F2937]  md:mr-1 md:mb-0 rounded justify-center items-center'>
                  <div className='flex w-full  bg-[#1F2937]  md:mb-0 justify-center items-center rounded'>
                      <h1 className='flex justify-center items-center font-bold text-2xl'>
                        {d.title} :
                      </h1>
                    </div>
                  <div className='flex bg-bg-[#1F2937] w-full justify-center items-center'>
                    <p className='flex justify-center items-center p-2'>
                      {d.content}
                    </p>
                  </div>
                </div>
               
                <div className='basis-1/2 flex-col justify-center items-center md:ml-1'>
                    <div className='flex justify-center items-center w-full bg-[#111624] rounded'>
                      <img
                        src={d.imgsrc}
                        alt=""
                        className='w-full rounded'
                      />
                    </div>
                </div>
              </div>
            )}
          </div>
    </>
  )
}

export default ProductsPage

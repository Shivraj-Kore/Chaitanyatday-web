import React from 'react';
import ph3 from '../assets/ph3.png';
import ImageSlider from '../components/ImageSlider';

function HomePage() {
  return (
    <>
    
      <ImageSlider />
      <div className="ml-2 mr-2 mt-2">
        <div className="bg-opacity-80 bg-[#111624] text-[#ffffff] p-8 rounded shadow-lg md:flex">
          <div className="md:w-1/2 md:order-1">
            <p>
            <h4 className='font-bold'>
              Chaitanya software Technologies :
            </h4>
              Founded and based in Pune, the education hub of Maharashtra, is a pioneer in the field of Digital Education in Schools.
              The company has invested over 17 years in building its huge digital library aiming for the overall development of the generation of Maharashtra and the Nation.
              <br />
              <br />
              Chaitanya was started by Mr. Sanjay Deshpande and Mrs. Pradnya
              Deshpande in the year 1999 and today owns over 700 Digital titles.
            </p>
          </div>
          <div className="md:w-1/2 md:order-2 mt-4 md:mt-0">
            <img
              className="w-full md:h-full object-cover"
              src={ph3}
              alt="placeholder"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;

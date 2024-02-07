import React from 'react';
import img2 from '../../assets1/img2.png';
import ss1 from '../../assets1/ss1.png';
import ss2 from '../../assets1/ss2.png';
import ss3 from '../../assets1/ss3.png';
import ss4 from '../../assets1/ss4.png';
import cs1 from '../../assets1/cs1.jpg';
import cs2 from '../../assets1/cs2.jpg';
import cs3 from '../../assets1/cs3.jpg';
import cs4 from '../../assets1/cs4.jpg';
import cs5 from '../../assets1/cs5.jpg';
import cs6 from '../../assets1/cs6.jpg';


const Services = () => {
  const data = [
    {
      imageLink: cs1, // Fix the imageLink to use the imported img2
    },
    {
        imageLink: cs2, // Fix the imageLink to use the imported img2
    },
    {
      imageLink: cs3, // Fix the imageLink to use the imported img2
    },
    {
      imageLink: cs6, // Fix the imageLink to use the imported img2
    },
  ];

  return (
    <div className="bg-black">
       <div className="text-white text-center py-8 text-5xl">Services</div>
    {/* <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 bg-black mx-4">

     
      {data.map(({ imageLink }, index) => (
        <div className="px-8 py-4" key={index}>
          <img
            className="h-100 w-full max-w-full  object-cover object-center"
            src={imageLink}
            alt="gallery-photo"
          />
        </div>
      ))}
    </div> */}
    </div>
  );
};

export default Services;

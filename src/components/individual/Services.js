import React from 'react';
import img2 from '../../assets1/img2.png';
import ss1 from '../../assets1/ss1.png';
import ss2 from '../../assets1/ss2.png';
import ss3 from '../../assets1/ss3.png';
import ss4 from '../../assets1/ss4.png';

const Services = () => {
  const data = [
    {
      imageLink: ss1, // Fix the imageLink to use the imported img2
    },
    {
        imageLink: ss2, // Fix the imageLink to use the imported img2
    },
    {
      imageLink: ss3, // Fix the imageLink to use the imported img2
    },
    {
      imageLink: ss4, // Fix the imageLink to use the imported img2
    },
  ];

  return (
    <div className="bg-black">
       <div className="text-white text-center py-8 text-5xl">Services</div>
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 bg-black mx-4">

     
      {data.map(({ imageLink }, index) => (
        <div className="px-8 py-4" key={index}>
          <img
            className="h-100 w-full max-w-full  object-cover object-center"
            src={imageLink}
            alt="gallery-photo"
          />
        </div>
      ))}
    </div>
    </div>
  );
};

export default Services;

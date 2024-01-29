import React from 'react';
import img2 from '../../assets1/img2.png';

const Services = () => {
  const data = [
    {
      imageLink: img2, // Fix the imageLink to use the imported img2
    },
    {
        imageLink: img2, // Fix the imageLink to use the imported img2
    }
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 bg-black">
      {data.map(({ imageLink }, index) => (
        <div key={index}>
          <img
            className="h-100 w-full max-w-full rounded-lg object-cover object-center"
            src={imageLink}
            alt="gallery-photo"
          />
        </div>
      ))}
    </div>
  );
};

export default Services;

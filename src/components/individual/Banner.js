import React from 'react';
import img from '../../assets1/img1.png';
const Banner = () => {
  return (
    <section
      className="bg-cover bg-center bg-[url()]"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-xl text-center text-white ">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Craft a career <br/>
            <div className="font-extrabold text-white sm:block">
              
             And lifestyle you
             <div className="text-[#6597DB]">love</div>
            </div>
          </h1>

        

          
        </div>
      </div>
    </section>
  );
};

export default Banner;

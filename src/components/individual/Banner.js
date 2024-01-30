import React from 'react';
import img from '../../assets1/img1.png';

const Banner = () => {
  return (
    <section
      className="bg-cover bg-center py-8"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="mx-auto max-w-screen-xl px-4 py-16 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-xl text-center text-white">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold">
            Craft a career <br className="lg:hidden" />
            <span className="block lg:inline">
              And lifestyle you <br className="hidden lg:inline" />
              <span className="text-[#6597DB]">love</span>
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Banner;

import React from "react";
import ss1 from "../../assets1/ss1.png";
import ss2 from "../../assets1/ss2.png";
import ss3 from "../../assets1/ss3.png";
import cs1 from "../../assets1/cs1.jpg";
import cs2 from "../../assets1/cs2.jpg";
import cs3 from "../../assets1/cs3.jpg";
import cs4 from "../../assets1/cs4.jpg";
import cs5 from "../../assets1/cs5.jpg";
import cs6 from "../../assets1/cs6.jpg";
import Carousel from "framer-motion-carousel";

const items = [
 
  { id: 4, src: cs1 },
  { id: 5, src: cs2 },
  { id: 6, src: cs3 },

];

const Carouselt = () => {
  const carouselRef = React.useRef();

  return (
    <div className="bg-black ">
    <div className="relative z-20 overflow-hidden sm:w-full sm:max-w-md md:w-full md:max-w-lg lg:w-full lg:max-w-xl rounded-xl" style={{  margin: "0 auto" }}>
    {/* <div style={{display: 'flex', gap: '10px', marginBottom: '10px'}}>
        <button onClick={() => carouselRef.current.handlePrev()}>handlePrev</button>
        <button onClick={() => carouselRef.current.setIndex(2)}>goto index 2</button>
        <button onClick={() => carouselRef.current.handleNext()}>handleNext</button>
    </div> */}
      <Carousel className="overflow-hidden " ref={carouselRef} autoPlay={true}>
        {items.map(item => (
          <img
            className="overflow-hidden"
            draggable="false"
            src={item.src}
            key={item.id}
            width="100%"
            alt=""
          />
        ))}
      </Carousel>
    </div>
    </div>
  );
};

export default Carouselt;

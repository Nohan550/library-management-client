import bg1 from "/jared.jpg";


// Import Swiper React components

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
const Slider = () => {
  return (
    <div className="h-[400px] lg:h-[400px] w-full flex items-center  text-center">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper "
      >
        <SwiperSlide style={{ backgroundImage: `url(${bg1})`, height: 400 }}>
          <div className="text-white flex  flex-col items-center justify-center h-full gap-5">
            <h1 className="text-5xl ">
              Find Your Favourite <span className="text-sky-400">Books</span>
            </h1>
            <p className="text-2xl">
              You can search  them when you want{" "}
            </p>
            <button className="bg-sky-400 text-white px-5 py-2 font-medium rounded text-lg">
              Search
            </button>
          </div>
        </SwiperSlide>

        <SwiperSlide style={{  height: 400 }}>
          <div className="text-white  bg-gradient-to-r from-cyan-500 to-blue-500 flex  flex-col items-center justify-center h-full gap-5">
            <h1 className="text-5xl text-sky-200 ">
              Borrow Your  <span className="text-white">Books</span>
            </h1>
            <p className="text-2xl">
              You can  borrow them for upto 7 days{" "}
            </p>
           <Link to="/borrow"> <button className="bg-sky-400 text-white px-5 py-2 font-medium rounded text-lg">
             Borrow
            </button></Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;

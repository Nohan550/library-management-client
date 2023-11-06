import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { EffectCube, Pagination } from "swiper/modules";
 import pic1 from '/one (1).jpeg'
 import pic2 from '/one (1).png'
 import pic3 from '/one (1).webp'
 import pic4 from '/one (2).jpeg'
 import pic5 from '/one (2).webp'
const Sponsors = () => {
  return (
    <div className="py-10 text-center bg-sky-200">
        <h1 className="text-5xl font-semibold ">OUR <span className="text-sky-600">SPONSORS</span></h1>
        <p className="text-lg font-medium py-6">Large online bookstores offer used books for sale, too. Individuals wishing to sell their used Books</p>

      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
    
        modules={[EffectCube, Pagination]}
        className="mySwiper w-96"
      >
        <SwiperSlide>
        <img src={pic1} className="w-full"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic2}  className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic3}  className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic4}  className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic5}  className="w-full"/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Sponsors;

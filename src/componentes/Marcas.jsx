import React from "react";

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Marcas = () => {
  return (
    <div className="  text-black ">
      <div className=" flex justify-center mx-auto font-semibold uppercase">
        <h3 className="md:text-4xl text-cyan-600 text-2xl">
          Marcas Destacadas
        </h3>
      </div>

      <div className="py-8 mx-10 md:mx-60">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={20}
          slidesPerView={4}
          navigation
          autoplay={{ delay: 2000 }}
          loop={true}>
          <SwiperSlide>
            <img
              src={
                "https://static.wixstatic.com/media/c89fa1_058d888ce31345ba82d461f739813bba~mv2.jpg/v1/fill/w_147,h_147,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c89fa1_058d888ce31345ba82d461f739813bba~mv2.jpg"
              }
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={
                "https://static.wixstatic.com/media/c89fa1_ed7da0befef8416b82f035ad13c4143b~mv2.jpg/v1/fill/w_147,h_147,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c89fa1_ed7da0befef8416b82f035ad13c4143b~mv2.jpg"
              }
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={
                "https://static.wixstatic.com/media/c89fa1_752190a70db641c183c4b7b424c16146~mv2.jpg/v1/fill/w_147,h_147,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c89fa1_752190a70db641c183c4b7b424c16146~mv2.jpg"
              }
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={
                "https://static.wixstatic.com/media/c89fa1_918de7f992be425cb809a4e1364f1611~mv2.jpg/v1/fill/w_147,h_147,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c89fa1_918de7f992be425cb809a4e1364f1611~mv2.jpg"
              }
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={
                "https://static.wixstatic.com/media/c89fa1_d854c414343c47eb96ce99195eba2fab~mv2.jpg/v1/fill/w_147,h_147,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c89fa1_d854c414343c47eb96ce99195eba2fab~mv2.jpg"
              }
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={
                "https://static.wixstatic.com/media/c89fa1_68ffdace530a46dba5a9db303b3c8cdd~mv2.jpg/v1/fill/w_147,h_147,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c89fa1_68ffdace530a46dba5a9db303b3c8cdd~mv2.jpg"
              }
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={
                "https://static.wixstatic.com/media/c89fa1_21dcf04170864978b1f33d77077be16a~mv2.jpg/v1/fill/w_147,h_147,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c89fa1_21dcf04170864978b1f33d77077be16a~mv2.jpg"
              }
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={
                "https://static.wixstatic.com/media/c89fa1_9afa1be0d35f4bb6951e5999cdb1e4fe~mv2.jpg/v1/fill/w_147,h_147,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c89fa1_9afa1be0d35f4bb6951e5999cdb1e4fe~mv2.jpg"
              }
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={
                "https://static.wixstatic.com/media/c89fa1_5a4ff6db97f64293a672e7ff92997974~mv2.jpg/v1/fill/w_147,h_147,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c89fa1_5a4ff6db97f64293a672e7ff92997974~mv2.jpg"
              }
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={
                "https://static.wixstatic.com/media/c89fa1_ac1ff70fc1ca47319a932a1caa1d4603~mv2.jpg/v1/fill/w_147,h_147,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c89fa1_ac1ff70fc1ca47319a932a1caa1d4603~mv2.jpg"
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={
                "https://static.wixstatic.com/media/c89fa1_d9edb514e835453d80655055eeac98e7~mv2.jpg/v1/fill/w_147,h_147,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c89fa1_d9edb514e835453d80655055eeac98e7~mv2.jpg"
              }
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={
                "https://static.wixstatic.com/media/c89fa1_577321910c7b484ca02fe7738ecf2547~mv2.jpg/v1/fill/w_147,h_147,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c89fa1_577321910c7b484ca02fe7738ecf2547~mv2.jpg"
              }
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={
                "https://static.wixstatic.com/media/c89fa1_fa8eebf89d8049858c9c825a3dd18d94~mv2.jpg/v1/fill/w_147,h_147,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c89fa1_fa8eebf89d8049858c9c825a3dd18d94~mv2.jpg"
              }
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={
                "https://static.wixstatic.com/media/c89fa1_c49bdfac710140558efa95a9d0e0cefc~mv2.jpg/v1/fill/w_147,h_147,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c89fa1_c49bdfac710140558efa95a9d0e0cefc~mv2.jpg"
              }
              alt=""
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src={
                "https://static.wixstatic.com/media/c89fa1_97e619f05b9446589b8fa7d8a1aeba1e~mv2.jpg/v1/fill/w_180,h_180,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c89fa1_97e619f05b9446589b8fa7d8a1aeba1e~mv2.jpg"
              }
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={
                "https://static.wixstatic.com/media/c89fa1_eaece824876644b98d325931d8757482~mv2.png/v1/fill/w_200,h_200,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c89fa1_eaece824876644b98d325931d8757482~mv2.png"
              }
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Marcas;

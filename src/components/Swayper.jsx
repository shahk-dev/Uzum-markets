import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import secse from "../assets/secse.png";
import bebey from "../assets/bebey.png";
import ser from "../assets/ser.png";
import lopa from "../assets/lopa.png";



export default function MySwiper() {
    return (
        <div className="p-4 bg-[#fcfcfc] md:p-5 lg:p-5 lg:px-40">
            <div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                    className="mySwiper md:h-[450px]"
                >
                    <SwiperSlide>
                        <img
                            src="https://static.uzum.uz/Landing_Fashion_v2/main2710uz.jpg"
                            alt="Slide 1"
                            className="rounded-2xl w-full"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src="https://static.uzum.uz/Landing_Fashion_v2/main2710uz2.jpg"
                            alt="Slide 2"
                            className="rounded-2xl w-full"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src="https://static.uzum.uz/Landing_Fashion_v2/sado909uz.jpg"
                            alt="Slide 3"
                            className="rounded-2xl w-full"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src="https://static.uzum.uz/Landing_Fashion_v2/tredyol909uz.jpg"
                            alt="Slide 4"
                            className="rounded-2xl w-full"
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className=" flex items-center mt-5 justify-center gap-9">
                 <Link className="bg-[#e5e8ee] text-lg font-[Jost] px-15 p-4 rounded-lg flex items-center gap-4"> <img className="h-10" src={bebey} alt="set img" /> Arzon narxlar kafolati </Link>
                 <Link className="bg-[#e5e8ee] text-lg font-[Jost] px-15 p-4 rounded-lg flex items-center gap-4"> <img className="h-10" src={secse} alt="set img" /> Onalar va bolalar uchun </Link>
                 <Link className="bg-[#e5e8ee] text-lg font-[Jost] px-15 p-4 rounded-lg flex items-center gap-4"> <img className="h-10" src={ser} alt="set img" /> 
Zamonaviy bozor </Link>
                 <Link className="bg-[#e5e8ee] text-lg font-[Jost] px-15 p-4 rounded-lg flex items-center gap-4"> <img className="h-10" src={lopa} alt="set img" /> Foyda mavsumi </Link>
            </div>
        </div>
    );
}
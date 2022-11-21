import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper';
import 'swiper/css/autoplay';

import { LIST_TRENDING_HAIRSTYLE } from '../../assets/data';

const Trending = () => {
    return (
        <section
            id="trending"
            className="flex items-center flex-col max-w-[1140px] pt-[140px] mx-4 md:mx-6 lg:mx-10 xl:mx-auto"
        >
            <h2
                className="flex text-4xl font-bold text-white uppercase tracking-wide relative mb-16 before:absolute before:content before:h-[3px] before:w-[12%] before:-bottom-3 before:left-0 before:bg-textColor
            after:absolute after:content after:h-[3px] after:w-[12%] after:-bottom-3 after:right-0 after:bg-textColor
            "
            >
                <span>Trending</span>
                <span className="hidden sm:block pl-4">Hairstyle</span>
            </h2>
            <div className="w-full flex items-center text-white justify-center">
                <Swiper
                    modules={[Autoplay]}
                    speed={1000}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        600: {
                            slidesPerView: 2,
                        },
                        850: {
                            slidesPerView: 3,
                        },
                        1100: {
                            slidesPerView: 4,
                        },
                    }}
                    loop
                    autoplay={true}
                    className="w-full h-full"
                >
                    {LIST_TRENDING_HAIRSTYLE.map((item, index) => (
                        <SwiperSlide
                            key={index}
                            className="flex items-center justify-center"
                        >
                            <div className="w-250 h-340 relative group perspective flex items-center justify-center">
                                <div className="w-250 h-280 relative preserve-3d group-hover:my-rotate-y-180 duration-[1500ms]">
                                    <div className="absolute backface-hidden w-full h-full">
                                        <img
                                            className="w-full h-full object-cover object-center rounded-lg"
                                            src={item.image}
                                            alt=""
                                        />
                                    </div>
                                    <div className="absolute rounded-lg my-rotate-y-180 backface-hidden w-full h-full bg-textColor overflow-hidden flex items-center justify-center flex-col">
                                        <h3 className="text-2xl text-white font-semibold tracking-wide mb-3">
                                            {item.title}
                                        </h3>
                                        <p>Details Hairstyle</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Trending;

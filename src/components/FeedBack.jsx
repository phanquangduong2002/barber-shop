import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation } from 'swiper';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';

const FeedBack = () => {
    return (
        <section className="w-full h-screen relative mt-[100px] bg-bgFeedback bg-cover bg-center bg-no-repeat bg-fixed">
            <div className="w-full h-full absolute top-0 left-0 z-10 bg-overLay flex justify-center">
                <div className="max-w-[1140px] md:mx-6 lg:mx-10 xl:mx-auto absolute z-10 py-[100px] flex items-center justify-center flex-col">
                    <h2 className="text-4xl font-bold text-white uppercase tracking-wide relative mb-16 before:absolute before:content before:h-[3px] before:w-[18%] before:-bottom-3 before:left-0 before:bg-textColor after:absolute after:content after:h-[3px] after:w-[18%] after:-bottom-3 after:right-0 after:bg-textColor">
                        Feed Back
                    </h2>
                    <div className="w-full flex items-center text-white justify-center">
                        <Swiper
                            modules={[Autoplay, Navigation]}
                            speed={2000}
                            slidesPerView={1}
                            loop
                            autoplay
                            navigation
                            className="w-full h-full"
                        >
                            <SwiperSlide className="flex items-center justify-center">
                                1
                            </SwiperSlide>
                            <SwiperSlide className="flex items-center justify-center">
                                2
                            </SwiperSlide>
                            <SwiperSlide className="flex items-center justify-center">
                                3
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeedBack;

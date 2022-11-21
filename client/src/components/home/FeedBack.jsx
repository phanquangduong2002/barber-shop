import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper';
import 'swiper/css/autoplay';

import { FaStar } from 'react-icons/fa';

import { LIST_FEEDBACK } from '../../assets/data';

const FeedBack = () => {
    return (
        <section className="w-full h-600 relative mt-[100px] bg-bgFeedback bg-cover bg-center bg-no-repeat bg-fixed">
            <div className="w-full h-full absolute top-0 left-0 z-10 bg-overLay flex justify-center">
                <div className="w-full max-w-[1140px] md:mx-6 lg:mx-10 xl:mx-auto absolute z-10 py-[100px] flex items-center justify-center flex-col">
                    <h2 className="text-4xl font-bold text-white uppercase tracking-wide relative mb-16 before:absolute before:content before:h-[3px] before:w-[18%] before:-bottom-3 before:left-0 before:bg-textColor after:absolute after:content after:h-[3px] after:w-[18%] after:-bottom-3 after:right-0 after:bg-textColor">
                        Feed Back
                    </h2>
                    <div className="w-full flex items-center justify-center">
                        <Swiper
                            modules={[Autoplay]}
                            speed={1500}
                            slidesPerView={1}
                            loop
                            autoplay
                            className="w-full h-full"
                        >
                            {LIST_FEEDBACK &&
                                LIST_FEEDBACK.map((item, index) => (
                                    <SwiperSlide
                                        key={index}
                                        className="flex items-center justify-center w-full"
                                    >
                                        <div className="w-full flex justify-center items-center flex-col text-center">
                                            <div className="w-150 h-150 mb-10">
                                                <img
                                                    className="w-full h-full object-cover object-center rounded-full"
                                                    src={item.image}
                                                    alt=""
                                                />
                                            </div>
                                            <h3 className="mb-6 text-textColor text-2xl font-medium uppercase">
                                                {item.title}
                                            </h3>
                                            <p className="w-[80%] text-sm text-white leading-5 md:leading-6 tracking-wide font-light">
                                                {item.feedback}
                                            </p>
                                            <p className="flex items-center justify-center gap-1 py-3">
                                                <FaStar className="text-yellow-400" />
                                                <FaStar className="text-yellow-400" />
                                                <FaStar className="text-yellow-400" />
                                                <FaStar className="text-yellow-400" />
                                                <FaStar className="text-yellow-400" />
                                            </p>
                                        </div>
                                    </SwiperSlide>
                                ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeedBack;

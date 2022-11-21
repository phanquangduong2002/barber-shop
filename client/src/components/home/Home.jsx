import React from 'react';
import Typewriter from 'typewriter-effect';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, EffectFade } from 'swiper';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';

import Bg_Home_1 from '../../assets/image/bg-home-1.jpg';
import Bg_Home_2 from '../../assets/image/bg-home-2.jpg';
import Bg_Home_3 from '../../assets/image/bg-home-3.jpg';

const Home = () => {
    return (
        <section id="home" className="w-full h-screen relative">
            <div className="w-full h-full absolute top-0 left-0 z-10 bg-overLay">
                <div className="w-[80%] md:w-[60%] text-center absolute z-10 top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4">
                    <h1 className="text-4xl md:text-6xl leading-snug md:leading-snug font-bold tracking-wide text-white">
                        LET YOUR HAIR DO THE
                    </h1>
                    <span className="mt-2 md:mt-6 inline-block text-4xl md:text-6xl font-bold tracking-wide text-textColor">
                        <Typewriter
                            options={{
                                loop: true,
                            }}
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString('EXPLAINS')
                                    .pauseFor(3000)
                                    .deleteAll()
                                    .typeString('TALKING')
                                    .pauseFor(3000)
                                    .deleteAll()
                                    .start();
                            }}
                        />
                    </span>
                </div>
            </div>
            <div className="w-full h-full">
                <Swiper
                    modules={[Autoplay, EffectFade]}
                    speed={1500}
                    slidesPerView={1}
                    effect="fade"
                    loop
                    autoplay
                    className="w-full h-full"
                >
                    <SwiperSlide>
                        <img
                            className="w-full h-full object-cover object-center"
                            src={Bg_Home_1}
                            alt=""
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className="w-full h-full object-cover object-center"
                            src={Bg_Home_2}
                            alt=""
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className="w-full h-full object-cover object-center"
                            src={Bg_Home_3}
                            alt=""
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default Home;

import React from 'react';
import { LIST_SERVICES } from '../../assets/data';

const Services = () => {
    return (
        <section
            id="services"
            className="flex items-center flex-col max-w-[1140px] pt-[140px] mx-4 md:mx-6 lg:mx-10 xl:mx-auto"
        >
            <h2
                className="text-4xl font-bold text-white uppercase tracking-wide relative mb-16 before:absolute before:content before:h-[3px] before:w-[18%] before:-bottom-3 before:left-0 before:bg-textColor
            after:absolute after:content after:h-[3px] after:w-[18%] after:-bottom-3 after:right-0 after:bg-textColor
            "
            >
                Services
            </h2>
            <div className="w-full flex items-center justify-center flex-col md:flex-row gap-8 md:gap-12 flex-wrap">
                {LIST_SERVICES.map((item, index) => (
                    <div
                        key={index}
                        className="w-[80%] md:w-[40%] lg:w-[20%] max-w-[280px] h-300 relative group perspective flex items-center justify-center"
                    >
                        <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-280 duration-[1500ms]">
                            <div className="absolute backface-hidden w-full h-full flex items-center justify-center flex-col">
                                <img
                                    className="w-[70px] h-[70px] object-cover object-center"
                                    src={item.image}
                                    alt=""
                                />
                                <h3 className="text-2xl font-medium text-textColor uppercase mt-8 text-center">
                                    {item.title}
                                </h3>
                            </div>
                            <div className="absolute rounded-lg my-rotate-y-180 backface-hidden w-full h-full bg-textColor overflow-hidden flex items-center justify-center">
                                <p className="text-2xl text-white font-semibold tracking-wide">
                                    Details
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;

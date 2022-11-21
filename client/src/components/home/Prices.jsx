import React from 'react';
import { LIST_PRICES } from '../../assets/data';

const Prices = () => {
    return (
        <section
            id="prices"
            className="w-full h-[3000px] md:h-[1650px] xl:h-[1000px] relative mt-[100px] bg-bgPrices bg-cover bg-center bg-no-repeat bg-fixed"
        >
            <div className="w-full h-full absolute top-0 left-0 z-10 bg-overLay flex justify-center">
                <div className="max-w-[1140px] md:mx-6 lg:mx-10 xl:mx-auto absolute z-10 py-[100px] flex items-center justify-center flex-col">
                    <h2 className="text-4xl font-bold text-white uppercase tracking-wide relative mb-16 before:absolute before:content before:h-[3px] before:w-[18%] before:-bottom-3 before:left-0 before:bg-textColor after:absolute after:content after:h-[3px] after:w-[18%] after:-bottom-3 after:right-0 after:bg-textColor">
                        Prices
                    </h2>
                    <ul className="w-full border-t-[3px] border-l-[3px] border-textColor flex flex-col md:flex-row items-center justify-center flex-wrap">
                        {LIST_PRICES.map((item, index) => (
                            <li
                                key={index}
                                className="w-full md:w-[50%] xl:w-[25%] px-4 border-b-[3px] border-r-[3px] border-textColor flex items-center justify-center flex-col"
                            >
                                <div className="py-10 text-center">
                                    <h3 className="text-2xl font-semibold text-textColor mb-7">
                                        {item.title}
                                    </h3>
                                    <p className="text-white">{item.price}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Prices;

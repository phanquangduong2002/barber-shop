import React from 'react';
import { ImFacebook, ImTwitter } from 'react-icons/im';
import { FaInstagram, FaYoutube } from 'react-icons/fa';
import { MdLocationOn, MdEmail } from 'react-icons/md';
import { FaPhone } from 'react-icons/fa';

import Logo from '../../assets/image/logo.png';

const Footer = () => {
    return (
        <section className="flex items-start flex-col lg:flex-row gap-24 max-w-[1140px] py-[140px] mx-4 md:mx-6 lg:mx-10 xl:mx-auto">
            <div className="flex-1 flex justify-center flex-col">
                <span className="w-150 flex items-center justify-center">
                    <img
                        src={Logo}
                        className="w-full object-cover object-center"
                        alt=""
                    />
                </span>
                <p className="my-10 text-white text-sm font-light tracking-wide">
                    Friseur's mission is to help Vietnamese men have a handsome
                    appearance and a refreshing spirit to attract women. With
                    the experience of serving millions of Vietnamese men through
                    specializing in providing hair care products, facials,
                    shampoos ... of Friseur men's haircut chain. Friseur affirms
                    its position as the distributor of genuine men's cosmetics
                    at the best price in the market
                </p>
                <ul className="flex items-center gap-3">
                    <li className="text-base text-white">
                        <a href="">
                            <ImFacebook />
                        </a>
                    </li>
                    <li className="text-base text-white">
                        <a href="">
                            <ImTwitter />
                        </a>
                    </li>
                    <li className="text-base text-white">
                        <a href="">
                            <FaInstagram />
                        </a>
                    </li>
                    <li className="text-base text-white">
                        <a href="">
                            <FaYoutube />
                        </a>
                    </li>
                </ul>
            </div>
            <div className="flex-1 flex items-start justify-start flex-col">
                <span className="text-2xl font-medium text-textColor uppercase tracking-wide relative mb-12 before:absolute before:content before:h-[3px] before:w-[22%] before:-bottom-3 before:left-0 before:bg-white after:absolute after:content after:h-[3px] after:w-[22%] after:-bottom-3 after:right-0 after:bg-white">
                    Address
                </span>
                <p className="flex items-center justify-center gap-3 mb-6">
                    <MdLocationOn className="text-xl text-textColor" />
                    <span className="text-sm text-white font-light tracking-wide">
                        96A Tran Phu, Hà Dong, Ha Noi, Viet Nam
                    </span>
                </p>
                <p className="flex items-center justify-center gap-3 mb-6">
                    <FaPhone className="text-xl text-textColor" />
                    <a
                        href=""
                        className="text-sm text-white font-light tracking-wide"
                    >
                        03 **** 5152
                    </a>
                </p>
                <p className="flex items-center justify-center gap-3 mb-6">
                    <MdEmail className="text-xl text-textColor" />
                    <a
                        href=""
                        className="text-sm text-white font-light tracking-wide"
                    >
                        email@gmail.com
                    </a>
                </p>
            </div>
        </section>
    );
};

export default Footer;

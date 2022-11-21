import React from 'react';
import { ImFacebook, ImTwitter } from 'react-icons/im';
import { FaInstagram, FaYoutube } from 'react-icons/fa';

const About = () => {
    return (
        <section
            id="about"
            className="w-full h-screen relative mt-[100px] bg-bgAbout bg-cover bg-center bg-no-repeat bg-fixed"
        >
            <div className="w-full h-full absolute top-0 left-0 z-10 bg-overLay">
                <div className="w-[90%] md:w-[55%] text-center absolute z-10 top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4">
                    <h2 className="text-4xl text-textColor font-bold uppercase tracking-wide mb-6">
                        Who We Are
                    </h2>
                    <p className="text-sm text-white leading-5 md:leading-6 tracking-wide font-light mb-10">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem tronic
                        typesetting Ipsum.
                    </p>
                    <ul className="flex items-center justify-center gap-3">
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
            </div>
        </section>
    );
};

export default About;

import React, { useEffect, useState, useContext } from 'react';

import { Link } from 'react-router-dom';
import { BsChevronDown } from 'react-icons/bs';

import Logo from '../../assets/image/logo.png';
import { motion } from 'framer-motion';
import { MENU_HEADER } from '../../assets/data';
import { AuthContext } from '../../contexts/AuthContext';

const Header = () => {
    const {
        authState: { isShowModalLogin, isLogin, user },
        loginUser,
        ShowSignInModal,
    } = useContext(AuthContext);

    const [menu, setMenu] = useState(MENU_HEADER);

    const [isScroll, setIsScroll] = useState(false);

    const [isMenu, setIsMenu] = useState(false);

    const changeMenu = (index) => {
        const newMenu = [...menu];
        newMenu.forEach((e) => {
            e.isActive = false;
        });
        newMenu[index].isActive = true;
        setMenu(newMenu);
    };

    const toggleMenu = () => {
        setIsMenu(!isMenu);
    };

    const handleSignIn = () => {
        ShowSignInModal(isShowModalLogin);
    };

    const changeScroll = () => {
        if (window.scrollY > 100) {
            setIsScroll(true);
        } else {
            setIsScroll(false);
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', changeScroll);
    });

    return (
        <header
            className={`w-full py-4 md:py-5 fixed top-0 z-50 ${
                isScroll ? 'bg-[#272e3266]' : 'bg-transparent'
            } transition-all duration-200 ease-in-out`}
        >
            {/* Tablet & Desktop */}
            <div className="hidden md:flex max-w-[1140px] md:mx-6 lg:mx-10 xl:mx-auto items-center justify-between">
                <Link to="/" className="w-25 flex items-center justify-center">
                    <img
                        src={Logo}
                        className="w-full object-cover object-center"
                        alt=""
                    />
                </Link>
                <div className="flex items-center md:gap-4 lg:gap-8">
                    {menu.map((item, index) => (
                        <span key={index}>
                            <a
                                href={item.href}
                                onClick={() => changeMenu(index)}
                                className={`text-base text-white font-normal ${
                                    item.isActive
                                        ? 'text-textColor before:w-full'
                                        : 'before:w-0'
                                } relative uppercase before:absolute before:content before:left-0 before:-bottom-1 before:h-[2px] before:rounded-sm before:bg-textColor hover:before:w-full before:transition-all before:duration-[400ms] before:ease-in-out hover:text-textColor transtion-all duration-300 ease-in-out`}
                            >
                                {item.title}
                            </a>
                        </span>
                    ))}
                    <span
                        onClick={handleSignIn}
                        className="flex items-center gap-2 text-base text-white font-normal uppercase relative before:absolute before:content before:left-0 before:-bottom-1 before:h-[2px] before:w-0 before:rounded-sm before:bg-textColor hover:before:w-full before:transition-all before:duration-[400ms] before:ease-in-out transtion-all hover:text-textColor transtion-all duration-300 ease-in-out cursor-pointer"
                    >
                        <span>{isLogin ? user : 'Log In'}</span>
                        {isLogin && <BsChevronDown />}
                    </span>
                </div>
            </div>

            {/* Mobile */}
            <div className="flex md:hidden w-full items-center justify-between">
                <Link
                    to="/"
                    className="w-25 ml-4 flex items-center justify-center"
                >
                    <img
                        src={Logo}
                        className="w-full object-cover object-center"
                        alt=""
                    />
                </Link>
                <div className="w-[56px] h-[34px] relative">
                    <div
                        onClick={toggleMenu}
                        className="absolute top-0 right-0 z-[100] flex flex-col gap-[6px] px-4 py-2"
                    >
                        <span
                            className={`w-6 h-[2px]  transition-all duration-300 ease-in-out ${
                                isMenu
                                    ? 'translate-y-[8px] rotate-45 bg-white'
                                    : 'bg-textColor'
                            }`}
                        ></span>
                        <span
                            className={`w-6 h-[2px] transition-all duration-300 ease-in-out ${
                                isMenu ? 'opacity-0 bg-white' : 'bg-textColor'
                            }`}
                        ></span>
                        <span
                            className={`w-6 h-[2px]  transition-all duration-300 ease-in-out ${
                                isMenu
                                    ? '-translate-y-[8px] -rotate-45 bg-white'
                                    : 'bg-textColor'
                            }`}
                        ></span>
                    </div>
                    {isMenu && (
                        <motion.div
                            initial={{ opacity: 0, x: 200 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 200 }}
                            transition={{ duration: 0.4 }}
                            className="absolute w-screen h-screen -top-4 right-0 bg-textColor"
                        >
                            <div className="w-full h-full flex items-center justify-center flex-col">
                                {menu.map((item, index) => (
                                    <span key={index}>
                                        <a
                                            href={item.href}
                                            onClick={() => setIsMenu(!isMenu)}
                                            className="inline-block text-xl font-bold uppercase py-2 text-white"
                                        >
                                            {item.title}
                                        </a>
                                    </span>
                                ))}
                                <span
                                    onClick={handleSignIn}
                                    className="inline-block text-xl font-bold uppercase py-2 text-white"
                                >
                                    Sign in
                                </span>
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;

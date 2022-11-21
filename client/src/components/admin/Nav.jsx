import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BsChevronDown } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { BsBellFill } from 'react-icons/bs';

import { AuthContext } from '../../contexts/AuthContext';
import Logo from '../../assets/image/logo.png';

const Nav = () => {
    const {
        authState: { isShowModalLogin, isLogin, user },
        loginUser,
        ShowSignInModal,
        logoutUser,
    } = useContext(AuthContext);

    const handleNavigate = () => {
        if (isShowModalLogin) {
            ShowSignInModal(isShowModalLogin);
        }
    };
    const handleNavUser = () => {
        ShowSignInModal(isShowModalLogin);
    };
    return (
        <header className="w-full py-4 md:py-5 fixed top-0 z-50 bg-[#272e3266]">
            <div className="flex max-w-[1140px] md:mx-6 lg:mx-10 xl:mx-auto items-center justify-between">
                <Link
                    to="/"
                    onClick={handleNavigate}
                    className="w-25 flex items-center justify-center"
                >
                    <img
                        src={Logo}
                        className="w-full object-cover object-center"
                        alt=""
                    />
                </Link>
                <div className="flex items-center justify-center gap-12">
                    <div className="flex items-center justify-center gap-8 -mb-2">
                        <span className="relative hover:opacity-[0.7] transition-all duration-200 ease-in-out before:absolute before:content before:-right-2 before:-top-2 before:h-2 before:w-2 before:rounded-full before:bg-textColor">
                            <MdEmail className="text-xl text-textColor cursor-pointer" />
                        </span>
                        <span className="relative hover:opacity-[0.7] transition-all duration-200 ease-in-out before:absolute before:content before:-right-2 before:-top-2 before:h-2 before:w-2 before:rounded-full before:bg-textColor">
                            <BsBellFill className="text-xl text-textColor cursor-pointer" />
                        </span>
                    </div>
                    <span
                        onClick={handleNavUser}
                        className="flex items-center gap-2 text-base text-textColor font-normal uppercase relative before:absolute before:content before:left-0 before:-bottom-1 before:h-[2px] before:w-full before:rounded-md before:bg-textColor cursor-pointer"
                    >
                        <span>{user}</span>
                        <BsChevronDown />
                    </span>
                </div>
            </div>
        </header>
    );
};

export default Nav;

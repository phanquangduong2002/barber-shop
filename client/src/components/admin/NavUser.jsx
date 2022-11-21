import React, { useContext } from 'react';
import { motion } from 'framer-motion';

import { FiLogOut } from 'react-icons/fi';
import { AuthContext } from '../../contexts/AuthContext';

const NavUser = () => {
    const {
        authState: { isShowModalLogin, isLogin, user },
        loginUser,
        ShowSignInModal,
        logoutUser,
    } = useContext(AuthContext);

    const handleLogout = () => {
        logoutUser();
        ShowSignInModal(true);
    };
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            transition={{ type: 'spring', bounce: 0.5, duration: 0.5 }}
            className="fixed top-16 right-10 w-[130px] bg-textColor text-white z-50 rounded-md overflow-hidden"
        >
            <div className="flex flex-col">
                <button
                    onClick={handleLogout}
                    className="w-full flex items-center justify-start gap-3 pt-3 pb-4 px-4 rounded-md hover:opacity-[0.5] transition-all duration-100 ease-in-out"
                >
                    <FiLogOut />
                    Log Out
                </button>
            </div>
        </motion.div>
    );
};

export default NavUser;

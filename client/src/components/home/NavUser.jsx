import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MdManageAccounts } from 'react-icons/md';
import { FiLogOut } from 'react-icons/fi';

import { AuthContext } from '../../contexts/AuthContext';

const NavUser = () => {
    const {
        authState: { isShowModalLogin },
        loginUser,
        ShowSignInModal,
        logoutUser,
    } = useContext(AuthContext);

    const handleLogOutUser = () => {
        logoutUser();
        ShowSignInModal(true);
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            transition={{ type: 'spring', bounce: 0.5, duration: 0.5 }}
            className="fixed top-14 right-10 w-150 bg-bgColor text-textColor z-50 rounded-md overflow-hidden"
        >
            <div className="flex flex-col">
                <Link
                    to="/admin"
                    onClick={() => ShowSignInModal(isShowModalLogin)}
                    className="flex items-center gap-3 pt-4 pb-3 px-4 rounded-md hover:bg-textColor hover:text-white transition-all duration-100 ease-in-out"
                >
                    <MdManageAccounts />
                    Manage
                </Link>
                <button
                    onClick={handleLogOutUser}
                    className="w-full flex items-center justify-start gap-3 pt-3 pb-4 px-4 rounded-md hover:bg-textColor hover:text-white transition-all duration-100 ease-in-out"
                >
                    <FiLogOut />
                    Log Out
                </button>
            </div>
        </motion.div>
    );
};

export default NavUser;

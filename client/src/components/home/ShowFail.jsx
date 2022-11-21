import React from 'react';
import { motion } from 'framer-motion';
import { RiCloseCircleFill } from 'react-icons/ri';

const ShowSuccess = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ type: 'spring', bounce: 0.6, duration: 0.8 }}
            className="fixed w-225 pl-[15px] h-16 top-20 right-2 md:right-5 z-10 bg-red-500 flex items-center gap-4 text-white text-lg rounded-lg"
        >
            <RiCloseCircleFill />
            <span>Book failed</span>
        </motion.div>
    );
};

export default ShowSuccess;

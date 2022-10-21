import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import { motion } from 'framer-motion';

import { useDispatch } from 'react-redux';
import { ShowSignInModal } from '../app/slice';

const SignIn = () => {
    const dispatch = useDispatch();

    const [method, setMethod] = useState('sign in');
    const [typePassWord, setTypePassWord] = useState(false);
    const [typeConfirmPassWord, setTypeConfirmPassWord] = useState(false);
    const [account, setAccount] = useState('');
    const [passWord, setPassWord] = useState('');
    const [confirmPassWord, setConfirmPassWord] = useState('');

    const handleSignIn = () => {
        dispatch(ShowSignInModal(false));
    };

    const handleShowPassWord = () => {
        setTypePassWord(true);
        setTimeout(() => {
            setTypePassWord(false);
        }, 2000);
    };

    const handleShowConfirmPassWord = () => {
        setTypeConfirmPassWord(true);
        setTimeout(() => {
            setTypeConfirmPassWord(false);
        }, 2000);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (method === 'sign in') {
            const User = {
                account: account,
                password: passWord,
            };
            console.log('Sign in', User);
        } else {
            const createUser = {
                account: account,
                password: passWord,
            };
            console.log('Create Account', createUser);
        }
    };

    const changeMethod = () => {
        setAccount('');
        setPassWord('');
        setConfirmPassWord('');
        if (method === 'sign in') setMethod('register');
        else setMethod('sign in');
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 left-0 w-screen h-screen z-[1001] bg-[#00000073] flex items-center justify-center"
        >
            <motion.div
                initial={{ scale: 0.3 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', bounce: 0.5, duration: 0.5 }}
                className="w-full max-w-[500px] bg-bgColor rounded-2xl relative"
            >
                <h3 className="p-3 pl-5 mb-8 text-2xl uppercase tracking-wide text-textColor">
                    {method === 'sign in' ? 'Sign In' : 'Register'}
                </h3>
                <span
                    onClick={handleSignIn}
                    className="absolute top-0 right-0 p-3 text-2xl text-textColor cursor-pointer"
                >
                    <AiOutlineClose />
                </span>
                <form className="ml-5 mr-3" action="">
                    <div className="flex flex-col gap-8">
                        <div>
                            <input
                                value={account}
                                onChange={(e) => setAccount(e.target.value)}
                                className="w-full p-2 pl-5 border-b-[2px] border-b-textColor bg-transparent outline-none text-textColor placeholder:text-textColor placeholder:opacity-[0.9]"
                                type="text"
                                placeholder="Phone number"
                            />
                        </div>
                        <div className="relative">
                            <input
                                value={passWord}
                                onChange={(e) => setPassWord(e.target.value)}
                                className="w-full p-2 pl-5 border-b-[2px] border-b-textColor bg-transparent outline-none text-textColor placeholder:text-textColor placeholder:opacity-[0.9]"
                                type={`${typePassWord ? 'text' : 'password'}`}
                                placeholder="Password"
                            />
                            <span
                                onClick={handleShowPassWord}
                                className="absolute top-[50%] right-5 -translate-y-2/4 text-textColor cursor-pointer"
                            >
                                {!typePassWord ? (
                                    <BsEyeSlashFill />
                                ) : (
                                    <BsEyeFill />
                                )}
                            </span>
                        </div>
                        {method !== 'sign in' && (
                            <div className="relative">
                                <input
                                    value={confirmPassWord}
                                    onChange={(e) =>
                                        setConfirmPassWord(e.target.value)
                                    }
                                    className="w-full p-2 pl-5 border-b-[2px] border-b-textColor bg-transparent outline-none text-textColor placeholder:text-textColor placeholder:opacity-[0.9]"
                                    type={`${
                                        typeConfirmPassWord
                                            ? 'text'
                                            : 'password'
                                    }`}
                                    placeholder="Confirm Password"
                                />
                                <span
                                    onClick={handleShowConfirmPassWord}
                                    className="absolute top-[50%] right-5 -translate-y-2/4 text-textColor cursor-pointer"
                                >
                                    {!typeConfirmPassWord ? (
                                        <BsEyeSlashFill />
                                    ) : (
                                        <BsEyeFill />
                                    )}
                                </span>
                            </div>
                        )}
                    </div>
                    <button
                        onClick={(e) => handleSubmit(e)}
                        className="w-full mt-10 mb-5 py-3 text-white text-xl font-medium uppercase bg-textColor border-[3px] border-textColor rounded-full hover:text-textColor hover:bg-transparent transition-all duration-[400ms] ease-in-out"
                    >
                        {method === 'sign in' ? 'Sign in' : 'Register'}
                    </button>
                    <p className="mb-5 text-white font-light flex items-center justify-center">
                        {method === 'sign in'
                            ? "Don't have an account?"
                            : 'Do have an account?'}
                        <span
                            onClick={changeMethod}
                            className="ml-1 text-textColor font-medium cursor-pointer"
                        >
                            {method === 'sign in' ? 'Register' : 'Sign in'}
                        </span>
                    </p>
                </form>
            </motion.div>
        </motion.div>
    );
};

export default SignIn;

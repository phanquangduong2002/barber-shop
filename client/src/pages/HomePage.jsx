import React, { useContext } from 'react';

import { AnimatePresence } from 'framer-motion';

import { AuthContext } from '../contexts/AuthContext';
import { BookContext } from '../contexts/BookContext';

import {
    Header,
    Home,
    Services,
    About,
    Trending,
    Prices,
    Appointment,
    ShowSuccess,
    ShowFail,
    SignIn,
    FeedBack,
    Footer,
    NavUser,
} from '../components/home';

const HomePage = () => {
    const {
        authState: { isShowModalLogin, isLogin, user },
    } = useContext(AuthContext);

    const {
        bookState: { isBookSuccess, isBookFail },
        showBookSuccess,
    } = useContext(BookContext);

    return (
        <div className="w-full relative">
            <Header />
            <Home />
            <Services />
            <About />
            <Trending />
            <Prices />
            <Appointment />
            <FeedBack />
            <Footer />
            <AnimatePresence>
                {!isLogin && isShowModalLogin && <SignIn />}
                {isLogin && isShowModalLogin && <NavUser />}
                {isBookSuccess && <ShowSuccess />}
                {isBookFail && <ShowFail />}
            </AnimatePresence>
        </div>
    );
};

export default HomePage;

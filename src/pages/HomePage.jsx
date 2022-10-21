import React from 'react';
import { useSelector } from 'react-redux';

import {
    Home,
    Services,
    About,
    Trending,
    Prices,
    Appointment,
    ShowSuccess,
    SignIn,
    FeedBack,
} from '../components';

const HomePage = () => {
    const isShowSuccess = useSelector((state) => state.isBookSuccess);
    const isShowSignInModal = useSelector((state) => state.isSignIn);

    return (
        <div className="w-full relative">
            <Home />
            <Services />
            <About />
            <Trending />
            <Prices />
            <Appointment />
            <FeedBack />
            {isShowSignInModal && <SignIn />}
            {isShowSuccess && <ShowSuccess />}
        </div>
    );
};

export default HomePage;

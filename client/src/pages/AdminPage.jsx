import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import { Container, Nav, NavUser, ShowDeleteBook } from '../components/admin';
import { AuthContext } from '../contexts/AuthContext';
import { BookContext } from '../contexts/BookContext';

const AdminPage = () => {
    const {
        authState: { isShowModalLogin, isLogin, user },
        loginUser,
        ShowSignInModal,
        logoutUser,
    } = useContext(AuthContext);

    const {
        bookState: { isDeleteBook, isBookSuccess, listBooking },
        showBookSuccess,
        addBooking,
        getBooking,
        deleteBooking,
    } = useContext(BookContext);

    if (!isLogin) return <Navigate to="/" />;

    return (
        <div className="w-full h-[1000px] relative">
            <Nav />
            {isLogin && isShowModalLogin && <NavUser />}
            {isDeleteBook && <ShowDeleteBook />}
            <Container />
        </div>
    );
};

export default AdminPage;

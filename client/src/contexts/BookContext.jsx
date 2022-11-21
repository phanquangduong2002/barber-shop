import React, { createContext, useReducer, useEffect } from 'react';
import { BookReducer } from '../reducers/BookReducer';
import axios from 'axios';

import {
    apiUrl,
    SET_SHOW_BOOK_SUCCESS,
    ADD_BOOKING,
    GET_BOOKING,
    DELETE_BOOKING,
    SET_DELETE_BOOK_SUCCESS,
    SET_SHOW_BOOK_FAIL,
} from './constants';

export const BookContext = createContext();

const BookContextProvider = ({ children }) => {
    const [bookState, dispatch] = useReducer(BookReducer, {
        isDeleteBook: false,
        isBookSuccess: false,
        isBookFail: false,
        listBooking: [],
    });

    const showBookSuccess = (isBookSuccess) => {
        dispatch({
            type: SET_SHOW_BOOK_SUCCESS,
            payload: isBookSuccess,
        });
    };
    const showBookFail = (isBookFail) => {
        dispatch({
            type: SET_SHOW_BOOK_FAIL,
            payload: isBookFail,
        });
    };
    const showDeleteSuccess = (isDeleteSuccess) => {
        dispatch({
            type: SET_DELETE_BOOK_SUCCESS,
            payload: isDeleteSuccess,
        });
    };

    const getBooking = async () => {
        try {
            const response = await axios.get(`${apiUrl}/`);
            console.log(response);
            dispatch({
                type: GET_BOOKING,
                payload: response.data,
            });
        } catch (error) {
            return error.response.data
                ? error.response.data
                : { success: false, message: 'Server error' };
        }
    };

    const addBooking = async (newBooking) => {
        try {
            const response = await axios.post(`${apiUrl}/`, newBooking);
            if (response.data.id !== 0) {
                dispatch({ type: ADD_BOOKING, payload: response.data });
                return {
                    success: true,
                    data: response.data,
                };
            } else {
                return {
                    success: false,
                    data: null,
                };
            }
        } catch (error) {
            return error.response.data
                ? error.response.data
                : { success: false, message: 'Server error' };
        }
    };

    const deleteBooking = async (id) => {
        try {
            const response = await axios.delete(`${apiUrl}/${id}`);
            if (response.data) {
                dispatch({
                    type: DELETE_BOOKING,
                    payload: id,
                });
            }
        } catch (error) {
            return error.response.data
                ? error.response.data
                : { success: false, message: 'Server error' };
        }
    };

    const BookContextData = {
        showBookSuccess,
        showBookFail,
        addBooking,
        getBooking,
        deleteBooking,
        showDeleteSuccess,
        bookState,
    };

    return (
        <BookContext.Provider value={BookContextData}>
            {children}
        </BookContext.Provider>
    );
};

export default BookContextProvider;

export const apiUrl =
    process.env.NODE_ENV !== 'production'
        ? 'http://localhost:8080/api/booking'
        : 'somethingURL';

//http://localhost:5000/api

export const LOCAL_STORAGE_NAME = 'barber-shop';

export const SET_AUTH = 'SET_AUTH';
export const SET_SHOW_MODAL_SIGN_IN = 'SET_SHOW_MODAL_SIGN_IN';
export const SET_SHOW_BOOK_SUCCESS = 'SET_SHOW_BOOK_SUCCESS';
export const SET_SHOW_BOOK_FAIL = 'SET_SHOW_BOOK_FAIL';
export const SET_DELETE_BOOK_SUCCESS = 'SET_DELETE_BOOK_SUCCESS';
export const ADD_BOOKING = 'ADD_BOOKING';
export const GET_BOOKING = 'GET_BOOKING';
export const DELETE_BOOKING = 'DELETE_BOOKING';

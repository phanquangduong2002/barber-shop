import {
    SET_SHOW_BOOK_SUCCESS,
    ADD_BOOKING,
    GET_BOOKING,
    DELETE_BOOKING,
    SET_DELETE_BOOK_SUCCESS,
    SET_SHOW_BOOK_FAIL,
} from '../contexts/constants';

export const BookReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_BOOKING:
            return {
                ...state,
                listBooking: payload,
            };
        case ADD_BOOKING:
            return {
                ...state,
                listBooking: [...state.listBooking, payload],
            };
        case DELETE_BOOKING:
            return {
                ...state,
                listBooking: state.listBooking.filter(
                    (book) => book.id !== payload,
                ),
            };
        case SET_SHOW_BOOK_SUCCESS:
            return {
                ...state,
                isBookSuccess: payload,
            };
        case SET_SHOW_BOOK_FAIL:
            return {
                ...state,
                isBookFail: payload,
            };
        case SET_DELETE_BOOK_SUCCESS:
            return {
                ...state,
                isDeleteBook: payload,
            };

        default:
            return state;
    }
};

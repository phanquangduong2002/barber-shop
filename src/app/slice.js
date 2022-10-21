import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'Slice',
    initialState: {
        user: null,
        isBookSuccess: false,
        isSignIn: false,
    },
    reducers: {
        LoginUser: (state, action) => {
            state.user = action.payload;
        },
        ShowSuccess: (state, action) => {
            state.isBookSuccess = action.payload;
        },
        ShowSignInModal: (state, action) => {
            state.isSignIn = action.payload;
        },
    },
});

const { reducer, actions } = slice;

export const { LoginUser, ShowSuccess, ShowSignInModal } = actions;

export default reducer;

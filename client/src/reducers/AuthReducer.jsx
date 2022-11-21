import { SET_AUTH, SET_SHOW_MODAL_SIGN_IN } from '../contexts/constants';

export const AuthReducer = (state, action) => {
    const {
        type,
        payload: { isShowModalLogin, isLogin, user },
    } = action;

    switch (type) {
        case SET_AUTH:
            return {
                ...state,
                isLogin,
                user,
            };
        case SET_SHOW_MODAL_SIGN_IN:
            return {
                ...state,
                isShowModalLogin,
            };
        default:
            return state;
    }
};

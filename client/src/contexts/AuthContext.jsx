import React, { createContext, useReducer, useEffect } from 'react';
import { AuthReducer } from '../reducers/AuthReducer';
import {
    apiUrl,
    LOCAL_STORAGE_NAME,
    SET_AUTH,
    SET_SHOW_MODAL_SIGN_IN,
} from './constants';
import axios from 'axios';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const [authState, dispatch] = useReducer(AuthReducer, {
        isShowModalLogin: false,
        isLogin: false,
        user: null,
    });

    // Login call api
    // const loginUser = async (userForm) => {
    //     try {
    //         const response = await axios.post(
    //             `http://localhost:5000/api/login`,
    //             userForm,
    //         );
    //         if (response.data.success)
    //             localStorage.setItem(LOCAL_STORAGE_NAME, response.data.name);

    //         return response.data;
    //     } catch (error) {
    //         if (error.response.data) return error.response.data;
    //         else return { success: false, message: error.message };
    //     }
    // };

    const loadUser = () => {
        if (localStorage[LOCAL_STORAGE_NAME]) {
            dispatch({
                type: SET_AUTH,
                payload: {
                    isLogin: true,
                    user: localStorage[LOCAL_STORAGE_NAME],
                },
            });
        }
    };

    useEffect(() => {
        loadUser();
    }, []);

    const ShowSignInModal = (isShowModalLogin) => {
        dispatch({
            type: SET_SHOW_MODAL_SIGN_IN,
            payload: { isShowModalLogin: !isShowModalLogin },
        });
    };

    const loginUser = (userForm) => {
        dispatch({
            type: SET_AUTH,
            payload: { isLogin: true, user: userForm.account },
        });
        localStorage.setItem(LOCAL_STORAGE_NAME, userForm.account);
    };

    const logoutUser = () => {
        localStorage.removeItem(LOCAL_STORAGE_NAME);
        dispatch({
            type: SET_AUTH,
            payload: { isLogin: false, user: null },
        });
    };

    const authContextData = {
        loginUser,
        ShowSignInModal,
        logoutUser,
        authState,
    };

    return (
        <AuthContext.Provider value={authContextData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;

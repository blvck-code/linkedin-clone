import axios from "axios";
import { tokenConfig } from "../../helpers/tokenConfig";
import {
  REGISTER_LOADING,
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_SUCCESS,
} from "../../constants/types";
import { CONNECTION_ERROR } from "./api";

const baseURL = process.env.REACT_APP_BACKEND_URL;

//Register

export const register = ({
  email,
  firstName: first_name,
  lastName: last_name,
  password,
  password2,
}) => (dispatch) => {
  dispatch({ type: REGISTER_LOADING });

  // const body = JSON.stringify({
  //   email,
  //   first_name,
  //   last_name,
  //   password,
  //   password2,
  // });
  const body = {
    email,
    first_name,
    last_name,
    password,
    password2,
  };

  axios
    .post(`${baseURL}/api/auth/register`, body)
    .then((res) => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: REGISTER_ERROR,
        payload: err.response ? err.response.data : CONNECTION_ERROR,
      });
    });
};

// Login

export const login = (email, password) => (dispatch) => {
  dispatch({ type: LOGIN_LOADING });

  axios
    .post(`${baseURL}/api/auth/login`, { email, password })
    .then((res) => {
      localStorage.token = res.data.token;
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: LOGIN_ERROR,
        payload: err.response ? err.response.data : CONNECTION_ERROR,
      });
    });
};

// User
export const getUser = () => (dispatch, getState) => {
  dispatch({ type: USER_LOADING });
  axios
    .get(`${baseURL}/api/auth/user`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: AUTH_ERROR,
      });
    });
};

// Logout

export const logout = () => (dispatch, getState) => {
  axios
    .post(`${baseURL}/api/auth/logout`, null, tokenConfig(getState))
    .then(dispatch({ type: LOGOUT_SUCCESS }))
    .catch((err) => console.log(err));
};

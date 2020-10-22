import axios from "axios";
import {
  USER_PROFILE_LOADING,
  USER_PROFILE_LOAD_ERROR,
  USER_PROFILE_LOAD_SUCCESS,
} from "../../constants/types";
import { tokenConfig } from "../../helpers/tokenConfig";

const baseURL = process.env.REACT_APP_BACKEND_URL;

export const fetchProfile = () => (dispatch, getState) => {
  dispatch({ type: USER_PROFILE_LOADING });
  axios
    .get(`${baseURL}/api/profile/user-profile`, tokenConfig(getState))
    .then((res) => {
      dispatch({ type: USER_PROFILE_LOAD_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: USER_PROFILE_LOAD_ERROR, payload: err });
    });
};

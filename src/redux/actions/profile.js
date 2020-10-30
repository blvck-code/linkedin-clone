import axios from "axios";
import {
  PROFILE_LOADING,
  PROFILE_LOAD_SUCCESS,
  PROFILE_LOAD_ERROR,
} from "../../constants/types";
import { tokenConfig } from "../../helpers/tokenConfig";

const baseURL = process.env.REACT_APP_BACKEND_URL;

export const fetchProfile = (path) => (dispatch, getState) => {
  dispatch({ type: PROFILE_LOADING });
  const url = `${baseURL}/api/developers${path}`;
  axios
    .get(url, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: PROFILE_LOAD_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: PROFILE_LOAD_ERROR,
        payload: err,
      });
    });
};

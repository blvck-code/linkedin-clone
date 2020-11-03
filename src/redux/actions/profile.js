import axios from "axios";
import {
  PROFILE_LOADING,
  PROFILE_LOAD_SUCCESS,
  PROFILE_LOAD_ERROR,
  UPDATE_PROFILE_LOAD,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_ERROR,
} from "../../constants/types";
import { tokenConfig } from "../../helpers/tokenConfig";

const baseURL = process.env.REACT_APP_BACKEND_URL;

// Fetch profile

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

// Update profile

export const updateProfile = (slug, data) => (dispatch, getState) => {
  dispatch({ type: UPDATE_PROFILE_LOAD });

  console.log(slug, data);

  const url = `${baseURL}/api/profile${slug}/update`;

  axios
    .put(url, data, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: UPDATE_PROFILE_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: UPDATE_PROFILE_ERROR,
        payload: err,
      });
    });
};

import axios from "axios";
import {
  GET_EXPERIENCE_ERROR,
  GET_EXPERIENCE_LOAD,
  GET_EXPERIENCE_SUCCESS,
} from "../../constants/types";
import { tokenConfig } from "../../helpers/tokenConfig";

const baseURL = process.env.REACT_APP_BACKEND_URL;

export const fetchExpe = (slug) => (dispatch, getState) => {
  dispatch({ type: GET_EXPERIENCE_LOAD });

  const url = `${baseURL}/api/experience/developers${slug}`;

  axios
    .get(url, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_EXPERIENCE_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_EXPERIENCE_ERROR,
        payload: err,
      });
    });
};

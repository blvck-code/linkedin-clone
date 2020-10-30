import axios from "axios";
import {
  GET_EDUCATION_ERROR,
  GET_EDUCATION_LOAD,
  GET_EDUCATION_SUCCESS,
} from "../../constants/types";
import { tokenConfig } from "../../helpers/tokenConfig";

const baseURL = process.env.REACT_APP_BACKEND_URL;

export const fetchEdu = (slug) => (dispatch, getState) => {
  dispatch({ type: GET_EDUCATION_LOAD });

  const url = `${baseURL}/api/education/developers${slug}`;

  axios
    .get(url, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_EDUCATION_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_EDUCATION_ERROR,
        payload: err,
      });
    });
};

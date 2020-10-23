import axios from "axios";
import { tokenConfig } from "../../helpers/tokenConfig";
import {
  POSTS_LOADING,
  POSTS_LOAD_SUCCESS,
  POSTS_LOAD_ERROR,
  CREATE_POSTS_LOADING,
  CREATE_POSTS_LOAD_SUCCESS,
  CREATE_POSTS_LOAD_ERROR,
  DELETE_SUCCESS,
  DELETE_ERROR,
} from "../../constants/types";

const baseURL = process.env.REACT_APP_BACKEND_URL;

// Fetch posts
export const fetchPosts = () => (dispatch, getState) => {
  dispatch({ type: POSTS_LOADING });

  axios
    .get(`${baseURL}/api/posts`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: POSTS_LOAD_SUCCESS,
        payload: res.data.results,
      });
    })
    .catch((err) => {
      dispatch({
        type: POSTS_LOAD_ERROR,
        payload: err,
      });
    });
};

// Create post
export const createPost = (body, image) => (dispatch, getState) => {
  dispatch({ type: CREATE_POSTS_LOADING });

  const post = { body, image };
  console.log(post);

  axios
    .post(`${baseURL}/api/posts/create`, post, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: CREATE_POSTS_LOAD_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: CREATE_POSTS_LOAD_ERROR,
        payload: err,
      });
    });
};

// Delete post
export const deletePost = (id) => (dispatch, getState) => {
  axios
    .delete(`${baseURL}/api/posts/${id}/delete`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: DELETE_SUCCESS,
        payload: id,
      });
    })
    .catch((err) => {
      dispatch({
        type: DELETE_ERROR,
        payload: err,
      });
    });
};

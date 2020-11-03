import axios from "axios";
import { tokenConfig } from "../../helpers/tokenConfig";
import {
  POSTS_LOADING,
  POSTS_LOAD_SUCCESS,
  POSTS_LOAD_ERROR,
  CREATE_POSTS_LOADING,
  SEARCH_LOAD_ERROR,
  SEARCH_LOAD_SUCCESS,
  CREATE_POSTS_LOAD_SUCCESS,
  CREATE_POSTS_LOAD_ERROR,
  DELETE_SUCCESS,
  DELETE_ERROR,
  ADD_POSTS_SUCCESS,
  ADD_POSTS_LOADING,
  ADD_POSTS_ERROR,
} from "../../constants/types";

const baseURL = process.env.REACT_APP_BACKEND_URL;

// Fetch posts
export const fetchPosts = (pageNumber = 1) => (dispatch, getState) => {
  dispatch({ type: POSTS_LOADING });

  axios
    .get(`${baseURL}/api/posts?page=${pageNumber}`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: POSTS_LOAD_SUCCESS,
        payload: res.data,
      });
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: POSTS_LOAD_ERROR,
        payload: err,
      });
    });
};

// Search posts
export const searchPosts = (searchValue) => (dispatch, getState) => {
  dispatch({ type: POSTS_LOADING });

  axios
    .get(`${baseURL}/api/posts?search=${searchValue}`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: SEARCH_LOAD_SUCCESS,
        payload: res.data,
      });
      console.log(res.data);
    })
    .catch((err) => {
      dispatch({
        type: SEARCH_LOAD_ERROR,
        payload: err,
      });
    });
};

// Infinite Scroll
export const scrolled = (url) => (dispatch, getState) => {
  dispatch({ type: ADD_POSTS_LOADING });

  axios
    .get(`${url}`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: ADD_POSTS_SUCCESS,
        payload: res.data,
      });
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: ADD_POSTS_ERROR,
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
export const deletePost = (slug) => (dispatch, getState) => {
  axios
    .delete(`${baseURL}/api/posts/${slug}/delete`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: DELETE_SUCCESS,
        payload: slug,
      });
    })
    .catch((err) => {
      dispatch({
        type: DELETE_ERROR,
        payload: err,
      });
    });
};

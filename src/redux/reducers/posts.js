import {
  POSTS_LOAD_ERROR,
  POSTS_LOAD_SUCCESS,
  POSTS_LOADING,
  LOGOUT_SUCCESS,
  DELETE_SUCCESS,
  SEARCH_POST,
  CREATE_POSTS_LOADING,
  CREATE_POSTS_LOAD_SUCCESS,
  CREATE_POSTS_LOAD_ERROR,
  SEARCH_LOAD_ERROR,
  SEARCH_LOAD_SUCCESS,
  ADD_POSTS_SUCCESS,
} from "../../constants/types";

const initialState = {
  posts: {
    loading: false,
    data: [],
    previous: "",
    next: "",
    error: null,
    count: null,
  },
  addPost: {
    loading: false,
    data: null,
    error: null,
  },
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case POSTS_LOADING:
      return {
        ...state,
        posts: {
          ...state.posts,
          loading: true,
        },
      };
    case POSTS_LOAD_SUCCESS:
      return {
        ...state,
        posts: {
          ...state.posts,
          loading: false,
          data: payload.results,
          next: payload.next,
          count: payload.count,
          previous: payload.previous,
          error: null,
        },
      };
    case ADD_POSTS_SUCCESS:
      return {
        ...state,
        posts: {
          ...state.posts,
          loading: false,
          data: [...state.posts.data, payload.results],
          next: payload.next,
          count: payload.count,
          error: null,
        },
      };
    case SEARCH_LOAD_SUCCESS:
      return {
        ...state,
        posts: {
          ...state.posts,
          loading: false,
          data: payload.results,
          next: payload.next,
          error: null,
        },
      };
    case POSTS_LOAD_ERROR:
    case SEARCH_LOAD_ERROR:
      return {
        ...state,
        posts: {
          ...state.posts,
          loading: false,
          data: null,
          error: payload,
        },
      };
    case DELETE_SUCCESS:
      return {
        ...state,
        posts: {
          ...state.posts,
          loading: false,
          data: state.posts.data.filter((post) => post.slug !== payload),
          error: null,
        },
      };
    case LOGOUT_SUCCESS:
      return {
        posts: {
          loading: false,
          data: null,
          error: null,
        },
        addPost: {
          loading: false,
          data: null,
          error: null,
        },
      };
    case CREATE_POSTS_LOADING:
      return {
        ...state,
        addPost: {
          ...state.addPost,
          loading: true,
        },
      };
    case CREATE_POSTS_LOAD_SUCCESS:
      return {
        ...state,
        addPost: {
          ...state.addPost,
          loading: false,
          data: payload,
        },
        posts: {
          ...state.posts,
          loading: false,
          data: [payload, ...state.posts.data],
        },
      };
    case CREATE_POSTS_LOAD_ERROR:
      return {
        ...state,
        addPost: {
          ...state.addPost,
          loading: false,
          error: payload,
        },
      };
    default:
      return state;
  }
}

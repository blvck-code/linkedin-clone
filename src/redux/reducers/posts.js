import {
  POSTS_LOAD_ERROR,
  POSTS_LOAD_SUCCESS,
  POSTS_LOADING,
  LOGOUT_SUCCESS,
  DELETE_SUCCESS,
  SEARCH_POST,
} from "../../constants/types";

const initialState = {
  posts: {
    loading: false,
    data: null,
    error: null,
    isSearchActive: false,
    foundPosts: [],
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
          data: payload,
          error: null,
        },
      };
    case POSTS_LOAD_ERROR:
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
          data: state.posts.data.filter((post) => post.id !== payload),
          error: null,
        },
      };
    case SEARCH_POST:
      const searchValue = payload.toLowerCase();
      return {
        ...state,
        posts: {
          ...state.posts,
          loading: false,
          isSearchActive: payload.length > 0 || false,
          foundPosts: state.posts.data.filter((item) => {
            return (
              item?.body.toLowerCase().search(searchValue) !== -1 ||
              item?.author.toLowerCase().search(searchValue) !== -1 ||
              item?.profession.toLowerCase().search(searchValue) !== -1
            );
          }),
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
    default:
      return state;
  }
}

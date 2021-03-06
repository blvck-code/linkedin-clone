import {
  LOGOUT_SUCCESS,
  USER_PROFILE_LOADING,
  USER_PROFILE_LOAD_ERROR,
  USER_PROFILE_LOAD_SUCCESS,
} from "../../constants/types";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case USER_PROFILE_LOADING:
      return {
        ...state,
        loading: true,
      };
    case USER_PROFILE_LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
      };
    case USER_PROFILE_LOAD_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case LOGOUT_SUCCESS:
      return {
        loading: false,
        data: null,
        error: null,
      };
    default:
      return state;
  }
}

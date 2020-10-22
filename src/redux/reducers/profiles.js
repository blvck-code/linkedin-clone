import {
  LOGOUT_SUCCESS,
  USER_PROFILE_LOADING,
  USER_PROFILE_LOAD_ERROR,
  USER_PROFILE_LOAD_SUCCESS,
} from "../../constants/types";

const initialState = {
  userProfile: {
    loading: false,
    data: null,
    error: null,
  },
  profiles: {
    loading: false,
    data: null,
    error: null,
  },
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case USER_PROFILE_LOADING:
      return {
        ...state,
        userProfile: {
          ...state.userProfile,
          loading: true,
        },
      };
    case USER_PROFILE_LOAD_SUCCESS:
      return {
        ...state,
        userProfile: {
          ...state.userProfile,
          loading: false,
          data: payload,
        },
      };
    case USER_PROFILE_LOAD_ERROR:
      return {
        ...state,
        userProfile: {
          ...state.userProfile,
          loading: false,
          error: payload,
        },
      };
    case LOGOUT_SUCCESS:
      return {
        userProfile: {
          loading: false,
          data: null,
          error: null,
        },
        profiles: {
          loading: false,
          data: null,
          error: null,
        },
      };
    default:
      return state;
  }
}

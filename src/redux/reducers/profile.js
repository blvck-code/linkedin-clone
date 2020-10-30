import {
  PROFILE_LOADING,
  PROFILE_LOAD_SUCCESS,
  PROFILE_LOAD_ERROR,
} from "../../constants/types";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case PROFILE_LOADING:
      return {
        ...state,
        loading: true,
      };
    case PROFILE_LOAD_SUCCESS:
      return {
        ...state,
        data: payload,
        error: null,
        loading: false,
      };
    case PROFILE_LOAD_ERROR:
      return {
        ...state,
        error: payload,
        data: null,
        loading: false,
      };
    default:
      return state;
  }
}

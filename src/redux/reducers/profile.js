import {
  PROFILE_LOADING,
  PROFILE_LOAD_SUCCESS,
  PROFILE_LOAD_ERROR,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_LOAD,
} from "../../constants/types";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case PROFILE_LOADING:
    case UPDATE_PROFILE_LOAD:
      return {
        ...state,
        loading: true,
      };
    case PROFILE_LOAD_SUCCESS:
    case UPDATE_PROFILE_SUCCESS:
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

import {
  GET_EXPERIENCE_ERROR,
  GET_EXPERIENCE_LOAD,
  GET_EXPERIENCE_SUCCESS,
  UPDATE_EXPERIENCE_ERROR,
  UPDATE_EXPERIENCE_SUCCESS,
} from "../../constants/types";

const initialState = {
  experience: {
    loading: false,
    data: null,
    error: null,
  },
  addExperience: {
    loading: false,
    data: null,
    error: null,
  },
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case GET_EXPERIENCE_LOAD:
      return {
        ...state,
        experience: {
          ...state.experience,
          loading: true,
        },
      };
    case GET_EXPERIENCE_SUCCESS:
    case UPDATE_EXPERIENCE_SUCCESS:
      return {
        ...state,
        experience: {
          ...state.experience,
          loading: false,
          data: payload,
        },
      };
    case GET_EXPERIENCE_ERROR:
    case UPDATE_EXPERIENCE_ERROR:
      return {
        ...state,
        experience: {
          ...state.experience,
          loading: false,
          error: payload,
        },
      };
    default:
      return state;
  }
}

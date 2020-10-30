import {
  GET_EDUCATION_LOAD,
  GET_EXPERIENCE_ERROR,
  GET_EDUCATION_SUCCESS,
} from "../../constants/types";

const initialState = {
  education: {
    loading: false,
    data: null,
    error: null,
  },
  addEducation: {
    loading: false,
    data: null,
    error: null,
  },
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case GET_EDUCATION_LOAD:
      return {
        ...state,
        education: {
          ...state.education,
          loading: true,
        },
      };
    case GET_EDUCATION_SUCCESS:
      return {
        ...state,
        education: {
          ...state.education,
          loading: false,
          data: payload,
        },
      };
    case GET_EXPERIENCE_ERROR:
      return {
        ...state,
        education: {
          ...state.education,
          loading: false,
          error: payload,
        },
      };
    default:
      return state;
  }
}

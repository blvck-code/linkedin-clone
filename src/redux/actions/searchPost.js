import { SEARCH_POST } from "../../constants/types";

export default (searchText) => (dispatch) => {
  dispatch({
    type: SEARCH_POST,
    payload: searchText,
  });
};

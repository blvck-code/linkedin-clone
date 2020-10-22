import { combineReducers } from "redux";
import auth from "./auth";
import posts from "./posts";
import profiles from "./profiles";

export default combineReducers({
  authState: auth,
  postState: posts,
  profileState: profiles,
});

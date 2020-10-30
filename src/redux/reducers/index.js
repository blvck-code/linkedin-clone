import { combineReducers } from "redux";
import auth from "./auth";
import posts from "./posts";
import profiles from "./profiles";
import profile from "./profile";
import experience from "./experience";
import education from "./education";

export default combineReducers({
  authState: auth,
  postState: posts,
  profileState: profiles,
  authorProfile: profile,
  expState: experience,
  eduState: education,
});

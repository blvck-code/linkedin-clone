import React from "react";
import { connect } from "react-redux";
import Education from "../containers/education/index";
import Experience from "../containers/experience/index";
import EditProfile from "./modals/EditProfile";
import Header from "./Profile/Header";

const ProfileUI = ({ user, profile: { loading, data, error } }) => {
  return (
    <div className="profile__page">
      <div className="profile__wrapper">
        <EditProfile data={data} />
        <Header user={user} />
        <Experience />
        <Education />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  profile: state.authorProfile,
});

export default connect(mapStateToProps)(ProfileUI);

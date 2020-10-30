import React from "react";
import Education from "../containers/education/index";
import Experience from "../containers/experience/index";
import Header from "./Profile/Header";

const ProfileUI = ({ user }) => {
  return (
    <div className="profile__page">
      <div className="profile__wrapper">
        <Header user={user} />
        <Experience />
        <Education />
      </div>
    </div>
  );
};

export default ProfileUI;

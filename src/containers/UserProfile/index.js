import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { fetchProfile } from "../../redux/actions/profile";
import { fetchProfile as userProfile } from "../../redux/actions/profiles";
import ProfileUI from "../../layouts/ProfileUI";

const UserProfileComp = ({ userProfile, user, fetchProfile }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    fetchProfile(pathname);
  }, [pathname]);

  useEffect(() => {
    {
      if (user.data == null) {
        userProfile();
      }
    }
  }, []);

  return <ProfileUI user={user.data} />;
};

const mapStateToProps = (state) => ({
  user: state.profileState,
});

export default connect(mapStateToProps, { fetchProfile, userProfile })(
  UserProfileComp
);

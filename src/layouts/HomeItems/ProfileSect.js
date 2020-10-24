import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { fetchProfile } from "../../redux/actions/profiles";
import img from "../../assets/images/default.png";
import bgImg from "../../assets/images/bg.png";
import ProfileSectPlaceholder from "../placeholders/ProfileSectPlaceholder";

const ProfileSect = ({ fetchProfile, profile: { loading, data } }) => {
  useEffect(() => {
    if (data === null) {
      fetchProfile();
    }
  }, []);

  const history = useHistory();

  const userProfile = (url) => {
    history.push(`/profile/${url}`);
  };

  return (
    <div className="homepage__profile hide-on-mobile">
      {loading && <ProfileSectPlaceholder />}

      {!loading && data && (
        <div className="homepage__profile__content">
          <div className="homepage__profile__imgs">
            <div className="homepage__bg_pic">
              {data.bg_pic ? <img src={data.bg_pic} /> : <img src={bgImg} />}
            </div>
            <div className="homepage__profile_pic">
              {data.profile_pic ? (
                <img
                  onClick={() => userProfile(data.slug)}
                  src={data.profile_pic}
                />
              ) : (
                <img onClick={() => userProfile(data.slug)} src={img} />
              )}
            </div>
          </div>
          <div className="homepage__profile__info">
            <h3>
              {data.first_name} {data.last_name}
            </h3>
            <p>{data.headline}</p>
          </div>
          <div className="underline" />
          <div className="connections">
            <div className="title">
              <p>Connections</p>
              <p>29</p>
            </div>
            <p>Grow your network</p>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profileState.userProfile,
});

export default connect(mapStateToProps, { fetchProfile })(ProfileSect);

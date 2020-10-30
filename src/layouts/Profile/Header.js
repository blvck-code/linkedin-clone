import React from "react";
import bg from "../../assets/images/img.jpg";
import img from "../../assets/images/default.png";
import { connect } from "react-redux";

const Header = ({ user, profile: { loading, data, error } }) => {
  // console.log("Data", data);
  // console.log("User", user);
  return (
    <div className="profile__header">
      <div className="profile__imgs">
        {data && data.bg_pic ? (
          <img src={data.bg_pic} className="profile_bgImg" />
        ) : (
          <img src={bg} className="profile_bgImg" />
        )}
        <div className="profile_edit">
          {data && data.profile_pic ? (
            <img src={data.profile_pic} className="profile_userImg" />
          ) : (
            <img src={img} className="profile_userImg" />
          )}
          {data && user.slug == data.slug && (
            <button className="btn btn-secondary">Edit profile</button>
          )}
        </div>
      </div>
      <div className="profile__info">
        {data && (
          <div className="profile__left">
            <h3>
              {data.first_name} {data.last_name}
            </h3>
            <p>{data.headline}</p>
            <div className="profile__contacts">
              {data.location && data.country && (
                <p>
                  {data.location}, {data.country}
                </p>
              )}
              <h3>Contact Info</h3>
            </div>
          </div>
        )}
        {data && data.profession && (
          <div className="profile__right">
            <p>
              <i className="fa fa-black-tie" /> {data.profession}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  profile: state.authorProfile,
});

export default connect(mapStateToProps)(Header);

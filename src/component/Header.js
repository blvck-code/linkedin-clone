import React, { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../redux/actions/auth";
import searchPost from "../redux/actions/searchPost";
import img from "../assets/images/default.png";

const Header = ({ auth: { data }, logout, searchPost }) => {
  const { pathname } = useLocation();

  const [searchValue, setSearchValue] = useState("");

  const history = useHistory();

  const onChange = (e) => {
    setSearchValue(e.target.value);

    const searchText = searchValue.trim().replace(/" "/g, "");

    searchPost(searchText);
  };

  const guestLinks = (
    <div className="navbar">
      <div className="navbar__logo">
        <Link to="/">
          <h1>
            Linked <i className="fa fa-linkedin-square" />
          </h1>
        </Link>
      </div>
      <div className="menu">
        <Link to="/login">
          <p>Sign in</p>
        </Link>
        <Link to="/register">
          <button className="btn btn-secondary">Join now</button>
        </Link>
      </div>
    </div>
  );

  const authLinks = (
    <div className="navbar">
      <div className="logo__content">
        <Link to="/">
          <i className="fa fa-linkedin-square" />
        </Link>
        <div className="search">
          <i className="fa fa-search" />
          <input
            value={searchValue}
            onChange={onChange}
            type="text"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="menu">
        {data && (
          <div className="nav__img">
            {data.profile_pic ? (
              <img
                onClick={() => history.push(`/${data.slug}`)}
                src={data.profile_pic}
              />
            ) : (
              <img src={img} />
            )}
          </div>
        )}
        <button onClick={() => logout()} className="btn btn-secondary">
          <i className="fa fa-sign-out" /> Sign Out
        </button>
      </div>
    </div>
  );

  return (
    <React.Fragment>
      {pathname !== "/login" && pathname !== "/register" && (
        <nav>{data && data.token ? authLinks : guestLinks}</nav>
      )}
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  auth: state.authState,
});

export default connect(mapStateToProps, { logout, searchPost })(Header);

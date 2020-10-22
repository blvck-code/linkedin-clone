import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Footer from "../component/Footer";
import { connect } from "react-redux";
import { register } from "../redux/actions/auth";

const Register = ({ register, auth: { data, loading, error } }) => {
  const history = useHistory();

  document.title = "Sign Up | LinkedIn";

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const registerFormValid =
    !email?.length ||
    !firstName?.length ||
    !lastName?.length ||
    !password?.length ||
    !password2?.length;

  const onSubmit = (e) => {
    e.preventDefault();

    const form = { email, firstName, lastName, password, password2 };

    register(form);
  };

  useEffect(() => {
    if (data) {
      if (data) {
        history.push("/login");
      } else if (data && data.token) {
        history.push("/");
      }
    }
  }, [data]);

  return (
    <>
      <div className="register">
        <div className="register__wrapper">
          <div className="register__header">
            <h3>
              Linked <i className="fa fa-linkedin-square" />
            </h3>
          </div>
          <div className="register__title">
            <h2>Make the most of your professional life</h2>
          </div>
          <form onSubmit={onSubmit}>
            <div className="form__group">
              <label htmlFor="email">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
              />
            </div>
            <div className="group_data">
              <div className="form__group">
                <label htmlFor="first_name">First name</label>
                <input
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  type="text"
                />
              </div>
              <div className="form__group">
                <label htmlFor="last_name">Last name</label>
                <input
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  type="text"
                />
              </div>
            </div>
            <div className="group_data">
              <div className="form__group">
                <label htmlFor="password">
                  Password (6 or more characters)
                </label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                />
              </div>
              <div className="form__group">
                <label htmlFor="password">Confirm Password</label>
                <input
                  value={password2}
                  onChange={(e) => setPassword2(e.target.value)}
                  type="password"
                />
              </div>
            </div>
            <div className="register__info">
              <p>
                By clicking Agree & Join, you agree to the LinkedIn{" "}
                <span>
                  User
                  <br />
                  Agreement
                </span>
                , <span>Privacy Policy</span>, and <span>Cookie Policy</span>.
              </p>
            </div>
            <button
              disabled={registerFormValid}
              // disabled="true"
              className="btn btn-primary"
              type="submit">
              Agree & Join
            </button>
            <div className="register__links">
              <p>
                Already on LinkedIn?{" "}
                <Link to="/login">
                  <span>Sign in</span>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => ({
  auth: state.authState,
});

export default connect(mapStateToProps, { register })(Register);

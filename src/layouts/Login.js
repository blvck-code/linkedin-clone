import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Footer from "../component/Footer";

const LoginUI = ({ login, auth: { data, loading } }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginFormValid = !email?.length || !password?.length;

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  const history = useHistory();

  useEffect(() => {
    if (data) {
      if (data && data.token) {
        history.push("/");
      }
    }
  }, [data]);

  return (
    <React.Fragment>
      <div className="login">
        <div className="login__wrapper">
          <div className="login__header">
            <h3>
              Linked <i className="fa fa-linkedin-square" />
            </h3>
          </div>
          <div className="login__title">
            <h2>Welcome Back</h2>
            <p>
              Don't miss your next opportunity. Sign in to stay updated on your
              proffessional world.
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <input
              value={email || ""}
              onChange={onEmailChange}
              name="email"
              type="text"
              placeholder="Email address"
            />
            <small>
              Try:<strong>admin@example.com</strong>
            </small>

            <input
              value={password || ""}
              onChange={onPasswordChange}
              autoComplete="false"
              name="password"
              type="password"
              placeholder="Password"
            />
            <small>
              Try:<strong>pass123</strong>
            </small>
            <button
              disabled={loginFormValid || loading}
              type="submit"
              className="btn btn-primary">
              Sign in
            </button>
          </form>
          <div className="login__links">
            <Link to="/reset-password">
              <p>Forgot password?</p>
            </Link>
            <p>
              New to LinkedIn?{" "}
              <Link to="/register">
                <span>Join now</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default LoginUI;

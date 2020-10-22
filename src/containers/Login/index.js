import React, { useEffect } from "react";
import LoginUI from "../../layouts/Login";
import useForm from "./useForm";
import { connect } from "react-redux";
import { login } from "../../redux/actions/auth";

const LoginComponent = ({ login, auth }) => {
  document.title = "Login | LinkedIn";

  return <LoginUI login={login} auth={auth} form={useForm()} />;
};

const mapStateToProps = (state) => ({
  auth: state.authState,
});

export default connect(mapStateToProps, { login })(LoginComponent);

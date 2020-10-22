import React from "react";
import RegisterUI from "../../layout/Register";
import useForm from "./useForm";

const RegisterComponent = () => {
  return <RegisterUI auth form={useForm()} />;
};

export default RegisterComponent;

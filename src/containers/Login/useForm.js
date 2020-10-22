import React, { useState } from "react";

export default () => {
  const [form, setForm] = useState({});

  const onChange = (e, { name, value }) => {
    setForm({ ...form, [name]: value });
  };

  const loginFormValid = !form.username?.length || !form.password?.length;

  return { form, onChange, loginFormValid };
};

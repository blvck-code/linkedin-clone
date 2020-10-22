import React from "react";
import { useHistory } from "react-router-dom";
import Footer from "../component/Footer";

const ResetPassUI = () => {
  const history = useHistory();

  return (
    <>
      <div className="reset-pass">
        <div className="reset__wrapper">
          <div className="reset__title">
            <h1>First, let's find your account</h1>
            <h3>Please enter your email address</h3>
          </div>
          <form>
            <label htmlFor="email">
              Email <span>*</span>
            </label>
            <input
              autoFocus
              type="text"
              placeholder="Enter your emaill address"
            />
            <div className="btn__group">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  history.goBack();
                }}
                className="btn btn-secondary">
                Cancel
              </button>
              <button className="btn btn-primary">Find account</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ResetPassUI;

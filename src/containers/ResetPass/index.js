import React, { useEffect } from "react";
import ResetPassUI from "../../layouts/ResetPass";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const ResetPassComponent = ({ auth: { data } }) => {
  document.title = "Reset Password | LinkedIn";

  const history = useHistory();

  useEffect(() => {
    if (data) {
      if (data && data.token) {
        history.push("/");
      }
    }
  }, [data]);

  return <ResetPassUI />;
};

const mapStateToProps = (state) => ({
  auth: state.authState,
});

export default connect(mapStateToProps)(ResetPassComponent);

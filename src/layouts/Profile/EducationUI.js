import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchEdu } from "../../redux/actions/education";
import EducationPlaceholder from "../placeholders/EducationPlaceholder";

import EduItem from "./EduItem";

const EducationUI = ({ fetchEdu, education: { loading, data, error } }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    fetchEdu(pathname);
  }, [pathname]);

  return (
    <div className="education__wrapper">
      <div className="profile__title">
        <h1>Education</h1>
        <i className="fa fa-plus" />
      </div>
      {loading && (
        <>
          <EducationPlaceholder />
          <EducationPlaceholder />
        </>
      )}
      {!loading &&
        data &&
        data.map((item) => <EduItem key={item.id} data={item} />)}
      {!loading && data && data.length < 1 && (
        <p style={{ padding: "0 40px" }}>No education background added yet!</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  education: state.eduState.education,
});

export default connect(mapStateToProps, { fetchEdu })(EducationUI);

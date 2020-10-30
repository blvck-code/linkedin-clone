import React, { useEffect } from "react";
import { fetchExpe } from "../../redux/actions/experience";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import ExpeItem from "./ExpeItem";
import EducationPlaceholder from "../placeholders/EducationPlaceholder";

const ExperienceUI = ({ experience: { loading, data, error }, fetchExpe }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    fetchExpe(pathname);
  }, [pathname]);

  // useEffect(() => {
  //   effect
  //   return () => {
  //     cleanup
  //   }
  // }, [input])

  return (
    <div className="experience__wrapper">
      <div className="profile__title">
        <h1>Experience</h1>
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
        data.map((item) => <ExpeItem key={item.id} data={item} />)}
      {!loading && data && data.length < 1 && (
        <p style={{ padding: "0 40px" }}>No experience added yet!</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  experience: state.expState.experience,
});

export default connect(mapStateToProps, { fetchExpe })(ExperienceUI);

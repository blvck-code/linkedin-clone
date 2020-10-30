import React from "react";

const ExpeItem = ({ data }) => {
  return (
    <div className="experience__item">
      <i className="fa fa-black-tie" />
      <div className="experience__info">
        <div className="experience__title">
          <h4>{data.job}</h4>
          <i className="fa fa-edit" />
        </div>
        <p className="experience__job">
          {data.job}, {data.employment_type}
        </p>
        <time>
          {data.start} - {data.end}
        </time>
        {data.location && (
          <p className="experience__location">{data.location}</p>
        )}
        {data.description && (
          <p className="experience__desc">{data.description}</p>
        )}
      </div>
    </div>
  );
};

export default ExpeItem;

import React from "react";

const EduItem = ({ data }) => {
  return (
    <div className="education__item">
      <i className="fa fa-graduation-cap" />

      <div className="education__info">
        <div className="education__title">
          {data && <h4>{data.school}</h4>}
          <i className="fa fa-edit" />
        </div>
        {data && (
          <p className="education__degree">
            {data.study_field}, {data.degree}
          </p>
        )}
        {data && (
          <time>
            {data.start} - {data.end}
          </time>
        )}
        {data.description && (
          <p className="education__desc">{data.description}</p>
        )}
      </div>
    </div>
  );
};

export default EduItem;

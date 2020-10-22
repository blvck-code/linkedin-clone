import React from "react";
import img from "../../assets/images/img.jpg";

const Image = () => {
  const clickOutside = (e) => {
    console.log(e.target);
    if (e.target === document.querySelector(".modal")) {
      document.querySelector(".modal").style.display = "none";
    } else if (e.target === document.querySelector(".imageModal")) {
      document.getElementById("imgModal").style.display = "none";
    }
  };

  window.addEventListener("click", clickOutside);
  return (
    <div className="modal" id="imgModal">
      <div className="imageModal">
        <img />
        <i
          onClick={() => {
            document.getElementById("imgModal").style.display = "none";
          }}
          className="fa fa-close"></i>
      </div>
    </div>
  );
};

export default Image;

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import dp from "../../assets/images/default.png";
import bg from "../../assets/images/img.jpg";
import clickOutside from "../../helpers/closeModals";
import { updateProfile } from "../../redux/actions/profile";

const EditProfile = ({ data, updateProfile }) => {
  const [bgImg, setBgImg] = useState(null);
  const [dpImg, setDpImg] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [profession, setProfession] = useState("");
  const [headline, setHeadline] = useState("");
  const [country, setCountry] = useState("");
  const [location, setLocation] = useState("");

  const clickOutside = (e) => {
    if (e.target === document.querySelector(".modal")) {
      document.querySelector(".modal").style.display = "none";
    } else if (e.target === document.querySelector("#editProfile")) {
      document.getElementById("editProfile").style.display = "none";
    }
  };

  const { pathname } = useLocation();

  window.addEventListener("click", clickOutside);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form_data = JSON.stringify({
      first_name: firstName,
      last_name: lastName,
      profession,
      headline,
      country,
      location,
    });
    updateProfile(pathname, form_data);
  };

  return (
    <div className="modal" id="editProfile">
      <div className="editProfile">
        <div className="editProfile__title">
          <h2>Edit Intro</h2>
          <i
            onClick={() => {
              document.getElementById("editProfile").style.display = "none";
            }}
            className="fa fa-close"
          />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="editProfile__imgs">
            <div className="editProfile__bg_img">
              <img
                src={bgImg ? bgImg : data?.bg_pic ? data?.bg_pic : bg}
                alt="bg_img"
                className="profile_bgImg"
              />

              <div className="bg__icon">
                <i className="fa fa-camera" />
              </div>
            </div>
            <div className="editProfile__dp_img">
              <img
                src={dpImg ? dpImg : data?.profile_pic ? data?.profile_pic : dp}
                alt="dp_img"
                className=""
              />
              <div className="dp__icon">
                <i className="fa fa-pencil" />
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="form-group__item">
              <label htmlFor="firstName">
                First Name <span>*</span>
              </label>
              <input
                value={firstName ? firstName : data?.first_name}
                onChange={(e) =>
                  setFirstName(
                    e.target.value?.length > 0
                      ? e.target.value
                      : data?.first_name
                  )
                }
                type="text"
              />
            </div>
            <div className="form-group__item">
              <label htmlFor="lastName">
                Last Name <span>*</span>
              </label>
              <input
                value={lastName ? lastName : data?.last_name}
                onChange={(e) => setLastName(e.target.value)}
                type="text"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="form-group__item">
              <label htmlFor="firstName">
                Proffession <span>*</span>
              </label>
              <select
                name="profession"
                value={profession ? profession : data?.profession}
                onChange={(e) => setProfession(e.target.value)}>
                <option value=" ">* Select Proffessional Status</option>
                <option value="Developer">Developer</option>
                <option value="Junior Developer">Junior Developer</option>
                <option value="Senior Developer">Senior Developer</option>
                <option value="Manager">Manager</option>
                <option value="Student or Learning">Student or Learning</option>
                <option value="Instructor">Instructor or Teacher</option>
                <option value="Intern">Intern</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          <div className="textarea">
            <label htmlFor="headline">
              Headline <span>*</span>
            </label>
            <textarea
              value={headline?.length > 0 ? headline : data?.headline}
              onChange={(e) => setHeadline(e.target.value)}
            />
          </div>
          <div className="form-group">
            <div className="form-group__item">
              <label htmlFor="firstName">
                Country/ Region <span>*</span>
              </label>
              <input
                value={country ? country : data?.country}
                onChange={(e) => setCountry(e.target.value)}
                type="text"
              />
            </div>
            <div className="form-group__item">
              <label htmlFor="lastName">Location in this Country/ Region</label>
              <input
                value={location ? location : data?.location}
                onChange={(e) => setLocation(e.target.value)}
                type="text"
              />
            </div>
          </div>
          <div className="editProfile__footer">
            <a
              onClick={() =>
                (document.getElementById("editProfile").style.display = "none")
              }
              className="btn btn-dark">
              Cancel
              {/* <i className="fa fa-circle-o-notch spin rotate" /> */}
            </a>
            <button type="submit" className="btn btn-primary">
              Save
              {/* <i className="fa fa-circle-o-notch spin rotate" /> */}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  //   profile: state.authorProfile,
});

export default connect(mapStateToProps, { updateProfile })(EditProfile);

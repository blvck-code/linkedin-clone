import React, { useRef } from "react";
import { connect } from "react-redux";

const CreatePostModal = ({ data }) => {
  const clickOutside = (e) => {
    console.log(e.target);
    if (e.target === document.querySelector(".modal")) {
      document.querySelector(".modal").style.display = "none";
    } else if (e.target === document.querySelector("#createPost")) {
      document.getElementById("createPost").style.display = "none";
    }
  };

  window.addEventListener("click", clickOutside);

  const imagePickerRef = useRef(null);

  const choseImage = () => {
    if (imagePickerRef.current) {
      imagePickerRef.current.click();
    }
  };

  //   const readURL = (e) => {
  //     let reader = new FileReader();
  //     reader.readAsDataURL(e.target.files[0]);

  //     reader.onload = (e) => {
  //       setContactPic(e.target.result);
  //       setForm({ ...form, ["contactPic"]: e.target.result });
  //     };
  //   };

  return (
    <div className="modal" id="createPost">
      <div className="createPost">
        <div className="createPost__title">
          <h2>Create a post</h2>
          <i
            onClick={() =>
              (document.getElementById("createPost").style.display = "none")
            }
            className="fa fa-close"
          />
        </div>
        <div className="underline" />

        <form>
          <textarea
            autoFocus="true"
            placeholder="What do you want to talk about?"
          />
          <div className="createPost__footer">
            <input
              type="file"
              accept="image/**"
              ref={imagePickerRef}
              //   onChange={readURL}
              style={{ display: "none" }}
            />
            <div className="createPost__icons">
              <i onClick={choseImage} className="fa fa-camera" />
              <i onClick={choseImage} className="fa fa-video-camera" />
              <i onClick={choseImage} className="fa fa-file-archive-o" />
            </div>
            <button className="btn btn-primary">Post</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePostModal;

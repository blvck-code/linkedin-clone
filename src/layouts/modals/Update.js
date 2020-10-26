import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import { Prompt } from "react-router-dom";
import { createPost } from "../../redux/actions/posts";
// import img from "../../assets/images/img.jpg";

const UpdatePostModal = ({ data }) => {
  const [body, setBody] = useState("");
  const [img, setImg] = useState(null);
  console.log(data);

  const clickOutside = (e) => {
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

  const readURL = (e) => {
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);

    reader.onload = (e) => {
      setImg(e.target.result);
    };
  };

  const form = { body, img };

  // const formIsHalfFilled =
  //   Object.values(form).filter((item) => item && item !== "")?.length > 0 &&
  //   !data;

  const onSubmit = (e) => {
    e.preventDefault();

    createPost(body, img);
    document.querySelector(".modal").style.display = "none";
    document.getElementById("updatePost").style.display = "none";
    setBody("");
    setImg(null);
  };

  return (
    <>
      {/* <Prompt
        when={formIsHalfFilled}
        message="You have unsaved changes, sure you want to leave ?"
      /> */}
      <div className="modal" id="updatePost">
        <div className="updatePost">
          <div className="updatePost__title">
            <h2>Update a post</h2>
            <i
              onClick={() => {
                document.getElementById("updatePost").style.display = "none";
              }}
              className="fa fa-close"
            />
          </div>
          <div className="underline" />

          <form onSubmit={onSubmit}>
            <textarea
              autoFocus="true"
              placeholder="What do you want to talk about?"
              value={data.body}
              onChange={(e) => setBody(e.target.value)}
            />
            {img && (
              <div className="updatePost__img">
                <img onClick={choseImage} src={data.img} />
              </div>
            )}
            <div className="updatePost__footer">
              <input
                type="file"
                accept="image/**"
                ref={imagePickerRef}
                onChange={readURL}
                style={{ display: "none" }}
              />
              <div className="updatePost__icons">
                <i onClick={choseImage} className="fa fa-camera" />
                <i onClick={choseImage} className="fa fa-video-camera" />
                <i onClick={choseImage} className="fa fa-file-archive-o" />
              </div>

              <button className="btn btn-primary">Post</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

// const mapStateToProps = state => ({
// })

export default connect(null, { createPost })(UpdatePostModal);
import React, { useRef, useState } from "react";
// import img from "../../assets/images/img.jpg";

const CreatePostModal = ({ data }) => {
  const [img, setImg] = useState(null);

  const clickOutside = (e) => {
    if (e.target === document.querySelector(".modal")) {
      document.querySelector(".modal").style.display = "none";
    } else if (e.target === document.querySelector("#createPost")) {
      document.getElementById("createPost").style.display = "none";
    }
    // setImg(null);
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

  return (
    <div className="modal" id="createPost">
      <div className="createPost">
        <div className="createPost__title">
          <h2>Create a post</h2>
          <i
            onClick={() => {
              document.getElementById("createPost").style.display = "none";
              // setImg("");
            }}
            className="fa fa-close"
          />
        </div>
        <div className="underline" />

        <form>
          <textarea
            autoFocus="true"
            placeholder="What do you want to talk about?"
          />
          {img && (
            <div className="createPost__img">
              <img onClick={choseImage} src={img} />
            </div>
          )}
          <div className="createPost__footer">
            <input
              type="file"
              accept="image/**"
              ref={imagePickerRef}
              onChange={readURL}
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

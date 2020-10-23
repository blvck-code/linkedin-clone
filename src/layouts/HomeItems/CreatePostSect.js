import React from "react";
import CreatePostModal from "../modals/CreatePost";
import { connect } from "react-redux";

const CreatePost = ({ profile: { data } }) => {
  const createPostModal = () => {
    document.getElementById("createPost").style.display = "block";
    // document.querySelector("#imgModal img").setAttribute("src", image);
    // return image;
  };

  return (
    <div className="homepage__create">
      <CreatePostModal data={data} />
      <div className="create__group">
        <i className="fa fa-edit" />
        <input
          onFocus={() => createPostModal()}
          type="text"
          placeholder="Start a post"
        />
      </div>
      <div className="underline" />
      <div className="homepage__icons">
        <div onClick={() => createPostModal()} className="icon__group">
          <i onClick={() => createPostModal()} className="fa fa-camera" />
          <p>Photo</p>
        </div>
        <div onClick={() => createPostModal()} className="icon__group">
          <i onClick={() => createPostModal()} className="fa fa-video-camera" />
          <p>Video</p>
        </div>
        <div onClick={() => createPostModal()} className="icon__group">
          <i onClick={() => createPostModal()} className="fa fa-file" />
          <p>Document</p>
        </div>
        <div onClick={() => createPostModal()} className="icon__group">
          <i onClick={() => createPostModal()} className="fa fa-newspaper-o" />
          <p>Write article</p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profileState.userProfile,
});

export default connect(mapStateToProps)(CreatePost);

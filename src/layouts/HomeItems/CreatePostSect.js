import React from "react";

const CreatePost = () => {
  return (
    <div className="homepage__create">
      <div className="create__group">
        <i className="fa fa-edit" />
        <input type="text" placeholder="Start a post" />
      </div>
      <div className="underline" />
      <div className="homepage__icons">
        <div className="icon__group">
          <i className="fa fa-camera" />
          <p>Photo</p>
        </div>
        <div className="icon__group">
          <i className="fa fa-video-camera" />
          <p>Video</p>
        </div>
        <div className="icon__group">
          <i className="fa fa-file" />
          <p>Document</p>
        </div>
        <div className="icon__group">
          <i className="fa fa-newspaper-o" />
          <p>Write article</p>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;

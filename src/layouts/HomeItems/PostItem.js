import React, { useEffect, useState } from "react";
import Moment from "react-moment";
import { useHistory } from "react-router-dom";
import Update from "../modals/Update";

const PostItem = ({ post, imgModal, auth, deletePost }) => {
  const history = useHistory();
  const [update, setUpdate] = useState({});

  console.log(update);

  const updateModal = () => {
    document.getElementById("updatePost").style.display = "block";
    // <Update data={update} />;
    // document.getElementById("createPost").style.display = "block";
    // document.querySelector("#imgModal img").setAttribute("src", image);
    // return image;
  };

  const handleUpdate = (data) => {
    setUpdate(data);
    updateModal();
  };

  return (
    <div className="post__item">
      <Update update={update} />
      <div className="author">
        <div className="author__dp">
          <img onClick={() => history.push(`/${post.profile}`)} src={post.dp} />
        </div>
        <div className="author__info">
          <h4 onClick={() => history.push(`/${post.profile}`)}>
            {post.author}
          </h4>
          <p>{post.profession}</p>
          <small className="date-posted">
            <Moment format="MMMM Do YYYY">
              <time>{post.date_updated}</time>
            </Moment>{" "}
            <i className="fa fa-globe"></i>
          </small>
        </div>
        {post.profile === auth.slug && (
          <div className="post__btns">
            <button
              onClick={() => {
                handleUpdate(post);
              }}
              className="btn btn-primary-outline">
              Edit
            </button>
            <button
              onClick={() => deletePost(post.slug)}
              className="btn btn-danger">
              Delete
            </button>
          </div>
        )}
      </div>
      <div className="post__info">
        <p>{post.body}</p>
        <div className="post__img">
          <img onClick={() => imgModal(post.image)} src={post.image} />
        </div>
      </div>
    </div>
  );
};

export default PostItem;

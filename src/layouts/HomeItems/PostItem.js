import React from "react";
import Moment from "react-moment";
import { useHistory } from "react-router-dom";

const PostItem = ({ post, imgModal, auth, deletePost }) => {
  const history = useHistory();

  const userProfile = (url) => {
    history.push(`/profile/${url}`);
  };

  return (
    <div className="post__item">
      <div className="author">
        <div className="author__dp">
          <img onClick={() => userProfile(post.profile)} src={post.dp} />
        </div>
        <div className="author__info">
          <h4 onClick={() => userProfile(post.profile)}>{post.author}</h4>
          <p>{post.profession}</p>
          <small className="date-posted">
            <Moment start="day" fromNow>
              <time>{post.date_updated}</time>
            </Moment>{" "}
            <i className="fa fa-globe"></i>
          </small>
        </div>
        {post.profile === auth.slug && (
          <div className="post__btns">
            <button className="btn btn-primary-outline">Edit</button>
            <button
              onClick={() => deletePost(post.id)}
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

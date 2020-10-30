import React, { useEffect } from "react";
import CreatePost from "./CreatePostSect";
import { connect } from "react-redux";
import { fetchPosts, deletePost } from "../../redux/actions/posts";
import PostItem from "./PostItem";
import PostPlaceholder from "../placeholders/PostPlaceholder";

const Posts = ({
  auth,
  posts: { loading, data, isSearchActive, foundPosts, error },
  fetchPosts,
  deletePost,
  imgModal = { imgModal },
}) => {
  document.title = "Home | LinkedIn";

  useEffect(() => {
    if (data === null) {
      fetchPosts();
    }
  }, []);

  const currentPosts = isSearchActive ? foundPosts : data;

  return (
    <div className="homepage__posts">
      <CreatePost />

      <div className="underline" />

      {loading && <PostPlaceholder />}

      {/* {!loading && data.length === 0 && <h2>No posts</h2>} */}
      {!loading && (
        <div className="post__wrapper">
          {currentPosts &&
            currentPosts.map((post) => (
              <PostItem
                post={post}
                auth={auth}
                key={post.slug}
                imgModal={imgModal}
                deletePost={deletePost}
              />
            ))}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  posts: state.postState.posts,
  auth: state.authState.data,
});

export default connect(mapStateToProps, { fetchPosts, deletePost })(Posts);

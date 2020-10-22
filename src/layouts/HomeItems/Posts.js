import React, { useEffect } from "react";
import CreatePost from "./CreatePostSect";
import { connect } from "react-redux";
import { fetchPosts, deletePost } from "../../redux/actions/posts";
import PostItem from "./PostItem";

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

      {loading && <h2>Loading</h2>}

      {/* {!loading && data.length === 0 && <h2>No posts</h2>} */}
      <div className="post__wrapper">
        {currentPosts &&
          currentPosts.map((post) => (
            <PostItem
              post={post}
              auth={auth}
              key={post.id}
              imgModal={imgModal}
              deletePost={deletePost}
            />
          ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  posts: state.postState.posts,
  auth: state.authState.data,
});

export default connect(mapStateToProps, { fetchPosts, deletePost })(Posts);

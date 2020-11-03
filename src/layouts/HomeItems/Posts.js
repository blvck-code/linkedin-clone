import React, { useEffect, useRef, useCallback, useState } from "react";
import CreatePost from "./CreatePostSect";
import { connect } from "react-redux";
import { fetchPosts, deletePost, scrolled } from "../../redux/actions/posts";
import PostItem from "./PostItem";
import PostPlaceholder from "../placeholders/PostPlaceholder";
import axios from "axios";
import usePostSearch from "../../containers/HomePage/usePostSearch";
import { tokenConfig } from "../../helpers/tokenConfig";

const Posts = ({
  auth,
  posts: { loading, next, data },
  fetchPosts,
  scrolled,
  deletePost,
  imgModal = { imgModal },
}) => {
  document.title = "Home | LinkedIn";

  const [moreData, setMoreData] = useState([]);

  useEffect(() => {
    if (data?.length <= 0) {
      fetchPosts();
    }
  }, []);

  const fetchMore = (url) => (dispatch, getState) => {
    axios
      .get(url, tokenConfig(getState))
      .then((res) => {
        setMoreData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  window.addEventListener("scroll", () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

    if (clientHeight + scrollTop >= scrollHeight) {
      console.log("At the bottom");

      fetchMore(next);
      // scrolled(url);
    }
    // console.log({ scrollTop, clientHeight, scrollHeight });
  });

  useEffect(() => {
    console.log(moreData);
  }, [data]);

  const currentPosts = data;

  // useEffect(() => {
  // }, [pageNumber]);

  return (
    <div className="homepage__posts">
      <CreatePost />

      <div className="underline" />

      {loading && <PostPlaceholder />}

      {!loading && (
        <div className="post__wrapper">
          {currentPosts &&
            currentPosts?.map((post) => (
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
      {!loading && currentPosts?.length === 0 && (
        <div
          style={{
            backgroundColor: "#fff",
            borderRadius: "4px",
            padding: "10px",
            margin: "12px 0",
            boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.5)",
          }}>
          <h2 style={{ fontSize: 18, color: "#555" }}>No results found</h2>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  posts: state.postState.posts,
  auth: state.authState.data,
});

export default connect(mapStateToProps, { fetchPosts, deletePost, scrolled })(
  Posts
);

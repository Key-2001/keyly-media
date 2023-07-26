import React, { Fragment, useEffect } from "react";
import "./Posts.scss";
import { PostsData } from "../../Data/PostsData";
import Post from "../Post/Post";
import { useDispatch, useSelector } from "react-redux";
import { getTimelinePosts } from "../../actions/PostAction";

const Posts = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  const { posts, isLoading } = useSelector((state) => state.postReducer);
  console.log("hoatla", user);
  //! Selector

  //! Props

  //! State

  //! Function

  //! Effect
  useEffect(() => {
    dispatch(getTimelinePosts(user._id));
  }, []);
  //! Render
  return (
    <div className="posts-section">
      {isLoading ? (
        "Fetching Posts ..."
      ) : (
        <Fragment>
          {(posts || []).map((post, index) => {
            return <Post key={index} data={post} id={index} />;
          })}
        </Fragment>
      )}
    </div>
  );
};

export default Posts;

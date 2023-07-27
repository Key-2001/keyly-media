import React, { Fragment, useEffect } from "react";
import "./Posts.scss";
import { PostsData } from "../../Data/PostsData";
import Post from "../Post/Post";
import { useDispatch, useSelector } from "react-redux";
import { getTimelinePosts } from "../../actions/PostAction";
import { useParams } from "react-router-dom";

const Posts = () => {
  const params = useParams()
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  let { posts, isLoading } = useSelector((state) => state.postReducer);
  //! Selector

  //! Props

  //! State

  //! Function

  //! Effect
  useEffect(() => {
    dispatch(getTimelinePosts(user._id));
  }, []);
  //! Render
  if(!posts) return "no posts"
  if(params.id) posts = posts.filter(post => post.userId === params.id)
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

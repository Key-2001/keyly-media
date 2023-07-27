import React, { Fragment } from "react";
import "./ProfileCard.scss";
import CoverImg from "../../imgs/cover.jpg";
import ProfileImg from "../../imgs/profileImg.jpg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProfileCard = (props) => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const posts = useSelector((state) => state.postReducer.posts)
  const serverPublic = import.meta.env.VITE_REACT_APP_PUBLIC_FOLDER;
  //! Props
  const { location } = props;
  //! State
  //! Function

  //! Effect

  //! Render
  return (
    <div className="profile-card">
      <div className="profile-card-img">
        <img
          src={
            user.coverPicture
              ? serverPublic + user.coverPicture
              : serverPublic + "defaultCover.jpg"
          }
          alt="bg"
          className={location === 'profilePage' ? 'cover-profile-img':''}
        />
        <img
          src={
            user.profilePicture
              ? serverPublic + user.profilePicture
              : serverPublic + "defaultProfile.png"
          }
          alt="profile-img"
        />
      </div>
      <div className="profile-card-name">
        <span>
          {user.firstName} {user.lastName}
        </span>
        <span>{user.worksAt ? user.worksAt : "Write about yourself"}</span>
      </div>
      <div className="profile-card-follow_status">
        <hr />
        <div>
          <div className="follow">
            <span>{user.following.length}</span>
            <span>Following</span>
          </div>
          <div className="divide" />
          <div className="follow">
            <span>{user.followers.length}</span>
            <span>Followers</span>
          </div>
          {location === "profilePage" && (
            <Fragment>
              <div className="divide" />
              <div className="follow">
                <span>{posts.filter(post => post.userId === user._id).length}</span>
                <span>Posts</span>
              </div>
            </Fragment>
          )}
        </div>
        <hr />
      </div>
      {location === "profilePage" ? (
        ""
      ) : (
        <span>
          <Link
            to={`/profile/${user._id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            My profile
          </Link>
        </span>
      )}
    </div>
  );
};

export default ProfileCard;

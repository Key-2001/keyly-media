import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { followUser, unFollowUser } from "../../actions/UserAction";

const User = (props) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);

  //! Props
  const {person} = props;
  //! State
  const [following, setFollowing] = useState(person.followers.includes(user._id))
  const serverPublic = import.meta.env.VITE_REACT_APP_PUBLIC_FOLDER
  //! Function
  const handleFollow = () => {
    following ? dispatch(unFollowUser(person._id, user)) : dispatch(followUser(person._id, user))
    setFollowing(prev => !prev)
  }
  //! Effect

  //! Render
  return (
    <div className="follower-card-info">
      <div>
        <img
          src={person.profilePicture ? serverPublic + person.profilePicture : serverPublic+ 'defaultProfile.png'}
          alt={`avatar-${person.firstName}`}
          className="follower-card-info_img"
        />
        <div className="follower-card-info_name">
          <span>{person.firstName}</span>
          <span>@{person.username}</span>
        </div>
      </div>
      <button className={following ? "button fc-button un-follow-btn" : 'button fc-button'} onClick={handleFollow}>{following ? "Unfollow" : "Follow"}</button>
    </div>
  );
};

export default User;

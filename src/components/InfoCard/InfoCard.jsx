import React, { Fragment, useCallback, useEffect, useState } from "react";
import "./InfoCard.scss";
import { UilPen } from "@iconscout/react-unicons";
import ProfileModal from "../ProfileModal/ProfileModal";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as UserApi from "../../api/UserRequest";
import { logout } from "../../actions/AuthAction";

const InfoCard = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  //! Props

  //! State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const params = useParams();
  const profileUserId = params.id;
  const [profileUser, setProfileUser] = useState({});
  //! Function
  const handleLogOut = useCallback(() => {
    dispatch(logout())
  },[])
  //! Effect
  useEffect(() => {
    const fetchProfileUser = async () => {
      if (profileUserId === user._id) {
        setProfileUser(user);
      } else {
        const response = await UserApi.getUser(profileUserId);
        setProfileUser(response.data.user);
      }
    };
    fetchProfileUser();
  }, [user]);
  //! Render
  return (
    <div className="info-card-section">
      <div className="info-card-section_head">
        <h4>Profile Info</h4>
        {user._id === profileUserId ? (
          <Fragment>
            <div>
              <UilPen
                width="2rem"
                height="1.2rem"
                onClick={() => setIsModalOpen(true)}
              />
              <ProfileModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} data={user}/>
            </div>
          </Fragment>
        ) : (
          ""
        )}
      </div>
      <div className="info-card-section_info">
        <span>
          <b>Status </b>
        </span>
        <span>{profileUser.relationship}</span>
      </div>
      <div className="info-card-section_info">
        <span>
          <b>Lives in </b>
        </span>
        <span>{profileUser.livesIn}</span>
      </div>
      <div className="info-card-section_info">
        <span>
          <b>Works at </b>
        </span>
        <span>{profileUser.worksAt}</span>
      </div>
      <button className="button logout-btn" onClick={handleLogOut}>Logout</button>
    </div>
  );
};

export default InfoCard;

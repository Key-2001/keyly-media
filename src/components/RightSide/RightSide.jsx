import React, { useState } from "react";
import "./RightSide.scss";
import HomeIcon from "../../imgs/home.png";
import NotiIcon from "../../imgs/noti.png";
import CommentIcon from "../../imgs/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import TrendCard from "../TrendCard/TrendCard";
import ShareModal from "../ShareModal/ShareModal";

const RightSide = () => {
  //! Props

  //! State
  const [isOpenModal, setIsOpenModal] = useState(false);
  //! Function

  //! Effect

  //! Render
  return (
    <div className="right-side-section">
      <div className="right-side-section_nav">
        <img src={HomeIcon} alt="home" />
        <UilSetting />
        <img src={NotiIcon} alt="noti" />
        <img src={CommentIcon} alt="comment" />
      </div>
      <TrendCard />
      <button className="button r-btn" onClick={() => setIsOpenModal(true)}>
        Share
      </button>
        <ShareModal isOpen={isOpenModal} setIsOpen={setIsOpenModal} />
    </div>
  );
};

export default RightSide;

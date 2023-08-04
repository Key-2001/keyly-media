import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userChats } from "../../api/ChatsRequest";
import Conversation from "../../components/Conversation/Conversation";
import LogoSearch from "../../components/LogoSearch/LogoSearch";
import "./Chat.scss";
import HomeIcon from "../../imgs/home.png";
import NotiIcon from "../../imgs/noti.png";
import CommentIcon from "../../imgs/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import ChatBox from "../../components/ChatBox/ChatBox";

const Chat = () => {
  const { user } = useSelector((state) => state.authReducer.authData);
  //! Props

  //! State
  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const { isLoading, isFetching, refetch } = useQuery(
    ["users-chat"],
    () => userChats(user._id),
    {
      enabled: false,
      onSuccess: (response) => {
        console.log("hoatlaRespones", response);
        setChats(response.data);
      },
    }
  );
  //! Function

  //! Effect
  useEffect(() => {
    refetch && refetch();
  }, []);
  //! Render
  return (
    <div className="Chat">
      {/* Left side */}
      <div className="Left-side-chat">
        <LogoSearch />
        <div className="Chat-container">
          <h2>Chats</h2>
          <div className="Chat-list">
            {chats.map((chat) => (
              <div key={chat._id} onClick={() => setCurrentChat(chat)}>
                <Conversation data={chat} currentUserId={user._id} />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Right side */}
      <div className="Right-side-chat">
        <div style={{ width: "20rem", alignSelf: "flex-end" }}>
          <div className="right-side-section_nav">
            <Link to="/home">
              <img src={HomeIcon} alt="home" />
            </Link>
            <UilSetting />
            <img src={NotiIcon} alt="noti" />
            <Link to="/chat">
              <img src={CommentIcon} alt="comment" />
            </Link>
          </div>
          {/* Chat body */}
        </div>
        <ChatBox chat={currentChat} currentUserId={user._id} />
      </div>
    </div>
  );
};

export default Chat;

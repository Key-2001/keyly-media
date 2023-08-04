import { useQuery } from "@tanstack/react-query";
import React, { Fragment, useCallback, useEffect, useState } from "react";
import { getMessages } from "../../api/MessagesRequest";
import { getUser } from "../../api/UserRequest";
import "./ChatBox.scss";
import { format } from "timeago.js";
import InputEmoji from "react-input-emoji";

const ChatBox = (props) => {
  //! Props
  const { chat, currentUserId } = props;
  console.log("hsbajdhs", props);
  //! State
  const [userData, setUserData] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const userId = chat?.members?.find((id) => id !== currentUserId);
  const { refetch } = useQuery(["get-user-chat"], () => getUser(userId), {
    enabled: false,
    onSuccess: (response) => {
      setUserData(response?.data?.user);
    },
  });
  const { refetch: refetchMessages } = useQuery(
    ["get-messages"],
    () => getMessages(chat._id),
    {
      enabled: false,
      onSuccess: (response) => {
        setMessages(response?.data);
      },
    }
  );
  const serverPublic = import.meta.env.VITE_REACT_APP_PUBLIC_FOLDER;
  //! Function
  const handleChange = useCallback((e) => setNewMessage(e), [newMessage]);
  //! Effect
  useEffect(() => {
    if (chat !== null) {
      refetch && refetch();
    }
  }, [chat, currentUserId]);
  useEffect(() => {
    if (chat !== null) {
      refetchMessages && refetchMessages();
    }
  }, [chat]);
  //! Render
  return (
    <Fragment>
      <div className="ChatBox-container">
        {chat ? (
          <Fragment>
            <div className="chat-header">
              <div className="follower">
                <div style={{ display: "flex", gap: "8px" }}>
                  <img
                    src={
                      userData?.profilePicture
                        ? serverPublic + userData.profilePicture
                        : serverPublic + "defaultProfile.png"
                    }
                    alt="Profile"
                    className="followerImage"
                    style={{ width: "50px", height: "50px" }}
                  />
                  <div className="name" style={{ fontSize: "0.8rem" }}>
                    <span>
                      {userData?.firstName} {userData?.lastName}
                    </span>
                  </div>
                </div>
              </div>
              <hr style={{ width: "85%", border: "0.1px solid #ececec" }} />
            </div>

            {/* Chat box messages */}
            <div className="chat-body">
              {messages.map((message) => (
                <Fragment key={message._id}>
                  <div
                    className={
                      message.senderId === currentUserId
                        ? "message own"
                        : "message"
                    }
                  >
                    <span>{message.text}</span>
                    <span>{format(message.createdAt)}</span>
                  </div>
                </Fragment>
              ))}
            </div>

            {/* Chat sender */}
            <div className="chat-sender">
              <div>+</div>
              <InputEmoji value={newMessage} onChange={handleChange} />
              <div className="send-button button">Send</div>
            </div>
          </Fragment>
        ) : (
          <span className="chatbox-empty-message">
            Tap on a Chat to start Conversation...
          </span>
        )}
      </div>
    </Fragment>
  );
};

export default ChatBox;

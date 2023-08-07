import { useQuery } from "@tanstack/react-query";
import React, { Fragment, useEffect, useState } from "react";
import { getUser } from "../../api/UserRequest";

const Conversation = (props) => {
  //! Props
  const { data, currentUserId, online } = props;
  //! State
  const [userData, setUserData] = useState(null);
  const userId = data.members.find((id) => id !== currentUserId);
  const { isLoading, isFetching, refetch } = useQuery(
    ["get-user"],
    () => getUser(userId),
    {
      enabled: false,
      onSuccess: (response) => {
        setUserData(response?.data?.user);
      },
    }
  );
  const serverPublic = import.meta.env.VITE_REACT_APP_PUBLIC_FOLDER;

  //! Function

  //! Effect
  useEffect(() => {
    refetch && refetch();
  }, []);
  //!Render
  return (
    <>
      <div className="follower conversation">
        <div style={{ display: "flex", gap: "8px" }}>
          {online && <div className="online-dot"></div>}
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
            <span>{online ? "Online" : "Offline"}</span>
          </div>
        </div>
      </div>
      <hr style={{ width: "85%", border: "0.1px solid #ececec" }} />
    </>
  );
};

export default Conversation;

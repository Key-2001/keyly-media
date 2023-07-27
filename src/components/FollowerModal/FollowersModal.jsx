import React from "react";
import { Modal, useMantineTheme } from "@mantine/core";
import FollowersCard from "../FollowersCard/FollowersCard";
import { useSelector } from "react-redux";
import User from "../User/User";

const FollowersModal = (props) => {
  //! Props
  const {modalOpened, setModalOpened, data} = props
  const { user } = useSelector((state) => state.authReducer.authData);
  //! State
  const theme = useMantineTheme();

  //! Function

  //! Effect

  //! Render
  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size="55%"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <div className="follower-card">
        {(data || []).map((person, index) => {
          if(person._id !== user._id){
            return <User key={index} person={person}/>
          }
        })}
      </div>
    </Modal>
  );
};

export default FollowersModal;
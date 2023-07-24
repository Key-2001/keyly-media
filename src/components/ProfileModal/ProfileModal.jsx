import React from "react";
import { Modal, useMantineTheme } from "@mantine/core";
import "./ProfileModal.scss";

const ProfileModal = (props) => {
  const theme = useMantineTheme();
  //! Props
  const { isOpen, setIsOpen } = props;
  //! State

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
      opened={isOpen}
      size="55%"
      onClose={() => setIsOpen(false)}
    >
      <form className="profile-info-form">
        <h3>Your Info</h3>
        <div>
          <input
            type="text"
            className="profile-info-form_info"
            name="firstName"
            placeholder="First Name"
          />
          <input
            type="text"
            className="profile-info-form_info"
            name="lastName"
            placeholder="Last Name"
          />
        </div>
        <div>
          <input
            type="text"
            className="profile-info-form_info"
            name="worksAt"
            placeholder="Works at"
          />
        </div>
        <div>
          <input
            type="text"
            className="profile-info-form_info"
            name="livesIn"
            placeholder="Lives in"
          />
          <input
            type="text"
            className="profile-info-form_info"
            name="country"
            placeholder="Country"
          />
        </div>
        <div>
          <input
            type="text"
            className="profile-info-form_info"
            name="relationshipStatus"
            placeholder="RelationShip Status"
          />
        </div> 
        <div>
        Profile Image
          <input
            type="file"
             name="profileImg"
          />
          Cover Image
          <input type="file" name="coverImg"/>
        </div>
        <button className="button info-btn">Update</button>
      </form>
    </Modal>
  );
};

export default ProfileModal;

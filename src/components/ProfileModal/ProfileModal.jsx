import React, { useState } from "react";
import { Modal, useMantineTheme } from "@mantine/core";
import "./ProfileModal.scss";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { uploadImage } from "../../api/UploadRequest";
import { updateUser } from "../../actions/UserAction";

const ProfileModal = (props) => {
  const dispatch = useDispatch();
  const params = useParams();
  const {user} = useSelector((state) => state.authReducer.authData)
  const theme = useMantineTheme();
  //! Props
  const { isOpen, setIsOpen, data } = props;
  const {password, ...other} = data;
  const [formData, setFormData] = useState(other);
  const [profileImage, setProfileImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);

  //! State

  //! Function
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }
  const handleImageChange = (e) => {
    if(e.target.files && e.target.files[0]){
      let img = e.target.files[0];
      e.target.name === "profileImage" ? setProfileImage(img) : setCoverImage(img);
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    let userData = formData;
    if(profileImage){
      const data = new FormData();
      const fileName = Date.now() + profileImage.name;
      data.append("name", fileName);
      data.append("file", profileImage);
      userData.profilePicture = fileName;
      try {
        dispatch(uploadImage(data))
      } catch (error) {
        console.log(error);
      }
    }
    if(coverImage){
      const data = new FormData();
      const fileName = Date.now() + coverImage.name;
      data.append("name", fileName);
      data.append("file", coverImage);
      userData.coverPicture = fileName;
      try {
        dispatch(uploadImage(data))
      } catch (error) {
        console.log(error);
      }
    }
    dispatch(updateUser(params.id, userData));
    setIsOpen(false)
  }
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
            onChange={handleChange}
            value={formData.firstName}
          />
          <input
            type="text"
            className="profile-info-form_info"
            name="lastName"
            placeholder="Last Name"
            onChange={handleChange}
            value={formData.lastName}
          />
        </div>
        <div>
          <input
            type="text"
            className="profile-info-form_info"
            name="worksAt"
            placeholder="Works at"
            onChange={handleChange}
            value={formData.worksAt}
          />
        </div>
        <div>
          <input
            type="text"
            className="profile-info-form_info"
            name="livesIn"
            placeholder="Lives in"
            onChange={handleChange}
            value={formData.livesIn}
          />
          <input
            type="text"
            className="profile-info-form_info"
            name="country"
            placeholder="Country"
            onChange={handleChange}
            value={formData.country}
          />
        </div>
        <div>
          <input
            type="text"
            className="profile-info-form_info"
            name="relationship"
            placeholder="RelationShip Status"
            onChange={handleChange}
            value={formData.relationship}
          />
        </div> 
        <div>
        Profile Image
          <input
            type="file"
             name="profileImage" onChange={handleImageChange}
          />
          Cover Image
          <input type="file" name="coverImage" onChange={handleImageChange}/>
        </div>
        <button className="button info-btn" onClick={handleSubmit}>Update</button>
      </form>
    </Modal>
  );
};

export default ProfileModal;

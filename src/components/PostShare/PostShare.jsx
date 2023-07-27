import React, { Fragment, useCallback, useRef, useState } from "react";
import "./PostShare.scss";
import profileImg from "../../imgs/profileImg.jpg";
import {
  UilScenery,
  UilPlayCircle,
  UilLocationPoint,
  UilSchedule,
  UilTimes,
} from "@iconscout/react-unicons";
import {useDispatch, useSelector} from 'react-redux'
import { uploadImage, uploadPost } from "../../actions/UploadAction";

const PostShare = () => {
  const dispatch = useDispatch()
  //! Selector
  const {uploading} = useSelector((state) => state.postReducer)
  //! Props

  //! State
  const [image, setImage] = useState(null);
  const imageRef = useRef();
  const descRef = useRef();
  const {user} = useSelector((state => state.authReducer.authData));
  const serverPublic = import.meta.env.VITE_REACT_APP_PUBLIC_FOLDER

  //! Function
  const reset = useCallback(() => {
    setImage(null);
    descRef.current.value = ''
  },[])
  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setImage(img);
    }
  };
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: descRef.current.value,
    }
    if (image){
      const data = new FormData();
      const filename = Date.now() + image.name;
      data.append("name", filename);
      data.append("file", image);
      newPost.image = filename;
      try {
        dispatch(uploadImage(data))
      } catch (error) {
        console.log(error)
      }
    }
    dispatch(uploadPost(newPost))
    reset && reset()
  },[image])
  //! Effect

  //!Render
  return (
    <Fragment>
      <div className="post-share">
        <img src={user.profilePicture ? serverPublic + user.profilePicture : serverPublic + "defaultProfile.png"} alt="post-share" />
        <div>
          <input type="text" placeholder="What's happening" ref={descRef} required/>
          <div className="post-share-option">
            <div
              className="post-share-option_icon"
              style={{ color: "var(--photo)" }}
              onClick={() => imageRef.current.click()}
            >
              <UilScenery />
              Photo
            </div>
            <div
              className="post-share-option_icon"
              style={{ color: "var(--video)" }}
            >
              <UilPlayCircle />
              Video
            </div>
            <div
              className="post-share-option_icon"
              style={{ color: "var(--location)" }}
            >
              <UilLocationPoint />
              Location
            </div>
            <div
              className="post-share-option_icon"
              style={{ color: "var(--schedule)" }}
            >
              <UilSchedule />
              Schedule
            </div>
            <button className="button ps-button" onClick={handleSubmit} disabled={uploading}> {uploading ? "Uploading..." : "Share"} </button>
            <div style={{ display: "none" }}>
              <input
                type="file"
                name="myImage"
                ref={imageRef}
                onChange={onImageChange}
              />
            </div>
          </div>
          {image && (
            <div className="preview-img">
              <UilTimes onClick={() => setImage(null)} />
              <img src={URL.createObjectURL(image)} alt="preview-img" />
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default PostShare;

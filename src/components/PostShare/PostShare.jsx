import React, { Fragment, useRef, useState } from "react";
import "./PostShare.scss";
import profileImg from "../../imgs/profileImg.jpg";
import {UilScenery, UilPlayCircle, UilLocationPoint, UilSchedule, UilTimes} from '@iconscout/react-unicons'

const PostShare = () => {
  //! Props

  //! State
  const [image, setImage] = useState(null);
  const imageRef = useRef()
  //! Function
  const onImageChange = (e) => {
    if(e.target.files && e.target.files[0] ){
      let img = e.target.files[0];
      setImage({
        image: URL.createObjectURL(img)
      })
    }
  }
  //! Effect

  //!Render
  return (
    <Fragment>
      <div className="post-share">
        <img src={profileImg} alt="post-share" />
        <div>
          <input type="text" placeholder="What's happening" />
          <div className="post-share-option">
            <div className="post-share-option_icon" style={{color: "var(--photo)"}} onClick={() => imageRef.current.click()}>
              <UilScenery/>
              Photo
            </div>
            <div className="post-share-option_icon" style={{color: "var(--video)"}}>
              <UilPlayCircle/>
              Video
            </div>
            <div className="post-share-option_icon" style={{color: "var(--location)"}}>
              <UilLocationPoint/>
              Location
            </div>
            <div className="post-share-option_icon" style={{color: "var(--schedule)"}}>
              <UilSchedule/>
              Schedule
            </div>
            <button className="button ps-button">
              Share
            </button>
            <div style={{display: 'none'}}>
              <input type="file" name="myImage" ref={imageRef} onChange={onImageChange}/>
            </div>
          </div>
          {image && 
            <div className="preview-img">
              <UilTimes onClick={() => setImage(null)}/>
              <img src={image.image} alt="preview-img"/>
            </div>
          }
        </div>
      </div>
    </Fragment>
  );
};

export default PostShare;

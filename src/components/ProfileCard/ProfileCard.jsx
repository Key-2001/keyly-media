import React from 'react'
import './ProfileCard.scss'
import CoverImg from '../../imgs/cover.jpg'
import ProfileImg from '../../imgs/profileImg.jpg'

const ProfileCard = () => {
  return (
    <div className='profile-card'>
      <div className='profile-card-img'>
        <img src={CoverImg} alt='bg'/>
        <img src={ProfileImg} alt='profile-img'/>
      </div>
      <div className='profile-card-name'>
        <span>Keyly LA</span>
        <span>Fullstack developer</span>
      </div>
      <div className='profile-card-follow_status'>
        <hr/>
        <div>
          <div className='follow'>
            <span>6,890</span>
            <span>Followers</span>
          </div>
          <div className='divide'/>
          <div className='follow'>
            <span>1</span>
            <span>Following</span>
          </div>
        </div>
        <hr/>
      </div>
      <span>
        My profile
      </span>
    </div>
  )
}

export default ProfileCard
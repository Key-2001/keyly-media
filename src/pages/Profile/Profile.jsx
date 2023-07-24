import React from 'react'
import './Profile.scss'
import ProfileLeft from '../../components/ProfileLeft/ProfileLeft'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import PostSide from '../../components/PostSide/PostSide'
import RightSide from '../../components/RightSide/RightSide'
const Profile = () => {
  return (
    <div className='profile-section'>
      <ProfileLeft/>
      <div className='profile-section_center'>
        <ProfileCard/>
        <PostSide/>
      </div>
      <RightSide/>
    </div>
  )
}

export default Profile
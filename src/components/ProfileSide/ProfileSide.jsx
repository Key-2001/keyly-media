import React from 'react'
import './ProfileSide.scss'
import LogoSearch from '../LogoSearch/LogoSearch'
import ProfileCard from '../ProfileCard/ProfileCard'
import FollowersCard from '../FollowersCard/FollowersCard'
const ProfileSide = () => {
  return (
    <div className='profile-side'>
      <LogoSearch/>
      <ProfileCard location="homePage"/>
      <FollowersCard/>
    </div>
  )
}

export default ProfileSide
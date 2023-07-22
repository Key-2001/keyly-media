import React from 'react'
import './FollowersCard.scss'
import { Followers } from '../../Data/FollowersData'

const FollowersCard = () => {
  return (
    <div className='follower-card'>
      <h3>Who is following you</h3>
      {Followers.map((follower, index) => {
        return(
          <div key={index} className="follower-card-info">
            <div>
              <img src={follower.img} alt={`avatar-${index}`} className='follower-card-info_img'/>
              <div className='follower-card-info_name'>
                <span>{follower.name}</span>
                <span>@{follower.username}</span>
              </div>
            </div>
            <button className='button fc-button'>
              Follow
            </button>
          </div>

        )
      })}
    </div>
  )
}

export default FollowersCard
import React, { useState } from 'react'
import './InfoCard.scss'
import {UilPen} from '@iconscout/react-unicons'
import ProfileModal from '../ProfileModal/ProfileModal';
const InfoCard = () => {
  //! Props

  //! State
  const [isModalOpen, setIsModalOpen] = useState(false);
  //! Function

  //! Effect

  //! Render
  return (
    <div className='info-card-section'>
      <div className='info-card-section_head'>
        <h4>Your Info</h4>
        <div>
          <UilPen width="2rem" height="1.2rem" onClick={() => setIsModalOpen(true)}/>
          <ProfileModal isOpen={isModalOpen} setIsOpen={setIsModalOpen}/>
        </div>
      </div>
      <div className='info-card-section_info'>
        <span><b>Status </b></span>
        <span>in Relationship</span>
      </div>
      <div className='info-card-section_info'>
        <span><b>Lives in </b></span>
        <span>HaTay</span>
      </div>
      <div className='info-card-section_info'>
        <span><b>Works at </b></span>
        <span>Fordeer</span>
      </div>
      <button className='button logout-btn'>Logout</button>
    </div>
  )
}

export default InfoCard
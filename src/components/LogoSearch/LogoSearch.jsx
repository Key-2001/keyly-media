import React from 'react'
import './LogoSearch.scss'
import LogoImg from '../../imgs/logo.png'
import {UilSearch} from '@iconscout/react-unicons'

const LogoSearch = () => {
  return (
    <div className='logo-search'>
      <img src={LogoImg} alt='logo'/>
      <div className='search'>
        <input type='text' placeholder='#Explore'/>
        <div className='s-icon'>
          <UilSearch/>
        </div>
      </div>
    </div>
  )
}

export default LogoSearch
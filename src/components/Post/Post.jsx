import React from 'react'
import './Post.scss'
import CommentSvg from '../../imgs/comment.png'
import ShareSvg from '../../imgs/share.png'
import HeartSvg from '../../imgs/like.png'
import NotLikeSvg from '../../imgs/notlike.png'
import { useSelector } from 'react-redux'

const Post = (props) => {
  const {user} = useSelector((state) => state.authReducer.authData);
  //! Props
  const {data} = props;
  //! Render
  return (
    <div className='post-section'>
      <img src={data.image ? import.meta.env.VITE_REACT_APP_PUBLIC_FOLDER + data.image : ''}/>
      <div className='post-section-react'>
        <img src={data.liked ? HeartSvg : NotLikeSvg} alt=""/>
        <img src={CommentSvg} alt=""/>
        <img src={ShareSvg} alt=""/>
      </div>
      <span>{data.likes} likes</span>
      <div className='post-section-detail'>
        <span><b>{data.name}</b></span> 
        <span> {data.desc}</span>
      </div>
    </div>
  )
}

export default Post
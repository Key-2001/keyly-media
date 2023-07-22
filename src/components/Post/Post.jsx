import React from 'react'
import './Post.scss'
import CommentSvg from '../../imgs/comment.png'
import ShareSvg from '../../imgs/share.png'
import HeartSvg from '../../imgs/like.png'
import NotLikeSvg from '../../imgs/notlike.png'

const Post = (props) => {
  //! Props
  const {data} = props;
  //! Render
  return (
    <div className='post-section'>
      <img src={data.img} alt='img-demo'/>
      <div className='post-section-react'>
        <img src={data.liked ? HeartSvg : NotLikeSvg} alt=""/>
        <img src={CommentSvg} alt=""/>
        <img src={ShareSvg} alt=""/>
      </div>
      <span>{data.likes} likes</span>
      <div className='post-section-detail'>
        <span><b>{data.name}</b></span> 
        <span>{data.desc}</span>
      </div>
    </div>
  )
}

export default Post
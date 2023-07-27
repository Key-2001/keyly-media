import React, { useCallback, useState } from 'react'
import './Post.scss'
import CommentSvg from '../../imgs/comment.png'
import ShareSvg from '../../imgs/share.png'
import HeartSvg from '../../imgs/like.png'
import NotLikeSvg from '../../imgs/notlike.png'
import { useSelector } from 'react-redux'
import { likePost } from '../../api/PostRequest'

const Post = (props) => {
  const {user} = useSelector((state) => state.authReducer.authData);
  //! Props
  const {data} = props;
  //! State
  const [liked, setLiked] = useState(data.likes.includes(user._id))
  const [likes, setLikes] = useState(data.likes.length);
  //! Function
  const handleLike = useCallback(() => {
    setLiked(prev => !prev)
    likePost(data._id, user._id);
    liked ? setLikes((prev) => prev-1) : setLikes((prev) => prev + 1)
  },[liked])
  //! Effect

  //! Render
  return (
    <div className='post-section'>
      <img src={data.image ? import.meta.env.VITE_REACT_APP_PUBLIC_FOLDER + data.image : ''}/>
      <div className='post-section-react'>
        <img src={liked ? HeartSvg : NotLikeSvg} alt="" style={{cursor: 'pointer'}} onClick={handleLike}/>
        <img src={CommentSvg} alt=""/>
        <img src={ShareSvg} alt=""/>
      </div>
      <span>{likes} likes</span>
      <div className='post-section-detail'>
        <span><b>{data.name}</b></span> 
        <span> {data.desc}</span>
      </div>
    </div>
  )
}

export default Post
import React from 'react'
import './Posts.scss'
import {PostsData} from '../../Data/PostsData'
import Post from '../Post/Post'

const Posts = () => {
  return (
    <div className='posts-section'>
      {(PostsData || []).map((post, index) => {
        return <Post key={index} data={post} id={index}/>
      })}
    </div>
  )
}

export default Posts
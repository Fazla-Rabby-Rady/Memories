import { CircularProgress } from '@mui/material';
import React from 'react'

import {useSelector} from 'react-redux'

import Post from './Post/Post'


function Posts({setCurrentId}) {
  const posts = useSelector((state)=> state.posts);
  console.log(posts);
  return (
    // <>
        !posts.length ? <CircularProgress /> : (
          <div className="lg:space-x-8 flex flex-wrap">
            {
              posts.map((post)=>(
                <div className="pb-8" key={post._id}>
                  <Post post={post} setCurrentId={setCurrentId}/>

                </div>
              ))
            }
          </div>
        )
    // </>
  )
}

export default Posts
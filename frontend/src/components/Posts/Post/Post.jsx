import React from 'react'


import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import moment from 'moment'
function Post({post,setCurrentId}) {
  return (
    <>
      <div className="">
        <div className="lg:w-[22rem] sm:w-[20rem] hover:shadow-xl hover:transform border border-black rounded-2xl">
          
          <div className=" relative">
            <img className=' rounded-t-2xl w-full h-[18rem]' src={post.selectedFile}  alt="" /> 
            <p>{post.title}</p>
            {/* title={post.title} */}
            <div className=" flex absolute top-5 right-0 bottom-0 lg:space-x-52 sm:space-x-44 ">
                <div className="">
                  <h3 className=' text-white text-2xl'>{post.creator}</h3>
                  <p className=' text-white text-sm'>{moment(post.createdAt).fromNow()}</p>
                </div>
                <div className=" text-white font-bold lg:pr-3 sm:pr-5">
                  <button onClick={()=> setCurrentId(post._id)}>
                    <MoreHorizIcon />
                  </button>
                </div>
            </div>
          </div>
          <div className="">
            <p className=' text-xl text-stone-600 pt-4 pb-3 pl-8'>{post.tags.map((tag)=>`#${tag}`)}</p>
          </div>
          <div className="">
            <h4>{post.title}</h4>
          </div>
          <div className="">
            <h4 className=' text-2xl font-bold pl-8 pb-4'>{post.message}</h4>
          </div>
          <div className=" flex justify-around items-center text-xl font-semibold pb-4 text-gray-600">
            <button onClick={()=>{}}>
              <ThumbUpOutlinedIcon />
               Like
              {post.likeCount}
            </button>
            <button onClick={()=>{}}>
              <DeleteIcon />
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Post
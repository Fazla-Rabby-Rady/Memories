import React, { useEffect, useState } from 'react';

import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { createPost,updatePost } from '../../actions/posts';

import { useSelector } from 'react-redux';


function Form({currentId,setCurrentId}) {
  const [postData,setPostData]=useState({
    creator:' ', title:' ', message:' ', tags:' ', selectedFile:' '
  });

  const Post = useSelector((state)=> (currentId ? state.posts.find((p)=> p._id===currentId ) : null));

  const dispatch = useDispatch();

  useEffect(()=>{
    if(Post) setPostData(Post);
  },[Post])

  const handleSubmit = (e) => {
    e.preventDefault();
    if(currentId)
    {
      dispatch(updatePost(currentId,postData))
    }
    else 
    {
      dispatch(createPost(postData))
    }
   
  }
  const clear = () => {

  }
  return (
    <>
      <div className=" border border-black lg:w-[24rem] sm:w-[20rem] h-[36rem] rounded-md hover:shadow-xl">
        <form action="" className=' p-6' autoCapitalize='off' onSubmit={handleSubmit}>
            <div className=" space-y-3">
              <h3 className=' text-2xl font-semibold text-center'>Create a Memory</h3>
              <div className=" flex flex-col space-y-2 ">
                <label htmlFor="">Creator:</label>  <input type="text" className=' border border-black rounded-md h-10 pl-3' name='creator' value={postData.creator} onChange={(e)=> setPostData({...postData,creator:e.target.value})}/>
                <label htmlFor="">Title : </label> <input type="text" className=' border border-black rounded-md h-10 pl-3' name='title' value={postData.title} onChange={(e)=>setPostData({...postData,title:e.target.value})}/>
                <label htmlFor="">Message : </label> <input type="text" className=' border border-black rounded-md h-10 pl-3' name='message' value={postData.message} onChange={(e)=>setPostData({...postData,message:e.target.value})}/>
                <label htmlFor="">Tags : </label> <input type="text" className=' border border-black rounded-md h-10 pl-3' name='tags' value={postData.tags} onChange={(e)=>setPostData({...postData,tags:e.target.value})}/>

              </div>
              
              <div className=" pb-3">
                  <FileBase type='file' multiple={false} onDone ={({base64}) => setPostData({...postData,selectedFile:base64})} />
              </div>
              <button className=' w-full h-10 bg-teal-500 text-xl font-bold text-white rounded-md hover:bg-sky-700' type="submit">Submit</button>
              <button className=' w-full h-10 bg-violet-700 text-xl font-bold text-white rounded-md hover:bg-red-700' onClick={clear}>Clear</button>
            </div>
        </form>
      </div>
    </>
  )
}

export default Form
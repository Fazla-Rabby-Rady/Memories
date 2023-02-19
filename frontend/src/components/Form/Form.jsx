import React, { useState } from 'react';

import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { createPost } from '../../actions/posts';
function Form() {
  const [postData,setPostData]=useState({
    creator:' ', title:' ', message:' ', tags:' ', selectedFile:' '
  });
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(postData))
  }
  const clear = () => {

  }
  return (
    <>
      <div className=" ring-2 shadow-xl lg:w-[24rem] sm:w-[20rem] h-[36rem] rounded-md">
        <form action="" className=' p-6' autoCapitalize='off' onSubmit={handleSubmit}>
            <div className=" space-y-3">
              <h3 className=' text-2xl font-semibold text-center'>Create a Memory</h3>
              <div className=" flex flex-col space-y-2 ">
                <label htmlFor="">Creator:</label>  <input type="text" className=' ring-1 rounded-md h-10 pl-3' name='creator' value={postData.creator} onChange={(e)=> setPostData({...postData,creator:e.target.value})}/>
                <label htmlFor="">Title : </label> <input type="text" className=' ring-1 rounded-md h-10 pl-3' name='title' value={postData.title} onChange={(e)=>setPostData({...postData,title:e.target.value})}/>
                <label htmlFor="">Message : </label> <input type="text" className=' ring-1 rounded-md h-10 pl-3' name='message' value={postData.message} onChange={(e)=>setPostData({...postData,message:e.target.value})}/>
                <label htmlFor="">Tags : </label> <input type="text" className=' ring-1 rounded-md h-10 pl-3' name='tags' value={postData.tags} onChange={(e)=>setPostData({...postData,tags:e.target.value})}/>

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
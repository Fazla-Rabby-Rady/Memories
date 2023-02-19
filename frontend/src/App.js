import React, { useEffect } from 'react'
import Form from './components/Form/Form'
import Posts from './components/Posts/Posts'

import memories from './images/memories.png'

import { useDispatch } from 'react-redux'
import { getPosts } from './actions/posts'
function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getPosts());
  },[dispatch]);
  return (
    <>
      <div className=" w-full h-full">
        <div className=" w-[100%] flex justify-center items-center">
            <div className=" w-[70%] flex justify-center items-center bg-white h-20 gap-3 mt-10 rounded-xl shadow-2xl ring-1">
              <h1 className=' text-4xl font-bold'>Memories</h1>
              <img className=' h-12' src={memories} alt="" />
            </div>

        </div>
        <div className=" m-14">
          <div className=" flex justify-between ">
            <div className="">
              <Posts />
            </div>
            <div className=" lg:pr-24 sm:pr-8">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
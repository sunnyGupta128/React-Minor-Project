import React, { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import authService from './appwrite/auth'
import { useDispatch } from 'react-redux'
import { login, logout } from './store/authSlice'
import { Outlet } from 'react-router-dom'
import Footers from './components/Footers/Footers'
import Headers from './components/Headers/Headers'

function App() {
  // console.log(import.meta.env.VITE_APPWRITE_PROJECT_ID);
  const [loading, setLoading]= useState(true)
  const  dispatch= useDispatch();
  useEffect(() => {
    authService.getCurrentUser()
  
    .then((userData)=>{
      console.log(userData);
      if (userData) {
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
      
    }).catch((error)=>{
      console.log(error)
    }).finally(()=>setLoading(false))
  }, [])
  

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className="w-full block">
        <Headers/>
        <main className='pb-8'>
          Todo: <Outlet/> 
        </main>
        <Footers 
        className='w-full sticky mt-10'
        />
      </div>
    </div>
  ): null
}

export default App

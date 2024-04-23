import React, { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import { login, logout } from './store/authSlice'
import authService from './appwrite/auth'
import { Outlet } from 'react-router-dom'
import Footers from './components/Footers/Footers'
import Headers from './components/Headers/Headers'

function App() {
  
  const [loading, setLoading]= useState(true)
  const  dispatch= useDispatch();
  useEffect(() => {
    authService.getCurrentUser()
    .then((userData)=>{
      if (userData) {
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
      
    }).finally(()=>setLoading(false))
  }, [])
  

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className="w-full block">
        <Headers/>
        <main>
          Todo: <Outlet/> 
        </main>
        <Footers/>
      </div>
    </div>
  ): null
}

export default App

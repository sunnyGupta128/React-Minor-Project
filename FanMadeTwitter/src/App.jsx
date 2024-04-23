import React, { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import { login, logout } from './store/authSlice'
import authService from './appwrite/auth'


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
      
    }).finally(()=>{
      setLoading(false)
    
    })
  }, [third])
  

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>hello</div>
  ): null
}

export default App

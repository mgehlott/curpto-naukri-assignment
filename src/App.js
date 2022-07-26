import React from 'react'
import Home from './components/Home'
import Mainimage from './components/Mainimage'

function App() {
  return <div className='h-full flex'>
    <Mainimage />
    <div className='font-Inter w-3/5 px-16 h-screen'>
       <Home/>      
    </div>
  </div>
}

export default App

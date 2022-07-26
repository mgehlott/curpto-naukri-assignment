import { click } from '@testing-library/user-event/dist/click'
import React, { useState } from 'react'
import BankVerficaton from './components/Bank-verification'
import Home from './components/Home'
import Mainimage from './components/Mainimage'
import Register from './components/Register'
import Residency from './components/Residency'

function App() {
  const [page,setPage] = useState(0);
  const nextPageHandler = (page) => {

    setPage(pre => {
      if (pre < 3) {
        return pre + 1;
      }
      else {
        return pre;
      }
    });
  }
  const prevPageHandler = (page) => {
    setPage(pre => {
      if (pre > 0) {
        return pre - 1;
      } else {
        return pre;
      }
    })
  }


  return <div className='h-full flex'>
    <Mainimage />
    
    <div className='font-Inter w-3/5 px-16 h-screen'>
        { page === 0 && <Home nextPageHandler={nextPageHandler} /> }
        { page === 1 && <Register nextPageHandler={nextPageHandler} prevPageHandler={prevPageHandler} /> }
        { page === 2 && <Residency nextPageHandler={nextPageHandler} prevPageHandler={prevPageHandler} /> }
        {page === 3 && <BankVerficaton prevPageHandler={prevPageHandler} />}
    
    </div>
  
  </div>
}

export default App

import React from 'react'
import { IoChevronBack } from 'react-icons/io5';

function Header({step,text,prevPageHandler}) {
  return (
    <div className='pt-8 flex justify-between text-appGray'> 
    <p className='text-sm font-bold flex items-center' onClick={prevPageHandler}><IoChevronBack className='mr-3' /> Back</p>
    <div className='flex flex-col'>
              <p className='text-xs ml-9 '>{`STEP 0${step}/03` }</p>
              <p className='text-sm font-bold'>{ text}</p>
    </div>
</div>
  )
}

export default Header

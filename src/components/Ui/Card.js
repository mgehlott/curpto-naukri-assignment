import React from 'react'

function Card({children,onClick}) {
  return (
    <div onClick={onClick}  className=' shadow-md h-24  flex items-center justify-around px-5 hover:bg-lightBlue py-3 w-[410px] mt-9 hover:rounded-md hover:border-solid hover:border-2 hover:border-appBlue '>
      {children}
    </div>
  )
}

export default Card

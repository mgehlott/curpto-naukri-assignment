import React from 'react'

function Title({title,para}) {
  return (
    <div >
          <p className='text-black text-2xl  font-extrabold '>{title }</p>
    <p className='w-[320px] text-appGray mt-2 text-sm'>For the purpose of industry regulation, your details are required.</p>
</div>
  )
}

export default Title

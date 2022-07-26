import React, { useState } from 'react'

function Textfield({ type, name, label, placeholder, className, inputChangeHanlder }) {
  
  const [value, setValue] = useState("");
  const valueChangeHandler = (e) => {
    // checkValid(value.trim());
    setValue(e.target.value);
    console.log('b ', value);
    if (name === 'bankVerficationNumber') {
      
      inputChangeHanlder(value.trim());
    }
  }
  return (
    <>
      
          <label htmlFor={ label } className={`form-label inline-block text-sm  mb-1 text-gray-700 ${className}`}>{label }</label>
      <input type={ type } name={ name }
        value={value}
        onChange={valueChangeHandler}
        className="form-control
        block
        w-full
        px-2
        py-3
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        placeholder:text-sm
        focus:text-gray-700
         focus:bg-white
          focus:border-appBlue
           focus:outline-none" id={ name }
              aria-describedby="emailHelp" placeholder={ placeholder} />
    </>
  )
}

export default Textfield

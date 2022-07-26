import React from 'react'

function Button({ children, className }) {
  const classes = `"
  w-full
  px-6
  py-4
  bg-blue-600
  text-white
  mr-5
  font-medium
  text-xs
  leading-tight
  uppercase
  rounded
  shadow-md
  hover:bg-blue-700 hover:shadow-lg
  focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
  active:bg-blue-800 active:shadow-lg
  transition
  duration-150
  ease-in-out" ${className}`
  return (
    <button type="submit" className={classes}>{ children }</button>
  )
}

export default Button

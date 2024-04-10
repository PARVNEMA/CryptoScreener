import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav className='w-[60%] md:mt-28 flex justify-around align-middle border border-cyan rounded-lg h-12 mt-28'>

  <NavLink className={
    ({isActive})=>{
   return `w-full text-base text-center font font-nunito m-2.5
   ${isActive ? 'bg-cyan text-gray-300':' bg-gray-200 text-gray-100 hover:text-cyan active:bg-cyan active:text-gray-300'}
   border-0 cursor-pointer capitalize rounded font-semibold`
    }
  } to="/" end>
  Crypto
  </NavLink>
  <NavLink className={
    ({isActive})=>{
   return `w-full text-base text-center font font-nunito m-2.5
   ${isActive ?
    'bg-cyan text-gray-300':'bg-gray-200 text-gray-100 hover:text-cyan active:bg-cyan active:text-gray-300'}
   border-0 cursor-pointer capitalize rounded font-semibold`
    }
  } to='/trending'>
  Trending
  </NavLink>
  <NavLink className={
    ({isActive})=>{
   return `w-full text-base text-center font font-nunito m-2.5
   ${isActive ? 'bg-cyan text-gray-300':' bg-gray-200 text-gray-100 hover:text-cyan active:bg-cyan active:text-gray-300'}
   border-0 cursor-pointer capitalize rounded font-semibold`
    }
  } to="/saved">
  Saved
  </NavLink>
    </nav>
  )
}

export default Navigation
import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../firebase'

export const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Dipo Chat</span>
      <div className="user">
        <img src="https://i0.wp.com/media.ghgossip.com/wp-content/uploads/2022/02/14140914/john-dumelo-2.jpeg" alt="" />
        <span>John</span>
        <button onClick={()=>signOut(auth)}>logout</button>
      </div>
    </div>
  )
}

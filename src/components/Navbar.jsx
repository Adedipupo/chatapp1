import React from 'react'

export const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Dipo Chat</span>
      <div className="user">
        <img src="https://i0.wp.com/media.ghgossip.com/wp-content/uploads/2022/02/14140914/john-dumelo-2.jpeg" alt="" />
        <span>John</span>
        <button>logout</button>
      </div>
    </div>
  )
}

import React from 'react'

export const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="find a user"/>
      </div>
      <div className="userChat">
        <img src="https://i0.wp.com/media.ghgossip.com/wp-content/uploads/2022/02/14140914/john-dumelo-2.jpeg" />
        <div className="userChatInfo">
          <span>Jane</span>
        </div>
      </div>
    </div>
  )
}

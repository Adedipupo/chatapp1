import React from 'react'
import Attach from "../images/attach.png"
import Img from "../images/img.png"


export const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Type a message" />
      <div className="send">
        <img src={Attach} alt="" />
        <input type="file" style={{display: "none"}} id="file" />
        <label htmlFor="file">
        <img src={Img} alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

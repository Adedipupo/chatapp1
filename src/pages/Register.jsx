import React, { useState } from 'react';
import Add from '../images/addAvatar.png';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Register = () => {
  const [err,setError] = useState(false);
  const handleSubmit = async(e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
 
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password)
    } catch (error) {
      setError(true)
    }

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">myChat</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="display name" />
            <input type="email" placeholder="email" />
            <input type="password" placeholder="password " />
            <input style={{display: 'none'}} type="file" id='file'/>
            <label htmlFor="file">
                <img src={Add} alt="true"/>
                <span>Add an avatar</span>
            </label>
            {err && <span>Something went wrong</span>}
            <button>Sign up</button>
        </form>
        <p>Already have an account? Login</p>
      </div>
    </div>
  )
}
}

export default Register;

import React from 'react';
import Add from '../images/addAvatar.png';

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">myChat</span>
        <span className="title">Login</span>
        <form>
            <input type="email" placeholder="email" />
            <input type="password" placeholder="password " />
            <button>Log in</button>
        </form>
        <p>You do not have an account? Sign up</p>
      </div>
    </div>
  )
}

export default Login;
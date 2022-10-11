import React from 'react'

const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">myChat</span>
        <span className="title">Register</span>
        <form>
            <input type="text" className="display name" />
            <input type="email" className="email" />
            <input type="password" className="password " />
            <input type="file" className="" />
            <button>Sign up</button>
        </form>
        <p>You do not have an account? Login</p>
      </div>
    </div>
  )
}

export default Register;

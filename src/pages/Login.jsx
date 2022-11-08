import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';

const Login = () => {

  const [err,setErr] = useState(false);
  const [loading,setLoading] = useState(false);
  const navigate = useNavigate();


  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      setLoading(true);
       await signInWithEmailAndPassword(auth,email,password); 
        setLoading(false);  
       navigate("/")
    } catch (error) {
      setErr(true)
      setLoading(false);
    }
  }

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">myChat</span>
        <span className="title">Login</span>
        {err && <span style={{color: 'red'}}> </span>}
        <form onSubmit={handleLogin}>
            <input type="email" placeholder="email" />
            <input type="password" placeholder="password " />
            <button>{loading ? "Loading..." : "Log in"}</button>
        </form>
        <p>You do not have an account? <Link to="/signup">Sign up</Link></p>
      </div>
    </div>
  )
  }

export default Login;
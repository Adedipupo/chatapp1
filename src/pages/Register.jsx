import React, { useState } from "react";
import Add from "../images/addAvatar.png";
import { createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth, storage,db } from "../firebase";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [err, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      setLoading(true);
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          setError(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            })
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "userChats", res.user.uid), {});
            setLoading(false);
            navigate("/");
          });
        }
      );
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  }
    return (
      <div className="formContainer">
        <div className="formWrapper">
          <span className="logo">myChat</span>
          <span className="title">Register</span>
          {err && <span style={{color: 'red'}}>Something went wrong</span>}
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="display name" />
            <input type="email" placeholder="email" />
            <input type="password" placeholder="password " />
            <input style={{ display: "none" }} type="file" id="file" />
            <label htmlFor="file">
              <img src={Add} alt="true" />
              <span>Add an avatar</span>
            </label>
            <button>{loading ? "Loading..." : "Sign up"}</button>
          </form>
          <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
      </div>
    );
  };


export default Register;

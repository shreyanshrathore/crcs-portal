import React, { useState } from "react";
import Add from "../images/addAvatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "@firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "@firebase/storage";
import { doc, setDoc } from "@firebase/firestore";
import { useNavigate, Link } from "react-router-dom";
import './register.css'
import Scroller  from './Scroller'
import {Dist} from './Scroller'
import Dis from './Dis'





const Register = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            //create empty user chats on firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          } catch (err) {
            console.log(err);
            setErr(true);
            setLoading(false);
          }
        });
      });
    } catch (err) {
      setErr(true);
      setLoading(false);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">MSCS </span>
        <span className="title">Registeration Portal</span>
        <form onSubmit={handleSubmit} className="forms">
          <input required type="text" placeholder="Name" />
          <input required type="email" placeholder="email" />
          <input required type="password" placeholder="Password" />
          <input required style={{ display: "none" }} type="file" id="file" />
          <Scroller/>
          <Dis />
          <input required type="text" placeholder="Type Adress" />
          <input required type="text" placeholder="Pan No." />
          <input required type="text" placeholder="Tan No." />
          <input required type="number" placeholder="Mob No." />
          <input required type="number" placeholder="Service Tax No." />
          <input required type="text" placeholder="Name" />

          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Upload Your Image</span>
          </label>
          {loading && "Uploading and compressing the image, please wait..."}
          {err && <span>Something went wrong</span>}
          <button disabled={loading}>Sign up</button>
        </form>
        <p>
          You do have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
import React, { useState } from "react";
import "./UserLogin.css";
import { useNavigate } from "react-router-dom";
import { auth } from "/Users/dheerajtn/react/hostel-management/client/src/Firebase/Firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UserLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Errormsg, setErrorMsg] = useState("");

  const signIn = (e) => {
    const regexMail =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const passwordformat = /^[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    e.preventDefault();
    if (email === "" || password === "") {
      toast.warning("Enter email / password", {
        closeOnClick: true,
        autoClose: 2000,
      });
    } else if (!email.match(regexMail)) {
      toast.warning("Invalid email id", {
        closeOnClick: true,
        autoClose: 2000,
      });
    } else if (!password.match(passwordformat)) {
      setErrorMsg(
        "Password should contain atlest 8 charecters with captital letter, small letters and special charecter."
      );
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((userCred) => {
        console.log(`logged in as ${userCred.user}`);
        if (auth) {
          setEmail("");
          setPassword("");
          navigate("/");
        }
        console.log(userCred);
        // sessionStorage.setItem("user", JSON.stringify(userCred.user));
      })
      .catch((err) => {
        alert("Invalid password");
        navigate("/user_login");
        console.log(err.message);
      });
  };
  return (
    <div className="login">
      <div className="login__gradient" />
      <div className="login__body">
        <form>
          <h1>Sign In</h1>
          <input
            type="email"
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button onClick={signIn}>Login</button>
          <h4>
            <span className="new">New to hostel? </span>
            <span
              className="register"
              onClick={() => navigate("/user_register")}
            >
              Register Yourself
            </span>
          </h4>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default UserLogin;

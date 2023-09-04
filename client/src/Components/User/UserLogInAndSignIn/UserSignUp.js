import React, { useEffect, useState } from "react";
import "./UserSignUp.css";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../../Firebase/Firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  collection,
  query,
  onSnapshot,
  addDoc,
  setDoc,
  doc,
} from "firebase/firestore";
import { updateProfile } from "firebase/auth";
function UserSignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [usn, setUSN] = useState("");
  const [sem, setSem] = useState("");
  const [branch, setBranch] = useState("");
  const [pic, setPic] = useState("");
  const regexMail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const passwordformat = /^[a-zA-Z0-9!@#$%^&*]{8,16}$/;
  const signUp = async (e) => {
    e.preventDefault();
    if (
      name === "" ||
      email === "" ||
      password === "" ||
      confirmPass === "" ||
      phone === "" ||
      usn === "" ||
      sem === "" ||
      branch === ""
    ) {
      toast.warning("Enter all the fields");
      return;
    } else if (!email.match(regexMail)) {
      toast.warning("Invalid email id");
      return;
    } else if (phone < 6000000000 || phone > 99999999999) {
      toast.warning("Invalid phone number");
      return;
    } else if (!password.match(passwordformat)) {
      toast.warning(
        "Password should contain atlest 8 charecters with captital letter, small letters and special charecter."
      );
      return;
    } else if (password !== confirmPass) {
      toast.warning("Password not matching");
      return;
    }
    await createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCred) => {
        console.log("user: ", userCred);
        if (auth) {
          navigate("/");

          const userAuthRef = doc(db, "Users", userCred.user.uid);
          const userName = userCred.user;
          await updateProfile(userName, {
            displayName: name,
            // photoURL: imgUrl
          });
          await setDoc(userAuthRef, {
            username: name,
            mail: email,
            phone: phone,
            profile: pic,
            sem: sem,
            usn: usn,
            branch: branch,
          });
          sessionStorage.setItem("user", JSON.stringify(userCred));
        }
      })

      .catch((err) => {
        console.log(err.message);
        toast.error(err.message);
      });
  };

  return (
    <div className="login">
      <div className="login__gradient">
        <div className="regsiter__body">
          <form>
            <h1>Regsiter/SignUp</h1>
            <input
              type="text"
              placeholder="Full Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <input
              type="number"
              placeholder="Phone"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
            <input
              type="text"
              placeholder="Picture of yours"
              onChange={(e) => setPic(e.target.value)}
              value={pic}
            />
            <input
              type="text"
              placeholder="USN"
              onChange={(e) => setUSN(e.target.value)}
              value={usn}
            />
            <input
              type="text"
              placeholder="Semester of study"
              onChange={(e) => setSem(e.target.value)}
              value={sem}
            />
            <select onChange={(e) => setBranch(e.target.value)}>
              <option>Branch</option>
              <option value={"CSE"}>CSE</option>
              <option value={"ISE"}>ISE</option>
              <option value={"ECE"}>ECE</option>
              <option value={"EEE"}>EEE</option>
              <option value={"ME"}>Mech</option>
              <option value={"AI/ML"}>AI/ML</option>
            </select>
            <input
              type="email"
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <input
              type="password"
              placeholder="Re-enter Paasword"
              onChange={(e) => setConfirmPass(e.target.value)}
              value={confirmPass}
            />
            <button onClick={signUp}>Sign Up</button>
            <h4>
              <span className="new">Already a member ? </span>
              <span
                className="loginPage"
                onClick={() => navigate("/user_login")}
                style={{ cursor: "pointer" }}
              >
                Sign In
              </span>
            </h4>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default UserSignUp;

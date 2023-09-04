import React, { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { collection, doc, getDoc, onSnapshot, query } from "firebase/firestore";
import "./Profile.css";
import { auth, db } from "../../../Firebase/Firebase";
import { Avatar } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useStateValue } from "../../../ContextAPI/UsersAuthContext";

function Profile() {
  const [{ user }, dispatch] = useStateValue();
  const navigate = useNavigate();
  const [data, setData] = useState({ fees: "", due: "" });
  const [users, setUser] = useState({
    email: "",
    uid: "",
    displayName: "",
    branch: "",
    usn: "",
    profile: "",
  });
  useEffect(() => {
    const details = async () => {
      const getDetails = (await getDoc(doc(db, "Users", user?.uid))).data();
      console.log(getDetails);
      console.log("user details 🙂 ", user.uid);
      setUser(getDetails);
    };

    return () => {
      details();
    };
    //eslint-disable-next-line
  }, []);
  useEffect(() => {
    const unsubs = async () => {
      // const userDet = JSON.parse(sessionStorage.getItem("user"));
      const paymentData = (await getDoc(doc(db, "Payments", user.uid))).data();
      console.log("Payment🧑‍💻 : ", data);
      setData(paymentData);
    };
    return () => {
      unsubs();
    };
  }, []);
  return (
    <>
      <Navbar />
      <div className="profileScreen">
        <div className="details">
          <div className="account__icon">
            <Avatar src={users.profile} alt="" sx={{ width: 65, height: 65 }} />
          </div>
          <div className="db__details">
            <span>
              <h3>EmailId: </h3>
              <p>{users.mail}</p>
            </span>
            <span>
              <h3>User name : </h3>
              <p>{users.username}</p>
            </span>
            <span>
              <h3>Branch : </h3>
              <p>{users.branch}</p>
            </span>
            <span>
              <h3>USN : </h3>
              <p>{users.usn}</p>
            </span>
            <span>
              <h3>Total fee : </h3>
              <p>₹{data.fees}</p>
            </span>
            <span>
              <h3>Payment Due : </h3>
              <p>₹{data.due}</p>
            </span>
            <span>
              <h3>Paid : </h3>
              <p>₹{data.paid}</p>
            </span>
            {data.due === 0 ? (
              <h1>No Dues</h1>
            ) : (
              <button type="submit" onClick={() => navigate("/payment")}>
                Pay {data.due}
              </button>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Profile;

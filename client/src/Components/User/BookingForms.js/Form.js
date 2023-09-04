import React, { useEffect, useState } from "react";
import "./Form.css";
import { auth, db } from "../../../Firebase/Firebase";
import {
  addDoc,
  collection,
  doc,
  onSnapshot,
  query,
  setDoc,
} from "firebase/firestore";
import Navbar from "../Navbar/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useStateValue } from "../../../ContextAPI/UsersAuthContext";

function Home() {
  const [{ user }, dispatch] = useStateValue();
  const [exists, setExists] = useState(false);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [rooms, setRooms] = useState("");
  const bookingRef = collection(db, "Booking");
  const regexMail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  useEffect(() => {
    const q = query(bookingRef);
    onSnapshot(q, (snapshot) => {
      snapshot.forEach((doc) => {
        if (doc.data().email === user?.email) setExists(true);
      });
    });
    //eslint-disable-next-line
  }, []);
  const submitAppl = async (e) => {
    e.preventDefault();
    if (
      fname === "" ||
      lname === "" ||
      address === "" ||
      city === "" ||
      state === "" ||
      pincode === "" ||
      email === "" ||
      phone === "" ||
      rooms === ""
    ) {
      toast.warning("Enter all the fields", {
        closeOnClick: true,
        autoClose: 2000,
      });
      return;
    } else if (!email.match(regexMail)) {
      toast.warning("Invalid email id", {
        closeOnClick: true,
        autoClose: 2000,
      });
      return;
    }
    const bookingRef = doc(db, "Booking", auth.currentUser.uid);
    await setDoc(bookingRef, {
      fname: fname,
      lname: lname,
      address: address,
      city: city,
      state: state,
      pincode: parseInt(pincode),
      email: email,
      phone_no: parseInt(phone),
      roomType: parseInt(rooms),
    });
    toast.success("Apllication Submitted sucessfully", {
      autoClose: 1000,
      closeOnClick: true,
    });
    setFname("");
    setLname("");
    setAddress("");
    setCity("");
    setState("");
    setPincode("");
    setEmail("");
    setPhone("");
    setRooms("");
  };
  return (
    <>
      <div className="MainDisplayContainer">
        <Navbar />
        {!exists ? (
          <div className="register_form_container">
            <div className="req_form">
              <div className="form__header">
                <img
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhostelmanagement.com%2Fsites%2Fall%2Fthemes%2Fhostel-management%2Fimg%2Fhostel-management-l.png&f=1&nofb=1&ipt=38fbf2ca41ca27ab6e84e2d563b2d542e6a482bae5bb76e6e650a96e40af81cf&ipo=images"
                  alt="logo"
                />
                <label>Room Booking Application</label>
              </div>
              <div className="form__body">
                <div className="form_name">
                  <label>Name</label>
                  <div className="form_inner_name">
                    <input
                      type="text"
                      name="fname"
                      placeholder="Enter your first name"
                      onChange={(e) => setFname(e.target.value)}
                      value={fname}
                    />
                    <input
                      type="text"
                      name="lname"
                      placeholder="Enter you last name"
                      onChange={(e) => setLname(e.target.value)}
                      value={lname}
                    />
                  </div>
                </div>

                <div className="form_address">
                  <label for="address">Address</label>
                  <div className="form_inner_address">
                    <input
                      type="text"
                      name="address"
                      placeholder="Enter your address"
                      onChange={(e) => setAddress(e.target.value)}
                      value={address}
                    />
                    <input
                      type="text"
                      name="city"
                      placeholder="Enter your city"
                      onChange={(e) => setCity(e.target.value)}
                      value={city}
                    />
                    <input
                      type="text"
                      name="state"
                      placeholder="Enter your state"
                      onChange={(e) => setState(e.target.value)}
                      value={state}
                    />
                    <input
                      type="text"
                      name="pincode"
                      placeholder="Enter your pincode"
                      onChange={(e) => setPincode(e.target.value)}
                      value={pincode}
                    />
                  </div>
                </div>
                <div className="form_contacts">
                  <div className="form_inner_contact">
                    <label for="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    />
                  </div>
                  <div className="form_inner_contact">
                    <label>Phone</label>
                    <input
                      type="text"
                      name="phone"
                      placeholder="Enter your phone number"
                      onChange={(e) => setPhone(e.target.value)}
                      value={phone}
                    />
                  </div>
                </div>
                <div className="form_rooms">
                  <label for="type">Room Type</label>
                  <select
                    name="type"
                    id="type"
                    onChange={(e) => setRooms(e.target.value)}
                    value={rooms}
                  >
                    <option>Type</option>
                    <option value="2">2 bed sharing - ₹8000/mo</option>
                    <option value="3">3 bed sharing - ₹7000/mo</option>
                    <option value="4">4 bed sharing - ₹6000/mo</option>
                    <option value="6">6 bed sharing - ₹5000/mo</option>
                  </select>
                </div>
                <div className="submit" onClick={submitAppl}>
                  <button>Submit</button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <h1 style={{ textAlign: "center", marginTop: "30px" }}>
            Form Already Submitted ! Wait for Admin's Response
          </h1>
        )}
        <ToastContainer />
      </div>
    </>
  );
}

export default Home;

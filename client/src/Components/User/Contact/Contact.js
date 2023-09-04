import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./Contact.css";
import Footer from "../Footer/Footer";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../Firebase/Firebase";
function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [msg, setMsg] = useState("");
  const contactRef = collection(db, "Contact");
  const handleSubmit = (e) => {
    e.preventDefault();
    addDoc(contactRef, {
      name: name,
      email: email,
      subject: subject,
      message: msg,
    });
    setName("");
    setEmail("");
    setSubject("");
    setMsg("");
    alert("submitted sucessfully");
  };
  return (
    <>
      <Navbar />
      <div className="contact">
        <div className="contact__left">
          <h1>Contact US</h1>
          <form>
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              type="text"
              placeholder="Subject"
              onChange={(e) => setSubject(e.target.value)}
              value={subject}
            />
            <textarea
              placeholder="Message"
              onChange={(e) => setMsg(e.target.value)}
              value={msg}
            />
            <button onClick={handleSubmit}>Submit</button>
          </form>
        </div>
        <div className="contact__right">
          <img
            src="https://media.istockphoto.com/id/1173382057/vector/room-booking-flat-vector-illustrations-set.jpg?s=612x612&w=0&k=20&c=BPxcT34jBAalXGKeXqIgocRHvxDeONS1FDu4au1zKvo="
            alt=""
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;

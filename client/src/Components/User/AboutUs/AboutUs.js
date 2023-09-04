import React from "react";
import "./AboutUs.css";
import Navbar from "../Navbar/Navbar";
import DoneIcon from "@mui/icons-material/Done";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Footer from "../Footer/Footer";
function AboutUs() {
  return (
    <>
      <Navbar />
      <div className="aboutUS">
        <div className="page1">
          <div className="page1__left">
            <h1>Welcome User</h1>
            <p>
              Welcome to our hostel! We are thrilled to have you as our guest.
              Our goal is to provide you with a comfortable and enjoyable stay
              during your time with us. Our friendly staff is here to assist you
              with any needs or inquiries you may have. Explore our
              well-appointed rooms and common areas designed to cater to your
              relaxation and socialization needs. Take advantage of our
              amenities, including a cozy lounge, fully equipped kitchen, and
              complimentary Wi-Fi. Whether you're traveling solo or with a
              group, we aim to create a welcoming and inclusive environment
              where you can create lasting memories. Enjoy your stay at our
              hostel!
            </p>
            <h3>
              <DoneIcon />
              Clean,Spacious rooms
            </h3>
            <h3>
              <DoneIcon />
              Friendly staff
            </h3>
            <h3>
              <DoneIcon />
              Relaxing Environment
            </h3>
            <h3>
              <DoneIcon />
              Access to wifi
            </h3>
          </div>
          <div className="page1__right">
            <img
              src="https://c8.alamy.com/comp/2C87G8R/hostel-services-concept-vector-illustration-2C87G8R.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="page2__about">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Hostel_Dormitory.jpg"
            alt=""
          />
          <div className="page2__left">
            <h1>Check Availability of Rooms</h1>
            <form>
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Type of room" />
            </form>
            <button>Check</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutUs;

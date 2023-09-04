import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./Announcements.css";
import Footer from "../Footer/Footer";
import { Fade } from "react-reveal";
import SendIcon from "@mui/icons-material/Send";
import { Icon } from "@mui/material";
function Announcements() {
  const [clicked, setClicked] = useState(false);
  const [reply, setreply] = useState("");
  const handleClick = () => {
    setClicked(true);
  };
  const sendReply = (e) => {
    e.preventDefault();
    setClicked(false);
    setreply("");
  };
  return (
    <>
      <Navbar />
      <div className="announcements">
        <div className="fees">
          <h1>Hostel Fees</h1>
          <div className="about__fees">
            <p>
              Hostel fees for the academic year 2021-22 is Rs. 1,00,000/- per
              annum. The fees is payable in two installments of Rs. 50,000/-
              each. The first installment is payable at the time of admission
              and the second installment is payable in the month of January
              2022.
            </p>
            <marquee scrollamount="5">
              Last day to pay the fee is 15/08/2023 . Don't delay the payment
              and don't wait for the last day . If failed due to sime reasons
              extra charges are applicable!!
            </marquee>
            <button>Pay now</button>
          </div>
        </div>
        <div className="latest">
          <h1>Lastest news and announcements</h1>

          <div className="latest__news">
            <Fade left>
              <div className="news">
                <h3>Hostel food will be closed for 2 days</h3>
                <p>
                  Hostel's food will be closed for 2 days due to some
                  maintainance work in kitchen. Sorry for the inconvenience
                  caused.
                </p>
                <span>
                  6th August -7th August
                  <br />
                </span>
                <a href="#">Read more...</a>
              </div>
            </Fade>
            <Fade right>
              <div className="news">
                <h3>Hostel power cut</h3>
                <p>
                  Hostel's power will be cut today from 6pm - 9pm due to some
                  wiring issues. Sorry for the inconvenience caused.
                </p>
                <span>
                  10th August 6pm-9pm
                  <br />
                </span>
                <a href="#">Read more...</a>
              </div>
            </Fade>
            <Fade left>
              <div className="news">
                <h3>College remains closed</h3>
                <p>
                  All the classes are dismisssed for tomorrow on ocassion of xyz
                  festival.
                </p>
                <span>
                  11th August
                  <br />
                </span>
                <a href="#">Read more...</a>
              </div>
            </Fade>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Announcements;

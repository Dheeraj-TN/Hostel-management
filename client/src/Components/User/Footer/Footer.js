import React from "react";
import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import CallIcon from "@mui/icons-material/Call";
function Footer() {
  return (
    <>
      <div className="mainFooter">
        <div className="footer">
          <div className="footer__left">
            <h3>Accomodation</h3>
            <p>Pack your bags</p>
            <p>Book rooms</p>
            <p>Stay safe in hostel</p>
            <p>All articles</p>
          </div>
          <div className="footer__middle">
            <h3>Explore</h3>
            <p>All types of rooms</p>
            <p>How we work</p>
            <p>Help</p>
            <p>SignUp</p>
          </div>
          <div className="footer__right">
            <h3>Quick Links</h3>
            <p>About us</p>
            <p>Blogs</p>
            <p>Booking guarentee</p>
            <p>Terms and conditions</p>
          </div>
        </div>
        {/* <hr className="hrr" /> */}
        <div className="footer__bottom">
          <div className="footer__bottomLeft">
            <InstagramIcon />
            <FacebookIcon />
            <WhatsAppIcon />
            <CallIcon />
          </div>
          <div className="footer__bottomCenter">
            <p>About us · Privacy Policy</p>
            <p>Terms & conditions · Contact</p>
          </div>
          <div className="footer__bottomRight"></div>
        </div>
        <div className="copyRight">
          <p>© 2023 hostelManagement. All rights reserved.</p>
        </div>
      </div>
    </>
  );
}

export default Footer;

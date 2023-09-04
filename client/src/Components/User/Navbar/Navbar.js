import React, { useEffect, useState } from "react";
import "./Navbar.css";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Fade } from "react-reveal";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import { auth, db } from "../../../Firebase/Firebase";
import { Avatar } from "@mui/material";
import { collection, onSnapshot, query } from "firebase/firestore";
import { useStateValue } from "../../../ContextAPI/UsersAuthContext";

function Navbar() {
  const [{ user }, dispatch] = useStateValue();
  const navigate = useNavigate();
  const [burgerStatus, setBurgerStatus] = useState(false);
  const Logout = () => {
    auth.signOut();
    sessionStorage.removeItem("user");
    navigate("/user_login");
  };
  const [pic, setPic] = useState(null);
  const dpRef = collection(db, "Users");
  useEffect(() => {
    const q = query(dpRef);
    onSnapshot(q, (snaphot) => {
      snaphot.forEach((doc) => {
        if (doc.data().mail === user?.email) {
          setPic(doc.data().profile);
        }
      });
    });
  });
  // console.log("profile: ", pic);
  //  console.log(auth.currentUser.displayName);
  return (
    <div className="navbar" id="navbar">
      <div className="navbar__left" onClick={() => navigate("/")}>
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhostelmanagement.com%2Fsites%2Fall%2Fthemes%2Fhostel-management%2Fimg%2Fhostel-management-l.png&f=1&nofb=1&ipt=38fbf2ca41ca27ab6e84e2d563b2d542e6a482bae5bb76e6e650a96e40af81cf&ipo=images"
          alt="logo"
        />
      </div>
      <div className="navbar__right">
        <p onClick={() => navigate("/")}>Home</p>
        <p onClick={() => navigate("/pricing")}>Pricing</p>
        <p onClick={() => navigate("/aboutUs")}>About us</p>
        <p onClick={() => navigate("/announcements")}>Announcements</p>
        <p onClick={() => navigate("/contact")}>Contact</p>
        <div
          className="account"
          onClick={() => {
            !auth.currentUser ? navigate("/user_login") : navigate("/profile");
          }}
        >
          <Avatar src={pic} alt={auth.currentUser?.email[0]} />
        </div>
        <div className="logout__icon" onClick={Logout}>
          {auth.currentUser?.email ? <LogoutIcon /> : ""}
        </div>
      </div>

      <div className="hamburger">
        <HeaderRight>
          <Menu onClick={() => setBurgerStatus(true)}>
            <MenuIcon />
          </Menu>
        </HeaderRight>
        <BurgerMenu show={burgerStatus}>
          <CloseMenu>
            <CloseButton onClick={() => setBurgerStatus(false)}>
              <CloseIcon />
            </CloseButton>
          </CloseMenu>
          <li>
            <p>Pricing</p>
          </li>
          <li>
            <p>About us</p>
          </li>
          <li>
            <p>Contact</p>
          </li>
          <li>
            <p>Pricing</p>
          </li>
          <li>
            <p>Account</p>
          </li>
        </BurgerMenu>
      </div>
    </div>
  );
}
const HeaderRight = styled.div`
  padding-right: 20px;
  display: flex;
  cursor: pointer;
  right: 0;
  align-items: center;
`;
const Menu = styled(MenuIcon)`
  font-size: 40px !important;
`;
const BurgerMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background: white;
  width: 200px;
  z-index: 1;
  text-align: left;
  padding: 20px;
  overflow-y: auto;
  list-style: none;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s ease-in;
  li {
    padding: 15px 5px;
    cursor: pointer;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    overflow-y: auto;
    z-index: 1;
  }
  li:hover {
    background-color: #f5f5f5;
    border-radius: 5px;
  }
`;
const CloseButton = styled(CloseIcon)`
  font-size: 30px !important;
  cursor: pointer;
`;
const CloseMenu = styled.div`
  display: flex;
  justify-content: flex-end !important;
`;

export default Navbar;

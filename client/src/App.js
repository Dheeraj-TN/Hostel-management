import React, { useContext, useEffect } from "react";
import "./App.css";
import { Navigate, useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import UserLogin from "./Components/User/UserLogInAndSignIn/UserLogin";
import UserSignIn from "./Components/User/UserLogInAndSignIn/UserSignUp";
import AdminPanel from "./Components/Admin/AdminPanel";
import Navbar from "./Components/User/Navbar/Navbar";
import UserSignUp from "./Components/User/UserLogInAndSignIn/UserSignUp";
import PricingPage from "./Components/User/Pricing/PricingPage";
import Contact from "./Components/User/Contact/Contact";
import AboutUs from "./Components/User/AboutUs/AboutUs";
import Announcements from "./Components/User/Announcements/Announcements";
import Form from "./Components/User/BookingForms.js/Form";
import Profile from "./Components/User/Profile/Profile";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Payment from "./Components/User/Payment/Payment";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useStateValue } from "./ContextAPI/UsersAuthContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase/Firebase";
import FoodMenu from "./Components/User/Pricing/FoodMenu";
const promise = loadStripe(
  "pk_test_51MHzr0SAd63srqsxpFscqJBLsEF42GIQ81uGeQZ9Ou1zq1HXHjxLsKuKVnbQF0IBLqRIqDR0AaTVevib5aLldg0k00SgjughDE"
);
function App() {
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  });
  return (
    <Elements stripe={promise}>
      <div className="App">
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/user_login" element={<UserLogin />} />

            <Route exact path="/user_register" element={<UserSignUp />} />
            <Route exact path="/pricing" element={<PricingPage />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/aboutUs" element={<AboutUs />} />
            <Route exact path="/announcements" element={<Announcements />} />
            <Route exact path="/bookingForm" element={<Form />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/payment" element={<Payment />} />
            <Route exact path="/menu" element={<FoodMenu />} />
            {/*
          <Route exact path="/admin_panel" element={<AdminPanel />} /> */}
          </Routes>
        </Router>
      </div>
      <ToastContainer />
    </Elements>
  );
}

export default App;

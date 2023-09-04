import React, { useEffect, useState } from "react";
import "./Home.css";
import Navbar from "../User/Navbar/Navbar";
import HomePage from "../User/HomePage";
import Footer from "../User/Footer/Footer";
import { HashLoader } from "react-spinners";
import { BarLoader } from "react-spinners";

function Home() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="home">
      {loading ? (
        <div className="loader">
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhostelmanagement.com%2Fsites%2Fall%2Fthemes%2Fhostel-management%2Fimg%2Fhostel-management-l.png&f=1&nofb=1&ipt=38fbf2ca41ca27ab6e84e2d563b2d542e6a482bae5bb76e6e650a96e40af81cf&ipo=images"
            alt=""
          />
          <div className="loaders" style={{ display: "flex", gap: "2rem" }}>
            <BarLoader
              color={"#45CFDD"}
              loading={loading}
              size={20}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        </div>
      ) : (
        <>
          <Navbar />
          <HomePage />
          <Footer />
        </>
      )}
    </div>
  );
}

export default Home;

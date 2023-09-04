import React, { useState, useEffect } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import axios from "./axios";
import { auth, db } from "../../../Firebase/Firebase";
import { addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore";
import "./Payment.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { Fade } from "react-reveal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DotLoader } from "react-spinners";
import { useStateValue } from "../../../ContextAPI/UsersAuthContext";
function Payment() {
  const [{ user }, dispatch] = useStateValue();
  const [fee, setFee] = useState("");
  const [succeeded, setSucceded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);

  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const paymentRef = collection(db, "PaymentsSuccess");
  const [uid, setUid] = useState("");
  const [data, setData] = useState({ fees: "" });
  const [users, setUser] = useState({
    email: "",
    displayName: "",
    uid: "",
    phone: "",
    branch: "",
  });
  useEffect(() => {
    const details = async () => {
      const getDetails = (await getDoc(doc(db, "Users", user.uid))).data();
      console.log(getDetails);
      console.log("user details 🙂 ", user.uid);
      setUid(user.uid);
      setUser(getDetails);
    };

    return () => {
      details();
    };
    //eslint-disable-next-line
  }, []);
  useEffect(() => {
    const unsubs = async () => {
      const paymentData = (await getDoc(doc(db, "Payments", user.uid))).data();
      console.log("Payment🧑‍💻 : ", data);
      setData(paymentData);
    };
    return () => {
      unsubs();
    };
    //eslint-disable-next-line
  }, []);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  //generate the special stripe secret which allows us to charge a customer
  console.log("uid: ", uid);
  const handleSubmit = async (e) => {
    const userDet = JSON.parse(sessionStorage.getItem("user"));
    e.preventDefault();
    setProcessing(true);
    const { clientSecret } = (
      await axios({
        method: "post",
        //stripe expects the total in a currencies subunits
        url: `/payments/create?total=${data.fees * 100}`,
      })
    ).data;
    console.log(clientSecret);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(async ({ paymentIntent }) => {
        const payRef = await addDoc(paymentRef, {
          email: users.mail,
          fees: paymentIntent.amount,
          paymentId: paymentIntent.id,
        })
          .then(() => {
            console.log("added: ", payRef);
          })
          .catch((err) => {
            console.log(err);
          });
        await updateDoc(doc(db, "Payments", user.uid), {
          flag: false,
          due: 0,
          paid: data.fees,
        });
        await updateDoc(doc(db, "AllTenants", user.uid), {
          paid: data.fees,
          due: 0,
        });
        await updateDoc(doc(db, "ActiveTenants", user.uid), {
          due: 0,
          paid: data.fees,
        });
        console.log("Status updated");
        setSucceded(true);
        setError(null);
        setProcessing(false);
        toast.success("Payment Successful", {
          autoClose: 3000,
        });
        navigate("/profile");
      })
      .catch((error) => {
        alert(error.message);
      });
    setSucceded(true);
    setError(null);
    setProcessing(false);
  };
  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };
  return (
    <>
      {loading ? (
        <div className="loaders2">
          <h2>Redirecting to Payments</h2>
          <DotLoader
            color={"#45CFDD"}
            loading={loading}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <>
          <Navbar />

          <div className="mainPaymentPage">
            <Fade left>
              <div className="payment__image">
                <img
                  src="https://cdn1.booqable.com/marketing-assets/integrations/stripe/stripe-image-2-965699528f8c225c1b2abbf297b7b5e9a5e199e6c57299616cd6f538642119978588e91fbad658f1a47b01d97ba72be1f71d5fc4435b78d624cc03bec97384bb.webp"
                  alt=""
                />
              </div>
            </Fade>
            <Fade right>
              <div className="payment">
                <h1>Payment Page</h1>
                <div className="payment__details1">
                  <span>
                    <h3>Mailid : </h3>
                    <p>{users.mail}</p>
                  </span>
                  <span>
                    <h3>Name : </h3>
                    <p>{users.username}</p>
                  </span>
                  <span>
                    <h3>Phone : </h3>
                    <p>{users.phone}</p>
                  </span>
                  <span>
                    <h3>Branch : </h3>
                    <p>{users.branch}</p>
                  </span>
                </div>
                <div className="payment__section">
                  <div className="payment__details">
                    {/* use of stripe */}
                    <form onSubmit={handleSubmit}>
                      <CardElement onChange={handleChange} />
                      <div className="payment__priceContainer">
                        <CurrencyFormat
                          renderText={(value) => <h3>Order total : {value}</h3>}
                          decimalScale={2}
                          value={data.fees}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={"₹"}
                        />

                        <button disabled={processing || disabled || succeeded}>
                          <span>
                            {processing ? <p>Processing</p> : "Confirm Payment"}
                          </span>
                        </button>
                      </div>
                      {error && <div>{error}</div>}
                    </form>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </>
      )}
    </>
  );
}

export default Payment;

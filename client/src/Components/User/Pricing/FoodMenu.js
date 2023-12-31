import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { db } from "../../../Firebase/Firebase";
import "./FoodMenu.css";
import Navbar from "../Navbar/Navbar";
// import Footer from "../Footer/Footer";
function FoodMenu() {
  const [buttonDisable, setButtonDisable] = useState(false);

  const [sundayTfn, setSundayTfn] = useState("");
  const [sundayLunch, setSundayLunch] = useState("");
  const [sundaySnacks, setSundaySnacks] = useState("");
  const [sundayDinner, setSundayDinner] = useState("");

  const [mondayTfn, setmondayTfn] = useState("");
  const [mondayLunch, setmondayLunch] = useState("");
  const [mondaySnacks, setmondaySnacks] = useState("");
  const [mondayDinner, setmondayDinner] = useState("");

  const [tuesdaydayTfn, settuesdaydayTfn] = useState("");
  const [tuesdaydayLunch, settuesdaydayLunch] = useState("");
  const [tuesdaydaySnacks, settuesdaydaySnacks] = useState("");
  const [tuesdaydayDinner, settuesdaydayDinner] = useState("");

  const [wednsdayTfn, setwednsdayTfn] = useState("");
  const [wednsdayLunch, setwednsdayLunch] = useState("");
  const [wednsdaySnacks, setwednsdaySnacks] = useState("");
  const [wednesdayDinner, setwednsdaydayDinner] = useState("");

  const [tuesdayTfn, settuesdayTfn] = useState("");
  const [tuesdayLunch, settuesdayLunch] = useState("");
  const [tuesdaySnacks, settuesdaySnacks] = useState("");
  const [tuesdayDinner, settuesdayDinner] = useState("");

  const [fridayTfn, setfridayTfn] = useState("");
  const [fridayLunch, setfridayLunch] = useState("");
  const [fridaySnacks, setfridaySnacks] = useState("");
  const [fridayDinner, setfridayDinner] = useState("");

  const [saturdayTfn, setsaturdayTfn] = useState("");
  const [saturdayLunch, setsaturdayLunch] = useState("");
  const [saturdaySnacks, setsaturdaySnacks] = useState("");
  const [saturdayDinner, setsaturdayDinner] = useState("");
  const menuRef = doc(db, "DiningMenu", "Menu");

  const handleMenuUpdate = async (e) => {
    e.preventDefault();
    setButtonDisable(true);
    await setDoc(menuRef, {
      Menu: [
        {
          Tiffin: sundayTfn,
          Lunch: sundayLunch,
          Snacks: sundaySnacks,
          Dinner: sundayDinner,
        },
        {
          Tiffin: mondayTfn,
          Lunch: mondayLunch,
          Snacks: mondaySnacks,
          Dinner: mondayDinner,
        },
        {
          Tiffin: tuesdaydayTfn,
          Lunch: tuesdaydayLunch,
          Snacks: tuesdaydaySnacks,
          Dinner: tuesdaydayDinner,
        },
        {
          Tiffin: wednsdayTfn,
          Lunch: wednsdayLunch,
          Snacks: wednsdaySnacks,
          Dinner: wednesdayDinner,
        },
        {
          Tiffin: tuesdayTfn,
          Lunch: tuesdayLunch,
          Snacks: tuesdaySnacks,
          Dinner: tuesdayDinner,
        },
        {
          Tiffin: fridayTfn,
          Lunch: fridayLunch,
          Snacks: fridaySnacks,
          Dinner: fridayDinner,
        },
        {
          Tiffin: saturdayTfn,
          Lunch: saturdayLunch,
          Snacks: saturdaySnacks,
          Dinner: saturdayDinner,
        },
      ],
      Time: serverTimestamp(),
    })
      .then(() => {
        toast.success("Menu updated");
      })
      .catch((e) => {
        toast.error("Error. Menu not  updated");
      });
    setButtonDisable(false);
  };

  const handleClear = async (e) => {
    e.preventDefault();
    setButtonDisable(true);
    window.location.reload();
    toast.warning("Changes has been cleared");
    setButtonDisable(false);
  };
  return (
    <>
      <Navbar />
      <div className="MenuTable">
        <h1>Dining Menu</h1>
        <table>
          <thead>
            <tr>
              <td>Day\Time</td>
              <td>Tiffin</td>
              <td>Lunch</td>
              <td>Snacks</td>
              <td>Dinner</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td id="day_td">Sunday</td>
              <td>
                <input
                  type="text"
                  value={sundayTfn}
                  onChange={(e) => setSundayTfn(e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={sundayLunch}
                  onChange={(e) => setSundayLunch(e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={sundaySnacks}
                  onChange={(e) => setSundaySnacks(e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={sundayDinner}
                  onChange={(e) => setSundayDinner(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td id="day_td">Monday</td>
              <td>
                <input
                  type="text"
                  value={mondayTfn}
                  onChange={(e) => setmondayTfn(e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={mondayLunch}
                  onChange={(e) => setmondayLunch(e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={mondaySnacks}
                  onChange={(e) => setmondaySnacks(e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={mondayDinner}
                  onChange={(e) => setmondayDinner(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td id="day_td">Tuesday</td>
              <td>
                <input
                  type="text"
                  value={tuesdaydayTfn}
                  onChange={(e) => settuesdaydayTfn(e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={tuesdaydayLunch}
                  onChange={(e) => settuesdaydayLunch(e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={tuesdaydaySnacks}
                  onChange={(e) => settuesdaydaySnacks(e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={tuesdaydayDinner}
                  onChange={(e) => settuesdaydayDinner(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td id="day_td">Wednesday</td>
              <td>
                <input
                  type="text"
                  value={wednsdayTfn}
                  onChange={(e) => setwednsdayTfn(e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={wednsdayLunch}
                  onChange={(e) => setwednsdayLunch(e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={wednsdaySnacks}
                  onChange={(e) => setwednsdaySnacks(e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={wednesdayDinner}
                  onChange={(e) => setwednsdaydayDinner(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td id="day_td">Thursday</td>
              <td>
                <input
                  type="text"
                  value={tuesdayTfn}
                  onChange={(e) => settuesdayTfn(e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={tuesdayLunch}
                  onChange={(e) => settuesdayLunch(e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={tuesdaySnacks}
                  onChange={(e) => settuesdaySnacks(e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={tuesdayDinner}
                  onChange={(e) => settuesdayDinner(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td id="day_td">Friday</td>
              <td>
                <input
                  type="text"
                  value={fridayTfn}
                  onChange={(e) => setfridayTfn(e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={fridayLunch}
                  onChange={(e) => setfridayLunch(e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={fridaySnacks}
                  onChange={(e) => setfridaySnacks(e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={fridayDinner}
                  onChange={(e) => setfridayDinner(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td id="day_td">Saturday</td>
              <td>
                <input
                  type="text"
                  value={saturdayTfn}
                  onChange={(e) => setsaturdayTfn(e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={saturdayLunch}
                  onChange={(e) => setsaturdayLunch(e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={saturdaySnacks}
                  onChange={(e) => setsaturdaySnacks(e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={saturdayDinner}
                  onChange={(e) => setsaturdayDinner(e.target.value)}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="menu_controll">
          <button
            style={{ background: "orange" }}
            onClick={handleMenuUpdate}
            disabled={buttonDisable}
          >
            Update
          </button>
          <button
            style={{ background: "red", color: "white" }}
            onClick={handleClear}
            disabled={buttonDisable}
          >
            Reset
          </button>
        </div>
        <ToastContainer />
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default FoodMenu;

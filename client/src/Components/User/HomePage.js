import React, { useEffect, useState } from "react";
import "./HomePage.css";
import Compare from "./Compare";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import PersonIcon from "@mui/icons-material/Person";
import StarIcon from "@mui/icons-material/Star";
import Features from "./Features";
import Facilities from "./Facilities";
import Facilities2 from "./Facilities2";
import Reviews from "./Reviews";
import { Fade } from "react-reveal";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../Firebase/Firebase";
import { addDoc, collection, onSnapshot, query } from "firebase/firestore";
import { useStateValue } from "../../ContextAPI/UsersAuthContext";
import UserLogin from "./UserLogInAndSignIn/UserLogin";
function HomePage() {
  const [{ user }, dispatch] = useStateValue();
  const navigate = useNavigate();
  const [feedback, setFeedback] = useState("");
  const [dispFeed, setDispFeed] = useState([]);
  const [pic, setPic] = useState(null);
  const postRef = collection(db, "Feedback");
  const dpRef = collection(db, "Users");
  useEffect(() => {
    const q = query(dpRef);
    const q1 = query(postRef);
    onSnapshot(q, (snaphot) => {
      snaphot.forEach((doc) => {
        if (doc.data().mail === user?.email) {
          setPic(doc.data().profile);
        }
      });
    });
    onSnapshot(q1, (snaphot) => {
      setDispFeed(
        snaphot.docs.map((doc) => ({
          id: doc.id,
          feedback: doc.data().feedback,
          profile: doc.data().profile,
          userName: doc.data().userName,
        }))
      );
    });
    //eslint-disable-next-line
  }, []);
  const postFeedback = (e) => {
    e.preventDefault();
    if (!feedback || feedback === "") alert("Please enter your review");
    else {
      alert("Thank you for your feedback");
    }
    addDoc(postRef, {
      feedback: feedback,
      userName: user?.displayName,
      profile: pic,
    });
    setFeedback("");
  };
  return (
    <>
      {!user ? (
        <UserLogin />
      ) : (
        <div className="mainPage">
          <Fade bottom>
            <div className="homePage">
              <div className="homePage__gradient" />
              <Fade up>
                <div className="homePage__body">
                  <h1>We help you save money comapred to other hostels!!</h1>
                  <h2>Best hostel in the city | Best prices | Best comfort</h2>
                </div>
              </Fade>
            </div>
          </Fade>
          <div className="page2">
            <h1>The only hostel that you will ever need</h1>

            <div className="compare__features">
              <Compare
                Icon={CurrencyRupeeIcon}
                title="Compare prices of rooms with one click"
                desc="Compare prices of all types of rooms with 1 simple click"
              />
              <Compare
                Icon={PersonIcon}
                title="Genuine uncensored reviews you can trust"
                desc="Non-biased reviews from real guests, readers and experts"
              />
              <Compare
                Icon={StarIcon}
                title="Ratings with more than 4 stars"
                desc="We are the only database listing every single detail."
              />
            </div>
          </div>
          <div className="page3">
            <h3>Explore our hostel rooms</h3>
            <h1>Featured Displays</h1>
            <div
              className="display__features"
              onClick={() => navigate("/pricing")}
            >
              <Features
                price="5000"
                image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F5.imimg.com%2Fdata5%2FXB%2FED%2FMY-2%2Fhostel-bed-1000x1000.jpg&f=1&nofb=1&ipt=2b015041e1e3c30a007fda0f98c96ed87763cb5d10adb0243f6c52afdf8856b6&ipo=images"
                desc="6 sharing bedroom"
              />
              <Features
                price="6000"
                image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgoodmorninghostel.com%2Fwp-content%2Fuploads%2F2015%2F05%2Fgoodmorning-hostel-in-lisbon-rooms.jpg&f=1&nofb=1&ipt=df2ae97d48709f2c0b38497e2b37019fb3d2171418ec452a35b9b6f0d395c71e&ipo=images"
                desc="4 sharing bedroom"
              />
              <Features
                price="7000"
                image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.sankalpgirlshostel.com%2Fassets%2Fimages%2Fsankalp-hostel-triplebed1.JPG&f=1&nofb=1&ipt=3df4f7e374eec8b8e1dba6dbb91926e0fa209d35fb7c52afd0eb599a050b2180&ipo=images"
                desc="3 sharing bedroom"
              />
              <Features
                price="8000"
                image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.tripsavvy.com%2Fthmb%2FsOiyWXXUOl7QvpEi7XAFm2YO4ZQ%3D%2F2119x1414%2Ffilters%3Afill(auto%2C1)%2Fdormitory-room-in-the-modern-hostel-910999556-5c48f87246e0fb0001377cdf.jpg&f=1&nofb=1&ipt=ca39b57136451a59069aed054fab66b69e807fb16a81bf17955098061bd0fb6a&ipo=images"
                desc="2 sharing bedroom"
              />
            </div>
          </div>
          <div className="page4">
            <h1>Facilities Provided</h1>
            <div className="facilities__display">
              <Facilities
                image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F5.imimg.com%2Fdata5%2FMS%2FFW%2FMY-6804265%2Fbunk-bed.jpg&f=1&nofb=1&ipt=23a12db93c1acc3cf5d725192ea2fe295351f6b7852f34348fe7206e68604b2d&ipo=images"
                title="Bedroom and beds"
                desc="The hostel rooms offer a comfortable and cozy living space, designed to ensure a pleasant stay for the residents. The rooms are furnished with essential amenities, including comfortable beds, study desks, and storage facilities. The area is well-lit and adequately ventilated, promoting a conducive environment for studying and relaxation. Additionally, the rooms are kept clean and hygienic, with regular housekeeping services. Hostel management strives to maintain a safe and secure environment, with strict adherence to rules and regulations."
              />
              <Facilities2
                image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fda%2Fe9%2Fa5%2Fdae9a579bc67a48a674686b871544938.jpg&f=1&nofb=1&ipt=dc3e938ab12131610f9c7de5090ebafa1b43a2a033db239f605103702c9a9fce&ipo=images"
                title="Mess / Canteen"
                desc="The hostel canteen ensures high standards of hygiene and cleanliness, providing a safe dining environment for residents. The area is well-maintained and designed to accommodate a substantial number of individuals at once, fostering a pleasant and comfortable dining experience.Beyond meals, the canteen acts as a social hub, encouraging interactions among residents and building a sense of community. Overall, it plays a crucial role in enhancing the hostel experience, promoting health, and fostering a welcoming atmosphere."
              />
              <Facilities
                image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F2.bp.blogspot.com%2F_58BzYZS0VWw%2FTJaXBE2pLeI%2FAAAAAAAAADo%2F0wblmvVDQX0%2Fs1600%2Fe_europe_2005.1121261700.hostel-corridor.jpg&f=1&nofb=1&ipt=720fef9a3b6d4a635abfd97b83a437c678dcb8d6b5f3a55f37731e12f293a2b9&ipo=images"
                title="Corridor"
                desc="The hostel corridor is a narrow passageway connecting various rooms within the hostel. It is usually lined with doors to individual dormitories or bedrooms. The corridor serves as a pathway for residents to access their rooms and facilitates movement within the hostel. It may also have common areas or notice boards for community announcements and interaction."
              />
              <Facilities2
                image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F2.bp.blogspot.com%2F-b-SK20rlvbE%2FVrOpnhez4GI%2FAAAAAAAAHfo%2FWxrffeI7YbA%2Fs1600%2Fbathroom.jpg&f=1&nofb=1&ipt=abb8aa2c0a46bc89b1d15959f24de130c03cb8b2695465d134a0ecb554c26b34&ipo=images"
                title="Washrooms / Bathrooms"
                desc="The hostel bathrooms are communal facilities equipped with multiple shower and toilet stalls. They provide basic amenities for residents to maintain personal hygiene and convenience. Regularly cleaned, they offer a functional and hygienic space for occupants to freshen up and perform daily routines during their stay in the hostel. "
              />
            </div>
          </div>
          <div className="page5">
            <h1>Reviews and Feedbacks</h1>
            <div className="reviews__display">
              <Reviews
                profile="https://pbs.twimg.com/profile_images/1587503936503619589/x2bDktpK_400x400.jpg"
                thoughts="very good hostel very good hostel very good hostel very good hostel very good hostel
            "
                name="Rahul"
                rating={5}
              />
              <Reviews
                profile="https://pbs.twimg.com/profile_images/1587503936503619589/x2bDktpK_400x400.jpg"
                thoughts="very good hostel very good hostel very good hostel very good hostel very good hostel
            "
                name="Rahul"
                rating={5}
              />
              <Reviews
                profile="https://pbs.twimg.com/profile_images/1587503936503619589/x2bDktpK_400x400.jpg"
                thoughts="very good hostel very good hostel very good hostel very good hostel very good hostel
            "
                name="Rahul"
                rating={5}
              />
              {dispFeed &&
                dispFeed.map((item) => {
                  return (
                    <Reviews
                      profile={item.profile}
                      thoughts={item.feedback}
                      name={item.userName}
                      rating={4}
                    />
                  );
                })}
            </div>
            <div className="drop__thoughts">
              <input
                type="text"
                placeholder="Drop your feedback here.."
                onChange={(e) => setFeedback(e.target.value)}
                value={feedback}
              />
              <button onClick={postFeedback}>Post</button>
            </div>
          </div>
          <Fade up>
            <div className="page6">
              <h1>Unlock your hostel account to explore and book!!</h1>
              <p>
                Sign up with hostelManagement to get exclusive content and much
                more
              </p>
              <div
                className="reg"
                style={{ display: "flex", alignItems: "center" }}
              >
                {user?.email ? (
                  <>
                    <h1>Welcome {user?.email}</h1>
                    <button onClick={() => navigate("/aboutUs")}>
                      AboutUs
                    </button>
                  </>
                ) : (
                  <>
                    <input type="email " placeholder="Email" />
                    <button onClick={() => navigate("/user_login")}>
                      Register
                    </button>
                  </>
                )}
              </div>
            </div>
          </Fade>
        </div>
      )}
    </>
  );
}

export default HomePage;

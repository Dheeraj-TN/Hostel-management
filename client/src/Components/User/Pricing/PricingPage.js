import React from "react";
import PricingOptions from "./PricingOptions";
import Navbar from "../Navbar/Navbar";
import "./Pricing.css";
import Footer from "../Footer/Footer";
import { Fade } from "react-reveal";
function PricingPage() {
  return (
    <>
      <Navbar />

      <div className="pricing__page">
        <Fade left>
          <PricingOptions
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F5.imimg.com%2Fdata5%2FXB%2FED%2FMY-2%2Fhostel-bed-1000x1000.jpg&f=1&nofb=1&ipt=2b015041e1e3c30a007fda0f98c96ed87763cb5d10adb0243f6c52afdf8856b6&ipo=images"
            title="6 bedroom sharing"
            desc="This is 6 bedroom sharing room which has 6 beds etc and "
            price="5000"
            bookNow="Book Now"
          />
        </Fade>
        <Fade right>
          <PricingOptions
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgoodmorninghostel.com%2Fwp-content%2Fuploads%2F2015%2F05%2Fgoodmorning-hostel-in-lisbon-rooms.jpg&f=1&nofb=1&ipt=df2ae97d48709f2c0b38497e2b37019fb3d2171418ec452a35b9b6f0d395c71e&ipo=images"
            title="4 bedroom sharing"
            desc="This is 4 bedroom sharing room which has 4 beds etc and "
            price="6000"
            bookNow="Book Now"
          />
        </Fade>
        <Fade left>
          <PricingOptions
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.sankalpgirlshostel.com%2Fassets%2Fimages%2Fsankalp-hostel-triplebed1.JPG&f=1&nofb=1&ipt=3df4f7e374eec8b8e1dba6dbb91926e0fa209d35fb7c52afd0eb599a050b2180&ipo=images"
            title="3 bedroom sharing"
            desc="This is 3 bedroom sharing room which has 3 beds etc and "
            price="7000"
            bookNow="Book Now"
          />
        </Fade>
        <Fade right>
          <PricingOptions
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.tripsavvy.com%2Fthmb%2FsOiyWXXUOl7QvpEi7XAFm2YO4ZQ%3D%2F2119x1414%2Ffilters%3Afill(auto%2C1)%2Fdormitory-room-in-the-modern-hostel-910999556-5c48f87246e0fb0001377cdf.jpg&f=1&nofb=1&ipt=ca39b57136451a59069aed054fab66b69e807fb16a81bf17955098061bd0fb6a&ipo=images"
            title="2 bedroom sharing"
            desc="This is 2 bedroom sharing room which has 2 beds etc and "
            price="8000"
            bookNow="Book Now"
          />
        </Fade>
        <Fade left>
          <PricingOptions
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fim.rediff.com%2Fgetahead%2F2019%2Fsep%2F09hostel.jpg%3Fw%3D670%26h%3D900&f=1&nofb=1&ipt=1df0fe846e412e140150c09f274fc1e5437510956b72fea7253e2fb491cc0007&ipo=images"
            title="Food"
            desc="A very helthy and hygenic food will be provided"
            price="4000"
            viewList="View Menu"
          />
        </Fade>
        <Fade right>
          <PricingOptions
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.hostelz.com%2Fpics%2Fhostels%2Fowner%2Fbig%2F50%2F3562450.jpg&f=1&nofb=1&ipt=705f5cff38e917a0a2d46062c7c076d8d8ee70f4ddc34ffba364a7bbbe010b70&ipo=images"
            title="Laundry"
            desc="Laundry will be available from 9am to 8pm everyday "
            price="1000"
          />
        </Fade>
      </div>
      <Footer />
    </>
  );
}

export default PricingPage;

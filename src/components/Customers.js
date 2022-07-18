import React from "react";
import image1 from "../images/circula-logo.svg";
import image2 from "../images/hura-com-logo.svg";
import image3 from "../images/diva-e-logo.svg";
import image4 from "../images/auxmoney-logo.svg";
import image5 from "../images/etepetete-logo.svg";
import image6 from "../images/syzygy-logo.svg";
import image7 from "../images/jung-von-matt-logo.svg";
import image8 from "../images/clark-logo.svg";
import image9 from "../images/usercentrics-logo.svg";
import image10 from "../images/ki-group-logo.svg";
import image11 from "../images/blacklane-logo.svg";
import image12 from "../images/omr-logo.svg";
function Customers() {
  return (
    <section className='customers-section'>
      <div className='customers-container'>
        <h3>Our satisfied customers</h3>
        <div>
          <img src={image1} alt='' />
          <img src={image2} alt='' />
          <img src={image3} alt='' />
          <img src={image4} alt='' />
          <img src={image5} alt='' />
          <img src={image6} alt='' />
          <img src={image7} alt='' />
          <img src={image8} alt='' />
          <img src={image9} alt='' />
          <img src={image10} alt='' />
          <img src={image11} alt='' />
          <img src={image12} alt='' />
        </div>
      </div>
    </section>
  );
}

export default Customers;

import React from "react";
import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";
import SensorDoorOutlinedIcon from "@mui/icons-material/SensorDoorOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import image from "../images/mobile-app-with-hand.webp";
function DigitalCard() {
  return (
    <section className='digital-section' id='features'>
      <div className='digital-container'>
        <img src={image} alt='' />
        <div className='right-digital'>
          <h3>Fully digital card and receipt management</h3>
          <p>
            With just a few clicks, issue physical and virtual credit cards to
            all employees. Set limits and team budgets. Get complete visibility
            and control over payments across your entire organization.
          </p>
          <ul className='digital-info'>
            <li>
              <HouseOutlinedIcon /> Application and set-up without a bank visit
            </li>
            <li>
              <SensorDoorOutlinedIcon /> Card creation and allocation at the
              touch of a button
            </li>
            <li>
              <PersonOutlineOutlinedIcon /> Request and approval flows for
              employees
            </li>
            <li>
              <InventoryOutlinedIcon /> Real-time reporting via Pliant dashboard
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default DigitalCard;

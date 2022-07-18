import React from "react";
import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";
import SensorDoorOutlinedIcon from "@mui/icons-material/SensorDoorOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import image from "../images/partner-logos.webp";
function Partner() {
  return (
    <section className='digital-section partners'>
      <div className='digital-container  '>
        <img src={image} alt='' />
        <div className='right-digital'>
          <h3>Partner integrations for best-in-class service</h3>
          <p>
            Pliant is purpose-built for flexibility. You get a spending tool
            that plugs into your existing accounting, invoice management, travel
            expense, and other financial solutions, all with minimal effort.{" "}
          </p>
          <ul className='digital-info'>
            <li>
              <HouseOutlinedIcon />
              Travel expense solutions
            </li>
            <li>
              <SensorDoorOutlinedIcon /> Attractive insurance package touch of a
            </li>
            <li>
              <PersonOutlineOutlinedIcon /> Invoice management tools Services
            </li>
            <li>
              <InventoryOutlinedIcon /> Accounting systems
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Partner;

import React from "react";
import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";
import SensorDoorOutlinedIcon from "@mui/icons-material/SensorDoorOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import image from "../images/benefits.webp";
function Transactions() {
  return (
    <section className='digital-section transactions-section'>
      <div>
        <div className='digital-container transactions'>
          <div className='right-digital'>
            <h3>Save on every transaction</h3>
            <p>
              With Pliant, you not only save time, but also money on important
              expenses like online marketing, cloud services, SaaS tools, and
              travel expenses.
            </p>
            <ul className='digital-info'>
              <li>
                <HouseOutlinedIcon />
                Up to 1% unlimited cashback
              </li>
              <li>
                <SensorDoorOutlinedIcon />
                Additional benefits through partner offers{" "}
              </li>
              <li>
                <PersonOutlineOutlinedIcon />
                Cashbacks instead of fees for foreign currency spending result
                in savings of up to 4%. employees
              </li>
            </ul>
          </div>
          <img src={image} alt='' />
        </div>
      </div>
    </section>
  );
}

export default Transactions;

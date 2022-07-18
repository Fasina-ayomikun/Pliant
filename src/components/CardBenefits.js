import React from "react";
import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";
import SensorDoorOutlinedIcon from "@mui/icons-material/SensorDoorOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import image from "../images/cards-with-user.webp";
import { theme } from "..";
import { Button } from "@mui/material";
function CardBenefits() {
  return (
    <section className='digital-section ' id='card-benefits'>
      <div className='digital-container card-benfits'>
        <div className='right-digital'>
          <h3>Our card benefits</h3>
          <p>
            Real credit cards with high limits unlock the ultimate purchasing
            power. Pliant’s premium Visa cards come with exclusive perks like a
            complete insurance package and worldwide airport lounge access.
          </p>
          <ul className='digital-info'>
            <li>
              <HouseOutlinedIcon /> Worldwide airport lounge access
            </li>
            <li>
              <SensorDoorOutlinedIcon /> Attractive insurance package touch of a
            </li>
            <li>
              <PersonOutlineOutlinedIcon /> Visa Global Customer Assistance
              Services
            </li>
            <li>
              <InventoryOutlinedIcon /> Pliant earth feature for CO2-neutral
              travel
            </li>
          </ul>
          <Button
            variant='contained'
            theme={theme}
            sx={{
              padding: "7px 25px",
              fontWeight: "400",
              borderRadius: "40px",
            }}
          >
            <a
              href='#'
              sx={{
                color: "#fff",
              }}
            >
              Details
            </a>
          </Button>
        </div>
        <img src={image} alt='' />
      </div>
    </section>
  );
}

export default CardBenefits;

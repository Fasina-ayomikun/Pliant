import React, { useEffect, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Button } from "@mui/material";
import { theme } from "..";
function Navbar() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY !== 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
    return window.removeEventListener("scroll", () => {
      if (window.scrollY !== 0) {
        setScroll(true);
      } else {
      }
    });
  }, [scroll]);
  return (
    <div className={`${scroll ? "nav fixed-nav" : "nav"}`}>
      <div className='nav-container'>
        <ul className='nav-links'>
          <li className='nav-link'>
            <a href='#home' className='logo'>
              Tier Money
            </a>
          </li>
          <li className='nav-link'>
            <a href='#features'>Features</a>
          </li>
          <li className='nav-link'>
            <a href='#card-benefits'>Card Benefits</a>
          </li>
          <li className='nav-link'>
            <a href='#pricing'>Pricing</a>
          </li>
          <li className='nav-link'>
            <a href='#faq'>FAQ</a>
          </li>
        </ul>
        <div className='right-nav'>
          <h5>
            EN <KeyboardArrowDownIcon />
          </h5>
          <p>Login</p>
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
              Book a demo
            </a>
          </Button>
          <div className='toggle-btn'>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

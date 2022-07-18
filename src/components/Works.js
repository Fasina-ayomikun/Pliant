import React from "react";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import { Button } from "@mui/material";
import { theme } from "..";
function Works() {
  return (
    <section className='works-section'>
      <div className='works-container'>
        <h3>And this is how it works</h3>
        <div className='works'>
          <div className='work'>
            <FormatListBulletedOutlinedIcon />
            <h4>1. Register</h4>
            <p>
              and get real credit cards with high limits regardless of your
              company account.
            </p>
          </div>
          <div className='work'>
            <FormatListBulletedOutlinedIcon />
            <h4>2. Issue</h4>
            <p>
              virtual & physical cards with individual limits to your employees
              at the touch of a button.
            </p>
          </div>
          <div className='work'>
            <FormatListBulletedOutlinedIcon />
            <h4>3. Track</h4>
            <p>
              all your spending in real time and save money on every transaction
              with attractive cashbacks.
            </p>
          </div>
          <div className='work'>
            <FormatListBulletedOutlinedIcon />
            <h4>4. Benefit</h4>
            <p>
              from simplified receipt collection and automated forwarding to
              your accounting system
            </p>
          </div>
        </div>
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
      </div>
    </section>
  );
}

export default Works;

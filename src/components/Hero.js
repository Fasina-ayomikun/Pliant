import { Button } from "@mui/material";
import React from "react";
import { theme } from "..";
import hero from "../images/hero-image.webp";
import trustpilot from "../images/trustpilot.png";
import omz from "../images/omz.png";
function Hero() {
  return (
    <section className='hero-section'>
      <div className='hero-container'>
        <div className='left-hero'>
          <h1>
            The digital business credit card solution for maximum flexibility &
            savings
          </h1>
          <p>
            Fully digital card and receipt management via Pliant app. Physical &
            virtual cards with high limits, attractive cashbacks and other
            premium benefits. Seamless integration with existing finance and
            accounting software guaranteed.
          </p>
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
          <div>
            <img src={trustpilot} alt='' />
            <img src={omz} alt='' />
          </div>
        </div>
        <div>
          <img src={hero} alt='' />
        </div>
      </div>
    </section>
  );
}

export default Hero;

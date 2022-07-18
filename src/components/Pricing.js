import { Button } from "@mui/material";
import React from "react";
import { theme } from "..";

function Pricing() {
  return (
    <section className='pricing-section' id='pricing'>
      <div>
        <div className='pricing-container'>
          <h3>The right package for every company</h3>
          <div className='pricings'>
            <div className='pricing'>
              <h4>Package</h4>

              <p> </p>
              <p>Users</p>

              <p>Virtus cards</p>

              <p>Blue cards</p>

              <p>Black cards</p>

              <p>Software and accounting integrations</p>

              <p>Cashback</p>

              <p>Monthly fee</p>
            </div>
            <div className='pricing'>
              <h4>Starter</h4>
              <p>
                Best to start optimising payment processes and to unlock
                significant savings
              </p>

              <p>Up to 25</p>

              <p>Up to 50</p>

              <p>1 per user</p>

              <p>40€ per month per card</p>

              <p>1 existing integration</p>

              <p>Unlimited</p>

              <p>0 €</p>

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
            <div className='pricing'>
              <div className='title'>
                <h4>Starter</h4>
                <h6>Popular</h6>
              </div>
              <p>Best to optimize payment processes and maximize savings</p>

              <p>Unlimited</p>

              <p>Unlimited</p>

              <p>1 per user</p>

              <p>30€ per month per card</p>

              <p>Unlimited & new custom integrations</p>

              <p>Unlimited</p>

              <p>5 € per user</p>

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
            <div className='pricing'>
              <h4>Enterprice</h4>
              <p>
                Best in case of custom requirements for payment and related
                accounting processes
              </p>

              <p>Unlimited</p>

              <p>Unlimited</p>

              <p>On request</p>

              <p>On request</p>

              <p>Unlimited & new custom integrations</p>

              <p>Unlimited</p>

              <p>On request</p>

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
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;

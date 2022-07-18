import React from "react";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import { theme } from "..";
import { Button } from "@mui/material";
function Contact() {
  return (
    <section className='contact-section'>
      <div className='contact-container'>
        <h3>We are there for you personally</h3>
        <p>
          Feel free to contact us & ask your questions personally. Our team of
          advisors is there for you Monday to Friday from 9 am - 5 pm.
        </p>
        <div>
          <p>
            <HelpOutlineOutlinedIcon /> Consulting
          </p>
          <p>+4930544537781</p>
          <p>
            <ChatBubbleOutlineOutlinedIcon /> Support
          </p>
          <p>+4930544537781</p>
        </div>
        <div>
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
    </section>
  );
}

export default Contact;

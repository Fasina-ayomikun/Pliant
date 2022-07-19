import React from "react";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import logo from "../images/logo.png";
function Footer() {
  return (
    <section className='footer-section'>
      <div className='footer-container'>
        <a href='#home' className='logo'>
          <img src={logo} alt='Tier Money' />
        </a>
        <ul className='social-icons'>
          <li className='social-icon'>
            <a href='#'>
              <FacebookTwoToneIcon />
            </a>
          </li>
          <li className='social-icon'>
            <a href='#'>
              <InstagramIcon />
            </a>
          </li>
          <li className='social-icon'>
            <a href='#'>
              <LinkedInIcon />
            </a>
          </li>
          <li className='social-icon'>
            <a href='#'>
              <TwitterIcon />
            </a>
          </li>
        </ul>
        <ul className='web-links'>
          <li className='web-link'>
            English (EN) <KeyboardArrowDownIcon />
          </li>
          <li className='web-link'>
            <a href='#'>Imprint</a>
          </li>
          <li className='web-link'>
            <a href='#'>Data Protection Policy</a>
          </li>
          <li className='web-link'>
            <a href='#'>Exchange Rates</a>
          </li>
          <li className='web-link'>
            <a href='#'>Jobs</a>
          </li>
          <li className='web-link'>
            <a href='#'>Press</a>
          </li>
          <li className='web-link'>
            <a href='#'>Blog</a>
          </li>
        </ul>
        <p>
          &copy; {new Date().getFullYear()} infinnity financial technologies
          GmbH
        </p>
        <p>
          Cards are issued by Transact Payments Malta Limited pursuant to
          licence by VISA Europe Limited. Transact Payments Malta Limited is
          duly authorised and regulated by the Malta Financial Services
          Authority as a Financial Institution under the Financial Institution
          Act 1994. Registration number C 91879.
        </p>
      </div>
    </section>
  );
}

export default Footer;

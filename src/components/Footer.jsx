import React from 'react'
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaRegCopyright } from "react-icons/fa";
import "./footer.css"

const Footer = () => {
  return (
    <div className='footer'>
    <div className='fSection1'>
    <div className='subSection1'>
    <h1> BookMyCollab</h1>
    <p>Lorem ipsum dolor sit amet, consectetur 
    adipiscing elit, sed do eiusmod tempor 
    incididunt ut </p>
    <div className='footerIcons'>
    <AiFillInstagram />
    <FaLinkedin />
    <FaTwitter />
    <IoMail />
    </div>
    </div>
    <div className='subSection2'>
    <h1>Company</h1>
    <ul>
    <li>About</li>
    <li>Career</li>
    <li>Terms & Conditions</li>
    <li>Privacy Policy</li>
    <li> Refund Policy</li>
    </ul>
    </div>
    <div className='subSection2'>
    <h1> Join us</h1>
    <ul className='listItems'>
    <li>Join as a brand</li>
    <li>Join as a creator</li>
    <li>Find creator</li>
    
    </ul>
    </div>
    </div>
    <div className='fSection2'>
    <h4>No Upfront Payment</h4>
    <h4> Verified Creators</h4>
    <h4>Inbuilt Messengers</h4>
    <h4> Secure and Timely Payment</h4>

    </div>
    <div className='fSection3'>
    <div className='copyWirte'>
    <FaRegCopyright />
    Copyright • All Rights Reserved
    </div>
    <h4> BookMyCollab 2024</h4>
   
    </div>
      
    </div>
  )
}

export default Footer

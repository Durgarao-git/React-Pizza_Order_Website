import React from 'react';
import "../Styles/Footer.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';


const Footer = () => {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <InstagramIcon/>
            <FacebookIcon/>
            <TwitterIcon/>

        </div>
        <p> &copy;copyright 2021 pizzaria.com</p>
    </div>
  )
} 

export default Footer

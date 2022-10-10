import React from 'react';
import '../Card.css'
function FooterSection(){
    return(
        <React.Fragment>
        <div className="footerSec">
            <img src="#" alt="Logo"/>
           <div class = "vertical"></div>
           <div>
            <span className='border1'><a>Contact us</a></span>
            <div className="socialIcon">
                <p>instagram</p>
                <p>facebook</p>
                <p>LinkedIn</p>
                <p>twitter</p>
           </div>
           <cite>+25412345678</cite>
           <p>writing@gmail.com</p>
           </div>
           <div class = "vertical"></div>
           <div className='listing'>
            <ol>
                <li><a>Accomodation</a></li>
                <li><a>Top Deals</a></li>
                <li><a>Things To Do</a></li>
                <li><a>Holidays</a></li>
            </ol>
           </div>
           <div class = "vertical"></div>
           <div className='listing'>
            <ol>
                <li><a>About us</a></li>
                <li><a>FAQs</a></li>
                <li><a>Privacy Policy</a></li>
                <li><a>Terms & Conditions</a></li>
            </ol>
           </div>
           <div class = "vertical"></div>
           <span className='border1'><a>PARTNER WITH US</a></span>
           </div>
<emp>Copyright 2022 @ Ketravel. All rights reserved.</emp>
           </React.Fragment>
    )
} 
export default FooterSection;
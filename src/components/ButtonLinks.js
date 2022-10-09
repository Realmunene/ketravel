import React from 'react'
import {NavLink} from "react-router-dom"
function ButtonLinks() {
    const buttonStyles = {
        display: "inline-block",
        padding: "4px 13px",
        margin: "0 40px",
        background: "maroon",
        textDecoration: "none",
        color: "white",
      };
    return (
    <div>
           <div className='card'>
            <div className='one'>
                <p>lorem</p>
            </div>
            <div className='two'>
                <div>
                    <p>From</p>
                    <h3>Price</h3>
                    <H6>Town</H6>
                    <p>Expires on: Date</p>
                </div>
                <div>
                    <a href='#'>View More</a>
                </div>
            </div>
           </div>
    <div className='card'>
            <div className='one'>
                <p>lorem</p>
            </div>
            <div className='two'>
                    <H6>Town</H6>
                    <a href='#'>View More</a>
            </div>
    </div>
</div>
  )
}

export default ButtonLinks;
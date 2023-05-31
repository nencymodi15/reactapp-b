import React from 'react'
import "./footer.css";


export default function Footer(){

  return(
    <div className='footer'>
      <div className='github'>
        <img src="./images/github.png" alt='myinfo' width="50px" height={"50px"} ></img>
      </div>
      <div className='LinkedIn'>
        <img src="./images/linkedin.png" alt='myinfo' width="50px" height={"50px"} ></img>
      </div>
        <div className='Instagram'>
        <img src="./images/instagram.jpg" alt='myinfo' width="50px" height={"50px"} ></img>
      </div>
      <div className='phone'>
        <img src="./images/phone.png" alt='myinfo' width="50px" height={"50px"} ></img>
      </div>
    </div>
  )
}
import React from 'react'
import "./basinfo.css";
import Header from './Header';
export default function Baseinfo(){

  return(
    <div className='myinfo'>
      <Header/>
      <div className='ingotext'>
        <p className='greeting'>Hello. Namaste. Bonjour</p>
        <p className='myName'>I am Nency Modi</p>
        <p className='myName'>Webdeveloper</p>
        <p className='myqoute'>A highly motivated and enthusiastic web developer, 
          <span> with a strong foundation in HTML, CSS, and JavaScript. </span>
          <span>Proficient in developing responsive websites</span>
          <span> Strong problem-solving and communication skills with a passion for learning new technologies.</span></p>
        <a className='HireMeButton'>Hire Me</a>
        <a className='LearnMoreButton'>&rarr; Laern More</a>
     </div>
      <img src="./images/nency.png" alt='myinfo' width="600px" height={"700px"} className='imgcsss'></img>
      <div className='triangle'></div>
      <div className='aboutme'>
        <div>
          <div className='about'>
            <img src="./images/person.png" alt='myinfo' width="80px" height={"80px"} ></img>
            <p>FullName:<span>Nency Modi</span></p>
          </div>
          <div className='about'>
            <img src="./images/Phone.png" alt='myinfo' width="80px" height={"80px"} ></img>
            <p>Phone No:<span>+1 9029770475</span></p>
          </div>
        </div>
        <div>
          <div className='about'>
            <img src="./images/mail.png" alt='myinfo' width="80px" height={"80px"} ></img>
            <p>Email-id:<span>nencymodi150@gmail.com</span></p>
          </div>
          <div className='about'>
            <img src="./images/website.png" alt='myinfo' width="80px" height={"80px"} ></img>
            <p>website:<span>nencymodi.com</span></p>
          </div>
        </div>
      </div>
      {/*<div className='myimage'>
        <img src="./images/rounds.png" alt='myinfo' width="30px" height={"30px"}></img>
        <img src="./images/squres.png" alt='myinfo' width="30px" height={"30px"}></img>
        <img src="./images/lines.png" alt='myinfo' width="20px" height={"30px"}></img>
        <img src="./images/multi.png" alt='myinfo' width="20px" height={"30px"}></img>
      </div>
      <div className='triangle'></div>
      */}
    </div>
  )
}
import React from 'react'
import "./basinfo.css";
export default function Baseinfo(){

  return(
    <div className='myinfo'>
      <div className='myimage'>
        <img src="./images/nency.jpeg" alt='myinfo'></img>
      </div>
      <div className='ingotext'>
        <p className='myName'>Nency Modi</p>
        <p className='qoute'>Budding Webdeveloper</p>
        <a className='HireMeButton'>Hire Me</a>
      </div>
    </div>
  )
}
import React from 'react'
import "./header.css";


export default function Header(){

  return(
    <div className='navigationContainer'>
      <nav className='main-navigation'>
        <ul>
          <li><a href='#'>Home</a></li>
          <li><a href='#Certificate'>Certificates</a></li>
          <li><a href='#Experience'>Experience</a></li>
          <li><a href='#Academic'>Education</a></li>
          <li><a href='#Projects'>Project</a></li>
          <li><a href='#Skill'>Skills</a></li>
        </ul>
      </nav>
    </div>
  )
}
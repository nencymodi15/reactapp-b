import React, { useState, useEffect } from 'react';
import "./Academics.css";


export default function Academics() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('./json/academics.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Education</h2>
      {data.map(item => (
        <div className='AcademicContainer'>
          <div className='AcademicText'>
            <h2>{item.clgname}</h2>
            <p>{item.degree}</p>
            <p>{item.course}</p>
            <p>{item.description}</p>
          </div>
          <div className='AcademicImage'>
            <img src={item.image} alt="Academicimage" width="200px" height="200px"></img>
          </div>
        </div>
      ))}
    </div>
  );
}
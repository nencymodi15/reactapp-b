import React, { useState, useEffect } from 'react';
import "./Academics.css";


function MySkills() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('./json/academic.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      {data.map(item => (
        <div className='AcademicContainer'>
          <div className='AcademicText'>
            <h2>{item.clgname}</h2>
            <p>{item.degree}</p>
            <p>{item.course}</p>
            <p>{item.description}</p>
          </div>
          <div className='AcademicImage'>
            <img src={item.image} alt="Academicimage"></img>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MySkills;
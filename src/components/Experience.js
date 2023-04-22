import React, { useState, useEffect } from 'react';
import "./Experience.css";


export default function Experience() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('./json/experiences.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Experience</h2>
      {data.map(item => (
        <div className='experienceContainer'>
          <h2 className='Heading'><span>Company Name:</span>{item.CompanyName}</h2>
          <p><span className='title'>Experience:</span>{item.yearsofexperiance}</p>
          <p><span className='title'>Position:</span>{item.position}</p>
        </div>
      ))}
    </div>
  );
}

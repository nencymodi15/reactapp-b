import React, { useState, useEffect } from 'react';
import "./Project.css";


export default function Projects() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('./json/projects.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Project</h2>
      {data.map(item => (
        <div className="ProjectContainer">
          <div className="ProjectImage">
            <img src={item.image} alt=""/>
          </div>
          <div className="ProjectText">
            <h2>{item.title}</h2>
            <a href={item.url}>{item.title} url</a>
            <p>{item.slug}</p>
            <p>{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import "./Project.css";


function MyProjects() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('./json/projects.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      {data.map(item => (
        <div class="ProjectContainer">
          <div class="ProjectImage">
            <img src={item.image} alt=""/>
          </div>
          <div class="ProjectText">
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

export default MyProjects;
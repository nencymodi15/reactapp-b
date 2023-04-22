import React, { useState, useEffect } from 'react';
import "./Skills.css"

export default function Skills() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('./json/skills.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      {data.map(item => (
        <div className="SkillContainer">
          <div className="SkillText">
            <h2>{item.name}</h2>
            <p>{item.prof}</p>
            <p>{item.learned_at}</p>
          </div>
          <div className="SkillImage">
            <img src={item.image} alt="skills" width="100px" height="100px"></img>
          </div>
        </div>
      ))}
    </div>
  );
}

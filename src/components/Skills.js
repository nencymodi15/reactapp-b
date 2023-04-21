import React, { useState, useEffect } from 'react';
import "./Skills.css"

function MySkills() {
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
        <div class="SkillContainer">
          <div className="SkillText">
            <h2>{item.name}</h2>
            <p>{item.prof}</p>
            <p>{item.learned_at}</p>
          </div>
          <div class="SkillImage">
            <img src={item.image} alt="skills"></img>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MySkills;
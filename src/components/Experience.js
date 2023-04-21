import React, { useState, useEffect } from 'react';

function MySkills() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('./json/experience.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      {data.map(item => (
        <div>
          <img src={item.image}></img>
          <h2>{item.CompanyName}</h2>
          <p>{item.prof}</p>
          <p>{item.learned_at}</p>
        </div>
      ))}
    </div>
  );
}

export default MySkills;
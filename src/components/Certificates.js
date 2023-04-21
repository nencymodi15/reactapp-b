import React, { useState, useEffect } from 'react';

function MySkills() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('./json/certificates.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      {data.map(item => (
        <div>
          <h2>{item.name}</h2>
          <p>{item.level}</p>
          <p><img src="" alt=""/></p>
        </div>
      ))}
    </div>
  );
}

export default MySkills;
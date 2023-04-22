import React, { useState, useEffect } from 'react';
import "./certificate.css";

export default function Certificates() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('./json/certificates.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Certificates</h2>
      {data.map(item => (
        <div className='CertificateCotainer'>
          <h2 className='certificatetitle'>{item.name}</h2>
          <p className='certificationLevel'><span>Level:</span>{item.level}</p>
          <img src={item.image} alt={item.name} className='certficateImage'/>
        </div>
      ))}
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import './Body.css'
const CurrentDate = () => {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const formatDate = () => {
      const date = new Date();
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      const formattedDate = date.toLocaleDateString('en-US', options);
      setCurrentDate(formattedDate);
    };

    formatDate();

  
    const interval = setInterval(formatDate, 1000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className='date'>
      <p> {currentDate}</p>
    </div>
  );
};

export default CurrentDate;

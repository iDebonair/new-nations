import React, { useState } from 'react';
import '../styling/Ministry.css';

const MinistryList = ({ onSelectMinistry }) => {
  const ministries = [
    { id: 1, name: 'Ushering', description: 'Welcome and guide attendees during services.', image: 'Connect.jpg' },
    { id: 2, name: 'Music', description: 'Lead worship and enhance the worship experience.', image: 'Choir.jpg' },
    { id: 3, name: 'Drama', description: 'Express biblical stories and messages through dramatic performances.', image: 'drama.jpg' },
    { id: 4, name: 'Children', description: 'Provide education and activities for children.', image: 'children.jpg' },
    // Add more ministries as needed
  ];
  const [expandedMinistries, setExpandedMinistries] = useState([]);

  const handleMinistryToggle = (ministryId) => {
    setExpandedMinistries((prevExpandedMinistries) =>
      prevExpandedMinistries.includes(ministryId)
        ? prevExpandedMinistries.filter((id) => id !== ministryId)
        : [...prevExpandedMinistries, ministryId]
    );
  };

  return (
    <div className="ministry-list-container">
      <ul className="ministry-list">
        {ministries.map((ministry) => (
          <li key={ministry.id} className={`ministry-item ${expandedMinistries.includes(ministry.id) ? 'expanded' : ''}`}>
            <div className="ministry-header" onClick={() => handleMinistryToggle(ministry.id)}>
              <h3>{ministry.name}</h3>
              <button className="expand-button">{expandedMinistries.includes(ministry.id) ? '-' : '+'}</button>
            </div>
            {expandedMinistries.includes(ministry.id) && (
              <div className="ministry-details">
                <img src={`./assets/${ministry.image}`} alt={ministry.name} className="ministry-image" />
                <p>{ministry.description}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MinistryList;

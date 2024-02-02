import React, { useState } from 'react';
import '../styling/Ministry.css';


const MinistryList = () => {
  const ministries = [
    { id: 1, name: 'Ushering', description: 'Welcome and guide attendees during services.', image: 'Connect.jpg' },
    { id: 2, name: 'Music', description: 'Lead worship and enhance the worship experience.', image: 'Choir.jpg' },
    { id: 3, name: 'Drama', description: 'Express biblical stories and messages through dramatic performances.', image: 'drama.jpg' },
    { id: 4, name: 'Children', description: 'Provide education and activities for children.', image: 'children.jpg' },
    // Add more ministries as needed
  ];

  // State to track the visibility of descriptions
  const [expandedMinistries, setExpandedMinistries] = useState([]);

  // Function to toggle the visibility of the ministry description
  const toggleMinistry = (ministryId) => {
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
          <li key={ministry.id} className="ministry-item">
            <div className="ministry-header">
              <h3>{ministry.name}</h3>
              <button className="ministry-button" onClick={() => toggleMinistry(ministry.id)}>
                {expandedMinistries.includes(ministry.id) ? '-' : '+'}
              </button>
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

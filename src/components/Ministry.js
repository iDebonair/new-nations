import React from 'react';
import '../styling/Ministry.css';

const MinistryList = () => {
  const ministries = [
    { id: 1, name: 'Ushering', description: 'Welcome and guide attendees during services.', image: 'ushering.jpg' },
    { id: 2, name: 'Music', description: 'Lead worship and enhance the worship experience.', image: 'music.jpg' },
    { id: 3, name: 'Drama', description: 'Express biblical stories and messages through dramatic performances.', image: 'drama.jpg' },
    { id: 4, name: 'Children', description: 'Provide education and activities for children.', image: 'children.jpg' },
    // Add more ministries as needed
  ];

  return (
    <div className="ministry-list-container">
      <ul className="ministry-list">
        {ministries.map(ministry => (
          <li key={ministry.id} className="ministry-item">
            <img src={`../assets/${ministry.image}`} alt={ministry.name} className="ministry-image" />
            <div className="ministry-details">
              <h3>{ministry.name}</h3>
              <p>{ministry.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MinistryList;

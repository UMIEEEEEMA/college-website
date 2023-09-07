// src/components/CourseCard.js
import React from 'react';

const CourseCard = ({ courseName, description, imageUrl }) => {
  return (
    <div className="card">
      <img src={imageUrl} className="card-img-top" alt={courseName} />
      <div className="card-body">
        <h5 className="card-title">{courseName}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
}

export default CourseCard;

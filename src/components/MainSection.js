// src/components/MainSection.js
import React from 'react';
import collegeImage from './college-image.jpg'; // Adjust the path to your image

const MainSection = () => {
  const mainSectionStyle = {
    background: 'black',
    color: 'white',
    padding: '60px',
    textAlign: 'center',
  };

  const headingStyle = {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '20px',
  };

  const subTitleStyle = {
    fontSize: '24px',
    marginBottom: '40px',
  };

  return (
    <section style={mainSectionStyle}>
      <img src={collegeImage} alt="Brickfields Asia College" className="small-image" />
      <h1 style={headingStyle}>Welcome to Our College</h1>
      <p style={subTitleStyle}>Learn, Explore, Succeed!</p>
    </section>
  );
};

export default MainSection;


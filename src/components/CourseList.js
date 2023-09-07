// src/components/CourseList.js
import React from 'react';
import CourseCard from './CourseCard';

const CourseList = () => {
  const courses = [
    {
      courseName: "Course Name: Bachelor of Laws (LL.B)",
      description: "Dive into the world of justice, rights, and legal expertise. Our Law program equips you with a deep understanding of legal systems, critical thinking skills, and the ability to advocate for justice. Explore various areas of law, from criminal to corporate, and embark on a journey to become a skilled legal professional.",
      imageUrl: 'https://www.msmlawgroup.com/wp-content/uploads/2020/09/courtroom.jpeg',
    },
    {
      courseName:"Course Name: Bachelor of Business Administration (BBA)",
      description: "Description: Our Bachelor of Business Administration (BBA) program offers a comprehensive exploration of the dynamic business landscape. Throughout this program, you'll delve into key areas such as finance, marketing, strategic management, and leadership. This BBA program goes beyond textbooks; it immerses you in real-world scenarios, challenging you to analyze and solve complex business problems.",
      imageUrl: 'https://th.bing.com/th/id/R.89f7496c232272ea275974f4bfddc600?rik=B%2b%2bYGDwpiz%2bzrQ&riu=http%3a%2f%2fwww.lauruscollege.edu%2fwp-content%2fuploads%2f2015%2f04%2f3-Hot-Careers-For-Business-Students.jpg&ehk=t3%2fgK4PFcTMQSA8fwOTacx79%2bEr92o14VfIGV2X90OQ%3d&risl=&pid=ImgRaw&r=0',
    },
    {
      courseName: "Course Name: Bachelor of Arts in Creative Writing",
      description: "Description: Immerse yourself in the world of imagination and storytelling. Our Creative Writing program fosters your creativity, hones your writing skills, and helps you craft compelling narratives. Whether you aspire to be a novelist, screenwriter, or poet, this course empowers you to express your unique voice and shape the world through words.",
      imageUrl: 'https://www.studyinternational.com/wp-content/uploads/2021/10/XPHu3qjw.jpeg',
    },
  ];

  return (
    <div className="container mt-4">
      <h2>Available Courses</h2>
      <div className="row">
        {courses.map((course, index) => (
          <div className="col-md-4" key={index}>
            <CourseCard
              courseName={course.courseName}
              description={course.description}
              imageUrl={course.imageUrl}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;

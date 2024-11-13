import React from 'react';
import './Courses.css';

const courses = [
  {
    
    coursesList: [
      { title: 'Web Development', imageUrl: '/images/webdev.jpg', description: 'Build dynamic and responsive websites using modern tools and technologies.' },
      { title: 'Artificial Intelligence', imageUrl: '/images/ai.jpg', description: 'Dive into the world of AI and machine learning algorithms.' },
      { title: 'AutoCAD Civil 3D', imageUrl: '/images/3d.WebP', description: 'Learn the fundamentals of AutoCAD 3D.' },
      { title: 'Revit', imageUrl: '/images/revit.WebP', description: 'Learn the fundamentals of Revit.' },
      { title: 'STAAD PRO', imageUrl: '/images/staad.jpg', description: 'Learn the fundamentals of STAAD PRO.' },
      { title: 'AutoCAD 2D', imageUrl: '/images/autocad-2016-1.jpg', description: 'Learn the fundamentals of AutoCAD 2D.' },
     

     
    ]
  },
  {
    
    coursesList: [
      { title: 'Java Programming', imageUrl: '/images/java.jpg', description: 'Start your Programming Journey with Java Programming.' },
      { title: 'Python Programming', imageUrl: '/images/python.jpg', description: 'Start your Programming Journey with Python Programming.' },
      { title: 'C Programming', imageUrl: '/images/c.jpg', description: 'Start your Programming Journey with C Programming.' },
    
    ]
  },
  {
   
    coursesList: [
      { title: 'Digital Marketing', imageUrl: '/images/digital.WebP', description: 'Gain Expertise in Digital Marketing .' },
      { title: 'WordPress Web Development', imageUrl: '/images/word.jpg', description: 'Master Wordepress Web Development.' },
      { title: 'Machine Learning', imageUrl: '/images/machine.jpg', description: 'Learn Machine Learning to create models that enable computers to learn from data and make predictions.' }
    ]
  }
];




const Courses = () => {
  return (
    <div className="courses-container">
      <h1>Our Courses</h1>
      {courses.map((courseCategory, index) => (
        <div className="course-category" key={index}>
          <h2>{courseCategory.category}</h2>
          <div className="courses-list">
            {courseCategory.coursesList.map((course, idx) => (
              <div className="course-card" key={idx}>
                <img src={course.imageUrl} alt={course.title} className="course-image" />
                <div className="course-info">
                  <h3>{course.title}</h3>
                  <p>{course.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Courses;



import React from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar';
import MainSection from './components/MainSection';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import CourseList from './components/CourseList';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <MainSection />
      <ContactForm />
      <CourseList />
      <Footer />
    </div>
  );
}

export default App;
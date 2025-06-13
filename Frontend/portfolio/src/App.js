import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import About from './About';
import Education from './Education';
import Skills from './Skills/Skills';
import Internship from './Internship';
import Projects from './Projects/Projects';
import Contact from './Contact';
import Navbar from './Home/navbar';
import Header from './Home/Header';


const App = () => {
  return (
    
      <div style={{overflow:"hidden", backgroundColor: 'rgba(175, 162, 153, 0.42)' }}>
        <Navbar/>
        <section id="header"><Header/></section>
        <section id="about"><About/></section>
        <section id="education"><Education/></section>
        <section id="skills"><Skills/></section>
        <section id="internship"><Internship/></section>
        <section id="projects"><Projects/></section>
        <section id="contact"><Contact/></section>
     
      </div>
  )
}

export default App
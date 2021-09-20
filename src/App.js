import React from 'react';
import './App.css';
import Header from './components/Header';
import Aboutme from './components/Aboutme';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className='app'>
     
        <div className='sections'>
          <Header/>
          <Aboutme/>
          <Education/>
          <Skills/>
          <Experience/>
          <Projects/>
          <Contact/>
          
        </div>
    </div>   
  )
}

export default App


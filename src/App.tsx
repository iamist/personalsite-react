import React from 'react';
import Header from './components/Header';
import Cover from './components/Cover';
import Experience from './components/Experience';
import TechSkills from './components/TechSkill';
import Footer from './components/Footer';
import {navLinks, experiences, techStacks} from './components/Data';
import './App.css';

function App() {
  return (
    <div className="App container">
      <Header headerNavItems={navLinks} />
      <Cover />
      <Experience experiences={experiences} />
      <TechSkills techStacks={techStacks}></TechSkills>
      <Footer></Footer>
    </div>
  );
}

export default App;

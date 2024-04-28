import React, {Component, useState} from "react";
import Project from './Project';
import '../styles/App.css';
function App() {
  const projects = [
    {
      name: "Project 1",
      description: "Description of Project 1"
    },
    {
      name: "Project 2",
      description: "Description of Project 2"
    },
    {
      name: "Project 3",
      description: "Description of Project 3"
    },
    {
      name: "Project 4",
      description: "Description of Project 4"
    }
    
  ];

  return (
    <div className="ns-wrapper">
      {projects.map((project, index) => (
        <Project
          key={index}
          name={project.name}
          description={project.description}
        />
      ))}
    </div>
  );
}

export default App;


import React from 'react';
import ProjectsWrapper from "./projectsWrapper";
import MotiveWrapper from "./motiveWrapper";
import TeamWrapper from "./teamWrapper";

const About = () => {
  return (
    <div>
      <MotiveWrapper/>
      <div id="main-wrapper">
        <div id="main" className="container">
          <div className="row">
            <TeamWrapper/>
          </div>
        </div>
      </div>

      <ProjectsWrapper/>
    </div>

  )
}

export default About;

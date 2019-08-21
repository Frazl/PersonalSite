import React from 'react';
import '../App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faAddressCard } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import ProjectBox from './projectbox'




class ProjectsPage extends React.Component {
  constructor(){
    super()
  }

  render(){

    let displayProjects = () => {
      let a = []
      
      this.props.projects.map((project) => {
        a.push(
        <div className="flex-1 box" style={{minWidth: '33%'}}>
        <ProjectBox project={project}></ProjectBox>
        </div>
          )
      })
      return a
    }
  return (
    <div className="content">
    {displayProjects()}
    </div>
  );
}
}

export default ProjectsPage;

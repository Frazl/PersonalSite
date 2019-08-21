import React from 'react';
import '../App.css';
import LinkBox from './linkbox'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faAddressCard } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'




class ProjectBox extends React.Component {
  render(){
  return (
    <div>
      <h3>{this.props.project.projectName}</h3>
          <h4>Stack</h4>
          {this.props.project.stack ? this.props.project.stack : 'This project was made with nothing! Or there is an error...'}
          <h4>Motivation</h4>
          {this.props.project.motivation ? this.props.project.motivation : 'My inability to make a functioning website...'}
          <h4>Description</h4>
          {this.props.project.description ? this.props.project.description : 'This project is so good it does not need a description or there is an error...'}
          {this.props.project.githubLink ? <h5><a href={this.props.project.githubLink}>Github Link</a></h5> : ''}
          {this.props.project.link ? <h5><a href={this.props.project.link}>Link</a></h5> : ''}
    </div>
  );
}
}

export default ProjectBox;

import React from 'react';
import '../App.css';
import LinkBox from './linkbox'
import ProjectBox from './projectbox'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faAddressCard } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'




class Home extends React.Component {
  constructor(){
    super()
  }

  render(){
    let featuredProject = {
      projectName: 'Featured Project - Drone Flight Planner',
      stack: 'ReactJS, Google Maps Cloud API, JS2PDF',
      motivation: 'My cousin is the offical DJI retailer for drones within Ireland and everyone who flys a drone technically must fill in a flight survey and send it to the nearest air traffic control center.',
      description: 'A simple walkthrough to fill out the SUA Flight in Controlled Airspace Application Form. Users can click on the map and interact with it select where they wish to take off from which prepopulates a PDF with the data for the UF101 form ready to be sent off. If you wish to test it visit the link below and enter "damo" all lowercase and follow the steps.',
      githubLink: '',
      link: 'https://drones.seanfradl.com',
    }
  return (
    <div>
      <div className="jumbotron">
        <h1>Sean Fradl - Fraz</h1>
        <h2>Personal Site <FontAwesomeIcon icon={faCoffee} /></h2>
        <p>Hello and welcome to my personal website. Here you can find information about myself, my projects and how to contact me.</p>
        <p>This website also contains a few articles about interesting things I've discovered during my tech career along with project logs.</p>
      </div>
      <div className="content">
        <div className="flex-1 box">
          <LinkBox />
        </div>
        <div className="flex-2 box">
          <ProjectBox project={featuredProject} />
        </div>
      </div>
    </div>
  );
}
}

export default Home;

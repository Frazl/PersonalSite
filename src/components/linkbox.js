import React from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faAddressCard } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'




class LinkBox extends React.Component {
  constructor(){
    super()
  }

  render(){

    let linkStyling = {
      margin: '2%'
    }
  return (
        <div>
          <h3>
            Personal Links
          </h3>
          <ul style={{listStyle: "none"}}>
            <li className="fadeOnHover" style={linkStyling}>
            <FontAwesomeIcon style={{fontSize: '1.5rem'}} icon={faGithub} /> - Github <a href="https://github.com/Frazl">@Frazl</a>
            </li>
            <li className="fadeOnHover" style={linkStyling}>
            <FontAwesomeIcon style={{fontSize: '1.5rem'}} icon={faLinkedin} /> - LinkedIn <a href="https://www.linkedin.com/in/seanfradl/">@Sean Fradl</a>
            </li>
            <li className="fadeOnHover" style={linkStyling}>
            <FontAwesomeIcon style={{fontSize: '1.5rem'}} icon={faTwitter} /> - Twitter <a href="https://twitter.com/SFradl">@SFradl</a>
            </li>
            <li className="fadeOnHover" style={linkStyling}>
            <FontAwesomeIcon style={{fontSize: '1.5rem'}} icon={faAddressCard} /> - Email <a href="mailto:seanfradl@gmail.com">SeanFradl@gmail.com</a>
            </li>
          </ul>
        </div>
  );
}
}

export default LinkBox;

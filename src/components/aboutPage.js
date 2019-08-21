import React from 'react';
import '../App.css';




class AboutPage extends React.Component {
  constructor(){
    super()
  }

  render(){
  return (
    <div className="content">
    <div className="flex-1 box">
        <h1>About Me</h1>
        <p>My name is Sean Fradl, I currently attend Dublin City University, Ireland where I study Computer Applications &amp; Software Engineering (CASE). I've also recently secured and internship position with the large multinational software organisation SAP in Citywest Business Campus.</p>
    </div>
    <div className="flex-1 box">
        <h1>Interests</h1>
        <p>I'm interested in the fields of automation and web development. I enjoy finding solutions to interesting problems through the use of web applications and restful APIs as demonstrated by my projects. I'm currently learning GoLang and also know Python, Java and Javascript as well as some R and MIPs Assembly.</p>
    </div>
    <div className="flex-1 box">
        <h1>Sport</h1>
        <p>I'm a big fan of Hurling and Gaelic football and watch the games at the weekend when I can. I'm hoping to rejoin my local GAA team that I played with up until I started university when I'm in a full time job after university and can make the full commitment.</p>
        <h5>Up the Dubs!</h5>
    </div>
    </div>
  );
}
}

export default AboutPage;

import React from 'react';
import '../App.css';
import LinkBox from './linkbox';




class ContactPage extends React.Component {
  constructor(){
    super()
  }

  render(){
  return (
    <div className="content">
    <div className="flex-1 box">
        <h1>Contact Me</h1>
        <p>If you are intersted in contacting me the best place to do it is most likely through LinkedIn or alternatively via Email. I generally repsond to any sane questions or queries and I'm glad to help anyone in regards to projects.</p>
    </div>
    <div className="flex-1 box">
        <h1>Slides</h1>
        <p>If you are looking for slides from a presentation you can find them <a>here</a> or alternatively if it was through Redbrick then they shall be on the Redbrick website.</p>
    </div>
    <div className="flex-1 box">
        <LinkBox />
    </div>
    </div>
  );
}
}

export default ContactPage;

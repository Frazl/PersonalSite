import React from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTimesCircle } from '@fortawesome/free-solid-svg-icons'



class BlogPost extends React.Component {
  constructor(){
    super()
  }

  /* 
  post = {
      title: '',
      subtitle: '',
      content: ['']
  }
  */

  render(){

    let mapPost = (paragraphs) => {
        let paras = []
        paragraphs.map((para) => {
            paras.push(
                <p className="blogContent">{para}</p>
            )
        })
        return paras
    }

    let featuredImage = {
        width: '100%',
        maxHeight: '40vh',
    }
  return (
    <div className="blogPost">
        <span onClick={this.props.exit} className="blogExit"><FontAwesomeIcon style={{fontSize: '3rem'}} icon={faTimesCircle} /></span>
        <img src={this.props.post.featuredImage} style={featuredImage}></img>
        {this.props.post.title ? <h1 className='blogTitle'>{this.props.post.title}</h1> : ''}
        {this.props.post.subtitle ? <h2 className="blogSubtitle">{this.props.post.subtitle}</h2> : ''}
        {mapPost(this.props.post.paragraphs)}
    </div>
  );
}
}

export default BlogPost;

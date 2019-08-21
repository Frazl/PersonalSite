import React from 'react';
import '../App.css';




class BlogsPage extends React.Component {
  constructor(){
    super()
  }

  render(){

    let displayBlogs = () => {
      let a = []
      
      this.props.blogs.map((blog, i) => {
        a.push(
        <div className="flex-1 box" style={{minWidth: '33%'}}>
        <h2>{blog.title}</h2>
        <p>
            {blog.paragraphs[0].slice(0, 40)}...<a onClick={() => {this.props.display(i)}}>Read</a>
        </p>
        </div>
          )
      })
      return a
    }
  return (
    <div className="content">
    {displayBlogs()}
    </div>
  );
}
}

export default BlogsPage;

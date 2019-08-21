import React from 'react';
import './App.css';
import Navbar from './components/navbar'
import Home from './components/home'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import BlogPost from './components/blogPost';
import ProjectsPage from './components/projectsPage';
import BlogsPage from './components/blogsPage';
import AboutPage from './components/aboutPage';
import ContactPage from './components/contactPage'
import projects from './projects.json'
import blogs from './blogs.json'



class App extends React.Component {
  constructor(){
    super()
    this.state = {
      currentPage: 0,
      blogs: blogs.blogs,
      projects: projects.projects,
      displayingBlog: false,
      blogPost: 0,
    }

    this.swapPage = this.swapPage.bind(this)
    this.displayBlogPost = this.displayBlogPost.bind(this)
    this.displaySite = this.displaySite.bind(this)
  }

  swapPage = (pageNo) => {
    this.setState({
      currentPage: pageNo
    })
  }
  
  displayBlogPost = (postID) => {
    this.setState({
      displayingBlog: true,
      blogPost: postID
    })
  }

  displaySite = () => {
    this.setState({
      displayingBlog: false,
    })
  }

  render(){

    let post = {
      featuredImage: 'https://scontent-lhr3-1.xx.fbcdn.net/v/t31.0-8/26220501_1651991294866491_4785892716267343338_o.jpg?_nc_cat=101&_nc_oc=AQkM8upKKBBHFgyyZxkGi5xkjx7YSR6eIBu-y4qn-7Yz3nO4GgWL09_ue36dDFWC6OU&_nc_ht=scontent-lhr3-1.xx&oh=27d3776e65c50664d7b89438c78f8744&oe=5DDC1B77',
      title: 'Developing a UF101 Form Filler',
      subtitle: 'Quick thoughts on my UF101 Application',
      content: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit mauris eget ipsum luctus iaculis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec aliquet diam eget nisi iaculis, sit amet porttitor velit posuere. Vestibulum at dui nisl. Nunc eleifend ex eu hendrerit imperdiet. Vestibulum congue mauris ut tempor finibus. Ut rutrum non ex a scelerisque. Donec et lorem vel risus posuere lacinia ut id felis. Mauris ut luctus arcu. Donec fringilla erat eu placerat vestibulum. Fusce sit amet tellus placerat mi imperdiet rutrum at a nunc. Praesent aliquam nulla magna, eu tincidunt enim vehicula ac. Maecenas egestas, eros ultricies congue mollis, neque enim viverra lorem, eu bibendum metus felis ac ante. Suspendisse sem arcu, pharetra vel rutrum cursus, consectetur vitae eros.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit mauris eget ipsum luctus iaculis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec aliquet diam eget nisi iaculis, sit amet porttitor velit posuere. Vestibulum at dui nisl. Nunc eleifend ex eu hendrerit imperdiet. Vestibulum congue mauris ut tempor finibus. Ut rutrum non ex a scelerisque. Donec et lorem vel risus posuere lacinia ut id felis. Mauris ut luctus arcu. Donec fringilla erat eu placerat vestibulum. Fusce sit amet tellus placerat mi imperdiet rutrum at a nunc. Praesent aliquam nulla magna, eu tincidunt enim vehicula ac. Maecenas egestas, eros ultricies congue mollis, neque enim viverra lorem, eu bibendum metus felis ac ante. Suspendisse sem arcu, pharetra vel rutrum cursus, consectetur vitae eros.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit mauris eget ipsum luctus iaculis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec aliquet diam eget nisi iaculis, sit amet porttitor velit posuere. Vestibulum at dui nisl. Nunc eleifend ex eu hendrerit imperdiet. Vestibulum congue mauris ut tempor finibus. Ut rutrum non ex a scelerisque. Donec et lorem vel risus posuere lacinia ut id felis. Mauris ut luctus arcu. Donec fringilla erat eu placerat vestibulum. Fusce sit amet tellus placerat mi imperdiet rutrum at a nunc. Praesent aliquam nulla magna, eu tincidunt enim vehicula ac. Maecenas egestas, eros ultricies congue mollis, neque enim viverra lorem, eu bibendum metus felis ac ante. Suspendisse sem arcu, pharetra vel rutrum cursus, consectetur vitae eros.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit mauris eget ipsum luctus iaculis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec aliquet diam eget nisi iaculis, sit amet porttitor velit posuere. Vestibulum at dui nisl. Nunc eleifend ex eu hendrerit imperdiet. Vestibulum congue mauris ut tempor finibus. Ut rutrum non ex a scelerisque. Donec et lorem vel risus posuere lacinia ut id felis. Mauris ut luctus arcu. Donec fringilla erat eu placerat vestibulum. Fusce sit amet tellus placerat mi imperdiet rutrum at a nunc. Praesent aliquam nulla magna, eu tincidunt enim vehicula ac. Maecenas egestas, eros ultricies congue mollis, neque enim viverra lorem, eu bibendum metus felis ac ante. Suspendisse sem arcu, pharetra vel rutrum cursus, consectetur vitae eros.']
  }
  
  if(this.state.displayingBlog){
    return(
      <BlogPost exit={this.displaySite} post={this.state.blogs[this.state.blogPost]}/>
    )
  }
  else
  return (
    <div style={{height: '100%'}}>
      <Navbar currentPage={this.state.currentPage} swapPage={this.swapPage} />
      <div className="container">
      {this.state.currentPage === 0 ? <Home /> : '' }
      {this.state.currentPage === 1 ? <BlogsPage display={this.displayBlogPost} blogs={this.state.blogs} /> : '' }
      {this.state.currentPage === 2 ? <ProjectsPage projects={this.state.projects} /> : '' }
      {this.state.currentPage === 3 ? <AboutPage /> : '' }
      {this.state.currentPage === 4 ? <ContactPage /> : '' }
      </div>
      <div className="footer"><a style={{color: "white"}} href="https://github.com/Frazl"><FontAwesomeIcon style={{fontSize: '1.5rem'}} icon={faGithub} /></a></div>
    </div>
  );
}
}

export default App;
